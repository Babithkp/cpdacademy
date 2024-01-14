from flask import render_template, request, session, redirect, send_file, abort, jsonify
from markupsafe import Markup
from functools import wraps
from project import app, db
from project.models import *
from project.send_mail import send_mail
from project.stripe_config import stripe_config
from project import config
import stripe
import os

# import cloudscraper
# scraper = cloudscraper.create_scraper()
# ALISON = "https://alison.com"

stripe.api_key = stripe_config["KEY"]
TITLE = "Healthcare CPD"
domain = ("https", "healthcarecpd.org")
TESTING = False


@app.route("/TESTING")
def testing():
    if TESTING:
        return "True"
    return "False"


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("id") is None:
            return redirect("/login")
        return f(*args, **kwargs)
    return decorated_function

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("id") != -1:
            return redirect("/login")
        return f(*args, **kwargs)
    return decorated_function

def check_course(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user_id = session["id"]
        course_id = kwargs["c_ID"]
        paid = Paid.query.filter_by(course_id=course_id, user_id=user_id).first()
        if not paid:
            return redirect(f"/info/{course_id}")
        if course_id == 6:
            return redirect("/lms/care-certificate")
        return f(*args, **kwargs)
    return decorated_function

# Using another decorator for previous course to avoid infinite recursion
def check_course_6(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user_id = session["id"]
        course_id = 6
        paid = Paid.query.filter_by(course_id=course_id, user_id=user_id).first()
        if not paid:
            return redirect(f"/info/{course_id}")
        return f(*args, **kwargs)
    return decorated_function


@app.route("/html/<path:path>")
def extra_files(path):
    file = f"html/{path}"
    file = os.path.join(app.config["APP_DIR"], "project", file)
    if os.path.isfile(file):
        return send_file(file, as_attachment=False)
    # data = scraper.get(f"{ALISON}/html/{path}").text
    # if file.endswith(".js"):
    #     open(file, "w").write(data)
    #     return send_file(file, as_attachment=False)
    return abort(404)

@app.route("/")
def home():
    return render_template("home.html", homepage="True", title=TITLE)


@app.route("/validate_email", methods=["POST"])
def validate_email():
    email = request.form["email"].lower()
    if(Users.query.filter_by(email=email).first()):
        return "false"
    return "true"


@app.route("/signup", methods=["POST"])
def signup():
    form = request.form
    email = form["email"].lower()
    passwd = form["passwd"]
    f_name = form["f_name"]
    l_name = form["l_name"]
    company = form["company"]
    country = form["country"]
    addr1 = form["addr_1"]
    addr2 = form["addr_2"]
    city = form["city"]
    postal_code = form["postal_code"]
    phone = form["phone"]

    if(Users.query.filter_by(email=email).first()):
        return "email"

    user = Users(
        email=email,
        password=passwd,
        f_name=f_name,
        l_name=l_name,
        company=company,
        country=country,
        addr1=addr1,
        addr2=addr2,
        city=city,
        postcode=postal_code,
        phone=phone
    )
    db.session.add(user)
    db.session.commit()

    return "success"


@app.route("/login", methods=["GET", "POST"])
def login():
    if (session.get("id")):
        return redirect("/account")
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        if email == "admin@admin.com" and password == "@admin012":
            session["id"] = -1
            session["email"] = email
            return redirect("/admin")
        if TESTING:
            user = Users.query.filter_by(email=email).first()
        else:
            user = Users.query.filter_by(email=email, password=password).first()
        if(user):
            session["id"] = user.id
            session["email"] = email
        return redirect("/account")
    return render_template("login.html", title=TITLE)


@app.route("/account")
@login_required
def account():
    if session["id"] == -1:
        return redirect('/admin')
    user = Users.query.get(session["id"])
    paid = Paid.query.filter_by(user_id=user.id).all()
    paid = [i.course_id for i in paid]
    courses = Course.query.filter(Course.ID.in_(paid)).all()
    return render_template("account/account.html", user=user, title=TITLE, courses=courses)


@app.route("/admin")
@admin_required
def admin():
    return render_template("admin.html")


@app.route("/info/<int:ID>")
def course_info(ID):
    course = db.session.get(Course, ID)
    if not course:
        return abort(404)
    conf = config.read_config()
    conf = conf["courses"][str(ID)]
    return render_template(f"/course_data/{course.html}/info.html", course_id=ID, title=course.title, img=f"/static/course/{course.html}/main.webp", disabled=conf["disabled"], price=conf["price"])


@app.route("/info/mental-info")
def info_mental():
    return render_template("mental-info.html", course_id=None, title="Mental Health Certificate", img="/static/course/mental/Autism-Awareness-200x200.png", disabled="disabled", price=150)


@app.route('/create-checkout-session')
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': stripe_config['PRD_ID'],
                    'quantity': stripe_config['QUANTITY'],
                },
            ],
            mode='payment',
            success_url = f'{domain[0]}://{domain[1]}/yfufcn1qqt',
            cancel_url = f'{domain[0]}://{domain[1]}/checkout',
        )
    except Exception as e:
        print(e)
        return str(e)

    return redirect(checkout_session.url, code=303)


@app.route("/yfufcn1qqt")
def accept_payment():
    return "Paid"


@app.route("/checkout/<int:ID>")
def checkout(ID):
    course = db.session.get(Course, ID)
    if not course:
        return abort(404)
    
    conf = config.read_config()
    conf = conf["courses"][str(ID)]
    return render_template("checkout.html", course_id=ID, title=course.title, price=conf["price"])


def get_units():
    units = Unit.query.all()
    return units

def get_topics(units):
    topics = []
    for i in units:
        topic = Section.query.filter_by(unit_id=i.unit_id).all()
        topics.append(topic)
    return topics

def get_unit_progress(units):
    all_unit_progress = Unit_Progress.query.filter_by(user_id=session["id"]).order_by("unit_id")
    unit_progress = []
    for i in units:
        unit_progress.append("notcompleted")
    for i in range(all_unit_progress.count()):
        unit_progress[i] = "completed"

    return unit_progress

def get_topic_progress(topics):
    all_topic_progress = Progress.query.filter_by(user_id=session["id"]).order_by("section_id").group_by("section_id").all()
    topic_progress = []
    for i in topics:
        temp = []
        for x in range(len(i)):
            temp.append("notcompleted")
        topic_progress.append(temp)

    if (all_topic_progress):
        formated_progress = []
        prev_unit = all_topic_progress[0].unit_id
        temp = []
        for i in all_topic_progress:
            if (i.unit_id == prev_unit):
                temp.append("completed")
            else:
                formated_progress.append(temp)
                temp = []
                temp.append("completed")
            prev_unit = i.unit_id

        formated_progress.append(temp)
        for i in range(len(formated_progress)):
            for x in range(len(formated_progress[i])):
                topic_progress[i][x] = formated_progress[i][x]

    return topic_progress

@app.route("/lms/care-certificate")
@login_required
@check_course_6
def care_certificate():
    units = get_units()
    topics = get_topics(units)
    unit_progress = get_unit_progress(units)
    topic_progress = get_topic_progress(topics)

    total_topics = Section.query.count()
    completed_topics = Progress.query.filter_by(user_id=session["id"]).group_by("section_id").count()

    return render_template("care_certificate/care_certificate.html", title=TITLE, units=units, unit_progress=unit_progress, topics=topics, topic_progress=topic_progress, Markup=Markup, total_topics=total_topics, completed_topics=completed_topics)


def getLatestUnit():
    return Unit_Progress.query.filter_by(user_id=session["id"]).order_by("unit_id").count() + 1


def check_unit(unit):
    latest_unit = getLatestUnit()
    if (unit <= latest_unit and unit > 0 and unit < 16):
        return True
    return False


@app.route("/lms/care-certificate/unit/<int:unit_id>")
@login_required
@check_course_6
def unit(unit_id):
    latest_unit = getLatestUnit()
    if not check_unit(unit_id):
        return redirect(f"/lms/care-certificate/unit/{latest_unit}")
    unit_dir = f"care_certificate/units"
    
    units = get_units()
    topics = get_topics(units)
    unit_progress = get_unit_progress(units)
    topic_progress = get_topic_progress(topics)

    total_topics = Section.query.count()
    completed_topics = Progress.query.filter_by(user_id=session["id"]).group_by("section_id").count()

    return render_template(f"{unit_dir}/unit.html", title=TITLE, units=units, unit_progress=unit_progress, topics=topics, topic_progress=topic_progress, unit_id=unit_id, Markup=Markup, total_topics=total_topics, completed_topics=completed_topics, latest_unit=latest_unit)


def getLatestTopic():
    topics = Progress.query.filter_by(user_id=session["id"]).order_by("section_id").all()#[-1].section_id + 1
    if topics:
        latest_topic = topics[-1].section_id
    else:
        latest_topic = 0
    return latest_topic + 1


def check_topic(unit_id, topic_no):
    section_id = Section.query.filter_by(unit_id=unit_id).order_by("section_id").all()[topic_no-1].section_id
    total_topics = Section.query.count()
    latest_topic = getLatestTopic()
    if section_id <= latest_topic and section_id > 0 and section_id <= total_topics:
        return True
    return False


@app.route("/lms/care-certificate/unit/<int:unit_id>/topic/<int:topic_no>")
@login_required
@check_course_6
def topic(unit_id, topic_no):
    if not check_topic(unit_id, topic_no):

        return redirect(f"/lms/care-certificate/unit/{getLatestUnit()}")
    unit_dir = f"care_certificate/units/unit_{unit_id}"

    section_id = Section.query.filter_by(unit_id=unit_id).order_by("section_id").all()[topic_no-1].section_id
    if not Progress.query.filter_by(unit_id=unit_id, user_id=session["id"], section_id=section_id).first():
        progress = Progress(unit_id=unit_id, user_id=session["id"], section_id=section_id)
        db.session.add(progress)
        db.session.commit()
    return render_template(f"{unit_dir}/{topic_no}.html", title=TITLE)


@app.route("/lms/care-certificate/unit/<int:unit_id>/quiz")
@login_required
@check_course_6
def quiz(unit_id):
    last_topic = Section.query.filter_by(unit_id=unit_id).all()[-1].section_id - 1
    if not Progress.query.filter_by(user_id=session["id"], section_id=last_topic).first():
        return redirect(f"/lms/care-certificate/unit/{unit_id}")

    unit_dir = f"care_certificate/units/unit_{unit_id}"
    units = get_units()
    topics = get_topics(units)
    unit_progress = get_unit_progress(units)
    topic_progress = get_topic_progress(topics)

    total_topics = Section.query.count()
    completed_topics = Progress.query.filter_by(user_id=session["id"]).group_by("section_id").count()

    return render_template(f"{unit_dir}/quiz.html", title=TITLE, units=units, unit_progress=unit_progress, topics=topics, topic_progress=topic_progress, unit_id=unit_id, Markup=Markup, total_topics=total_topics, completed_topics=completed_topics)


@app.route("/lms/care-certificate/unit/<int:unit_id>/quiz/done")
@login_required
@check_course_6
def done_quiz(unit_id):
    section_id = Section.query.filter_by(unit_id=unit_id, type="quiz").first().section_id
    if not Progress.query.filter_by(unit_id=unit_id, user_id=session["id"], section_id=section_id).first():
        progress = Progress(unit_id=unit_id, user_id=session["id"], section_id=section_id)
        db.session.add(progress)
        db.session.commit()
    if not Unit_Progress.query.filter_by(user_id=session["id"], unit_id=unit_id).first():
        unit = Unit_Progress(user_id=session["id"], unit_id=unit_id, status=True)
        db.session.add(unit)
        db.session.commit()
    return "ok"


def get_sidebar_data(c_ID, progress):
    data = {}
    user_id = session["id"]
    topics = SubModule.query.filter_by(course_id=c_ID)

    data["total_topics"] = topics.count()
    data["completed_topics"] = topics.filter(SubModule.ID<=progress).count()
    data["width"] = data["completed_topics"] * 100 / data["total_topics"]
    return data


def get_SubModules(modules):
    data = {}
    for m in modules:
        sub_modules = SubModule.query.filter_by(module_id=m.ID).all()
        data[m.ID] = sub_modules
    return data


def get_next_topic(c_ID, progress):
    if progress == 0:
        topic = SubModule.query.filter_by(course_id=c_ID).first()
    else:
        topic = SubModule.query.filter_by(course_id=c_ID, ID=progress+1).first()
    return topic


@app.route("/course/<int:c_ID>")
@login_required
@check_course
def get_course(c_ID):
    course = db.session.get(Course, c_ID)
    if not course:
        return redirect("/")
    user_id = session["id"]
    progress = get_progress(c_ID, user_id)
    next_module_id = 0
    last_module_id = SubModule.query.filter_by(course_id=c_ID).order_by(SubModule.ID.desc()).first().ID
    if last_module_id == progress:
        course_completed = True
    else:
        course_completed = False
        next_module_id = get_next_topic(c_ID, progress).module_id

    modules = Module.query.filter_by(course_id=course.ID).all()
    sidebar = get_sidebar_data(c_ID, progress)
    topics = get_SubModules(modules)
    return render_template(f"course_data/course_layouts/course.html", course=course, modules=modules, topics=topics, next_module_id=next_module_id, course_completed=course_completed, sidebar=sidebar, progress=progress)


def get_progress(c_ID, user_id):
    topics_progress = 0
    progress = NewProgress.query.filter_by(course_id=c_ID, user_id=user_id).first()
    if progress:
        topics_progress = progress.sub_id
    return topics_progress


@app.route("/course/<int:c_ID>/module/<int:m_num>")
@login_required
@check_course
def get_course_module(c_ID, m_num):
    user_id = session["id"]
    course = db.session.get(Course, c_ID) # Specific Course
    module = Module.query.filter_by(course_id=c_ID, module_num=m_num).first() # Specific Module
    if not module:
        return abort(404)
    modules = Module.query.filter_by(course_id=course.ID).all() # List of all modules
    topics = get_SubModules(modules) # List of all submodules of all modules in dictionary
    total_modules = Module.query.filter_by(course_id=c_ID).count() # Total number of modules of this course
    progress = get_progress(c_ID, user_id)

    next_module_id = 0
    last_module_id = SubModule.query.filter_by(course_id=c_ID).order_by(SubModule.ID.desc()).first().ID
    if last_module_id == progress:
        course_completed = True
    else:
        course_completed = False
        next_module_id = get_next_topic(c_ID, progress).module_id
    sidebar = get_sidebar_data(c_ID, progress)
    return render_template("course_data/course_layouts/module.html", course=course, module=module, modules=modules, topics=topics, total_modules=total_modules, progress=progress, sidebar=sidebar, course_completed=course_completed, next_module_id=next_module_id)


def update_progress(c_ID, topic_id):
    user_id = session["id"]
    progress = NewProgress.query.filter_by(course_id=c_ID, user_id=user_id).first()
    if not progress:
        progress = NewProgress(course_id=c_ID, user_id=user_id)
        db.session.add(progress)
    progress.sub_id = topic_id
    db.session.commit()


@app.route("/course/<int:c_ID>/module/<int:module_num>/sub_module/<int:sub_num>")
@login_required
@check_course
def sub_module(c_ID, module_num, sub_num):
    topic = SubModule.query.filter_by(course_id=c_ID, module_num=module_num, sub_num=sub_num).first()
    if topic:
        user_id = session["id"]
        progress = get_progress(c_ID, user_id)
        next_topic = get_next_topic(c_ID, progress)
        
        if next_topic and next_topic.ID < topic.ID:
            return redirect(f"/course/{c_ID}")


        last_topic = SubModule.query.filter_by(course_id=c_ID).order_by(SubModule.ID.desc()).first().ID
        # Update Progress of user only if it is not last topic
        if topic.ID > progress and topic.ID != last_topic:
            update_progress(c_ID, topic.ID)

        course = db.session.get(Course, c_ID)
        URL = next_sub_module(c_ID, module_num, sub_num)
        return render_template(f"course_data/{course.html}/module_{module_num}/{sub_num}.html", module_title=topic.title, URL=URL, course_id=c_ID, module_num=module_num)
    return redirect("/account")


def next_sub_module(c_ID, m_num, sub_num):
    topic = SubModule.query.filter_by(course_id=c_ID, module_num=m_num, sub_num=sub_num).first()
    next_topic = SubModule.query.filter_by(course_id=c_ID, ID=topic.ID+1).first()
    if next_topic:
        URL = f"/course/{c_ID}/module/{next_topic.module_num}/sub_module/{next_topic.sub_num}"
    else:
        URL = f"/course_completed/{c_ID}"
    return URL


@app.route("/course_completed/<int:c_ID>")
@login_required
@check_course
def course_complete(c_ID):
    last_topic = SubModule.query.filter_by(course_id=c_ID).order_by(SubModule.ID.desc()).first()
    update_progress(c_ID, last_topic.ID)
    return redirect(f"/course/{c_ID}")
    # return render_template("course_data/course_complete.html")


@app.route("/password_reset", methods=["GET", "POST"])
def reset_password():
    layout = """
<h1 style="text-align: center;">Healthcare CPD</h1>
<p>CODE: <b>{}</b></p>
"""
    if request.method == "POST":
        email = request.form["email"]
        code = request.form["code"]
        if (Users.query.filter_by(email=email).first()):
            message = layout.format(code)
            send_mail(email, "Verification Code", message)
            return "True"
        else:
            return "False"
    return render_template("password_reset.html", title=TITLE)

@app.route("/set_password", methods=["GET", "POST"])
def set_password():
    email = request.form["email"]
    password = request.form["passwd"]

    user = Users.query.filter_by(email=email).first()
    if (user):
        user.email = email
        user.password = password
        db.session.commit()
    return "True"

@app.route("/logout")
def logout():
    session.pop('id', None)
    session.pop('email', None)
    return redirect("/")


@app.route("/fetch/users")
@admin_required
def fetch_users():
    users = Users.query.all()
    users_dict = []
    for i in users:
        user = {}
        user["id"] = i.id
        user["f_name"] = i.f_name
        user["l_name"] = i.l_name
        user["email"] = i.email
        users_dict.append(user)
    
    return jsonify(users_dict)

@app.route("/fetch/courses")
@admin_required
def fetch_courses():
    courses = Course.query.all()
    course_dict = {}
    for i in courses:
        course_dict[i.ID] = i.title
    
    return jsonify(course_dict)

@app.route("/fetch/user_progress/<int:ID>")
@admin_required
def fetch_user_progress(ID):
    user = db.session.get(Users, ID)
    user_progress = {}

    if user:
        paid = Paid.query.filter_by(user_id=ID).all()
        for i in paid:
            data = {}
            if i.course_id == 6:
                # Progress of care course#6
                data["total"] = Section.query.count()
                data["completed"] = Progress.query.filter_by(user_id=ID).group_by("section_id").count()
            else:
                # New progress. From course#1-5
                progress = get_progress(i.course_id, ID)
                topics = SubModule.query.filter_by(course_id=i.course_id)
                data["total"] = topics.count()
                data["completed"] = topics.filter(SubModule.ID<=progress).count()
            user_progress[i.course_id] = data
        

    return jsonify(user_progress)
