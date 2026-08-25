from flask import render_template, request, session, redirect, send_file, abort, jsonify, url_for
from markupsafe import Markup
from functools import wraps
from project import app, db
from project.models import *
from project.send_mail import send_mail
from project import config
import stripe
import os
from fpdf import FPDF
from datetime import datetime
import uuid

# import cloudscraper
# scraper = cloudscraper.create_scraper()
# ALISON = "https://alison.com"

def scrap_alison_file(file, path):
    # print("Scrapping Alison File")
    # data = scraper.get(f"{ALISON}/html/{path}").text
    # if file.endswith(".js"):
    #     open(file, "w").write(data)
    #     return send_file(file, as_attachment=False)
    return abort(404)


TITLE = "Healthcare CPD"
domain = config.read_config()["domain"]["domain"]
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
    return scrap_alison_file(file, path)

@app.route("/")
def home():
    return render_template("home.html", homepage="True", title=TITLE)

@app.route("/validate_email", methods=["POST"])
def validate_email():
    email = request.form["email"].lower()
    if(Users.query.filter_by(email=email, paid=True).first()):
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

    if(Users.query.filter_by(email=email, paid=True).first()):
        status = False
        cause = "email"
        user_id = -1
    else:
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
        status = True
        cause = None
        user_id = user.id

    return jsonify({"status": status, "cause": cause, "user_id": user_id})


@app.route("/login", methods=["GET", "POST"])
def login():
    if (session.get("id")):
        return redirect("/account")
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        if email == "admin@admin.com" and password == "admin@012":
            session["id"] = -1
            session["email"] = email
            return redirect("/admin")
        if TESTING:
            user = Users.query.filter_by(email=email).first()
        else:
            user = Users.query.filter_by(email=email, password=password, paid=True).first()
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
    if not user:
        session.pop("id")
        return redirect("/login")
    paid = Paid.query.filter_by(user_id=user.id).all()
    paid_ids = [i.course_id for i in paid]
    courses = Course.query.filter(Course.ID.in_(paid_ids)).all()
    
    for course in courses:
        course.is_complete = is_course_complete(course.ID, user.id)
    
    return render_template("account/account.html", user=user, title=TITLE, courses=courses)


def is_course_complete(c_ID, user_id):
    if c_ID == 6:
        total = Section.query.count()
        completed = Progress.query.filter_by(user_id=user_id).group_by("section_id").count()
        return completed >= total if total > 0 else False
    else:
        progress = get_progress(c_ID, user_id)
        last_topic = SubModule.query.filter_by(course_id=c_ID).order_by(SubModule.ID.desc()).first()
        if not last_topic:
            return False
        return progress >= last_topic.ID


@app.route("/download_certificate/<int:c_ID>")
@login_required
def download_certificate(c_ID):
    user_id = session["id"]
    if not is_course_complete(c_ID, user_id):
        return abort(403)
    
    user = Users.query.get(user_id)
    course = Course.query.get(c_ID)
    
    pdf = generate_certificate_pdf(user, course)
    
    filename = f"Certificate_{course.title.replace(' ', '_')}_{user.f_name}.pdf"
    pdf_path = os.path.join(app.root_path, "static", "certificates", filename)
    
    if not os.path.exists(os.path.dirname(pdf_path)):
        os.makedirs(os.path.dirname(pdf_path))
        
    pdf.output(pdf_path)
    
    return send_file(pdf_path, as_attachment=True)


def generate_certificate_pdf(user, course):
    # Orientation: Landscape, mm units, A4 size
    pdf = FPDF(orientation='L', unit='mm', format='A4')
    pdf.add_page()
    pdf.set_auto_page_break(auto=False, margin=0)

    # Color scheme: White background, #3A3A3A top header, Gold accents
    GOLD        = (184, 134, 11)   # #B8860B
    GOLD_LIGHT  = (212, 175, 55)   # lighter gold for slogan
    WHITE       = (255, 255, 255)
    CHARCOAL    = (58, 58, 58)     # #3A3A3A – top header / dark text
    MID_GREY    = (110, 110, 110)  # supporting text
    LIGHT_GREY  = (160, 160, 160)  # secondary labels

    # Paths to assets
    static_dir = os.path.join(app.root_path, "static")
    care_cert_dir = os.path.join(static_dir, "care_certificate_files")
    home_files_dir = os.path.join(static_dir, "home_files")

    # Assets
    brand_logo = os.path.join(care_cert_dir, "logo.png")
    cpd_certified_logo = os.path.join(care_cert_dir, "CPD Certified Logo.PNG")
    signature_img   = os.path.join(care_cert_dir, "Signature Image.PNG")
    quality_mark_logo  = os.path.join(home_files_dir, "Quality-Mark-logo.png")
    skills_for_care_logo = os.path.join(home_files_dir, "Skills-for-Care.png")

    # ═══════════════════════════════════════════════════════════════════════════
    # 1. WHITE BACKGROUND
    # ═══════════════════════════════════════════════════════════════════════════
    pdf.set_fill_color(*WHITE)
    pdf.rect(0, 0, 297, 210, 'F')

    # ═══════════════════════════════════════════════════════════════════════════
    # 2. CHARCOAL HEADER BAND  (y=0 → y=52)
    # ═══════════════════════════════════════════════════════════════════════════
    HEADER_H = 52
    pdf.set_fill_color(*CHARCOAL)
    # Top Left
    pdf.polygon([(0, 0), (65, 0), (0, 65)], 'F')
    # Top Right
    pdf.polygon([(297, 0), (232, 0), (297, 65)], 'F')
    # Top middle triangle
    pdf.polygon([(118, 0), (148, 22), (178, 0)], 'F')
    # Top side mid triangles
    pdf.polygon([(0, 75), (22, 105), (0, 135)], 'F')
    pdf.polygon([(297, 75), (275, 105), (297, 135)], 'F')

    # ── 3a. Bottom corner triangles → CHARCOAL ────────────────────────────────────
    pdf.set_fill_color(*CHARCOAL)
    # Bottom Left
    pdf.polygon([(0, 210), (65, 210), (0, 145)], 'F')
    # Bottom Right
    pdf.polygon([(297, 210), (232, 210), (297, 145)], 'F')
    # Bottom middle triangle
    pdf.polygon([(118, 210), (148, 188), (178, 210)], 'F')

    # ── 3b. Inner border frame (charcoal outer, gold inner) ─────────────────
    pdf.set_draw_color(*CHARCOAL)
    pdf.set_line_width(0.8)
    pdf.rect(22, 22, 253, 166)           # outer frame line
    pdf.set_draw_color(*GOLD)
    pdf.set_line_width(0.4)
    pdf.rect(24, 24, 249, 162)           # inner gold accent line

    # ── 4. Brand logo + Org name + Slogan (top-centre) ────────────────────────
    # one logo: brand_logo at centre
    logo_w = 20
    
    if os.path.exists(brand_logo):
        pdf.image(brand_logo, x=139, y=29, w=logo_w)
    

    # "Healthcare CPD" heading — WHITE text (sits on charcoal header area)
    pdf.set_y(51)
    pdf.set_font('helvetica', 'B', 15)
    pdf.set_text_color(*GOLD)
    pdf.cell(0, 6, 'Healthcare CPD', 0, 1, 'C')

    # "CONSTANT LEARNING" slogan — GOLD
    pdf.set_font('helvetica', 'I', 9)
    pdf.set_text_color(*GOLD)
    pdf.cell(0, 5, 'CONSTANT LEARNING', 0, 1, 'C')

    # Thin gold rule below slogan
    pdf.set_draw_color(*GOLD)
    pdf.set_line_width(0.4)
    pdf.line(90, pdf.get_y() + 2, 207, pdf.get_y() + 2)
    pdf.ln(8)

    # ── 5. Certificate of Achievement label ───────────────────────────────────
    pdf.set_font('helvetica', '', 11)
    pdf.set_text_color(*MID_GREY)
    pdf.cell(0, 7, 'Certificate of Achievement', 0, 1, 'C')

    # ── 6. Course Title — GOLD ────────────────────────────────────────────────
    pdf.set_font('helvetica', 'B', 30)
    pdf.set_text_color(*GOLD)
    pdf.cell(0, 16, course.title, 0, 1, 'C')

    # ── 7. "Awarded to" + Name ────────────────────────────────────────────────
    pdf.ln(2)
    pdf.set_font('helvetica', '', 11)
    pdf.set_text_color(*MID_GREY)
    pdf.cell(0, 7, 'This certificate is awarded to', 0, 1, 'C')

    pdf.ln(2)
    pdf.set_font('helvetica', 'B', 24)
    pdf.set_text_color(*CHARCOAL)   # dark charcoal name
    full_name = f"{user.f_name} {user.l_name}".upper()
    pdf.cell(0, 12, full_name, 0, 1, 'C')

    # ── 8. Details (Date, Cert No, CPD Points) ────────────────────────────────
    pdf.set_y(148)
    pdf.set_font('helvetica', '', 10)
    pdf.set_text_color(*LIGHT_GREY)

    now = datetime.now()
    day = now.day
    suffix = 'th' if 11 <= day <= 13 else {1: 'st', 2: 'nd', 3: 'rd'}.get(day % 10, 'th')
    date_formatted    = now.strftime(f"%d{suffix} %B %Y")
    expires           = now.replace(year=now.year + 2)
    expires_formatted = expires.strftime(f"%d{suffix} %B %Y")
    cert_no           = str(uuid.uuid4())[:11].upper()

    pdf.cell(0, 6, f'Awarded: {date_formatted}     |     Expires: {expires_formatted}', 0, 1, 'C')
    pdf.ln(2)
    pdf.set_font('helvetica', 'B', 10)
    pdf.set_text_color(*GOLD)          # cert number in gold
    pdf.cell(0, 6, f'Certificate No: {cert_no}', 0, 1, 'C')
    pdf.set_font('helvetica', '', 10)
    pdf.set_text_color(*LIGHT_GREY)
    pdf.cell(0, 6, 'This certificate is worth 15 CPD points', 0, 1, 'C')

    # ── 9. Signature (bottom-left) ────────────────────────────────────────────
    if os.path.exists(signature_img):
        pdf.image(signature_img, x=45, y=140, w=40)
    pdf.set_xy(47, 167)
    pdf.set_font('helvetica', 'B', 9)
    pdf.set_text_color(*GOLD)          # signer name in gold
    pdf.cell(50, 4, 'David Lee', 0, 1, 'L')
    pdf.set_x(45)
    pdf.set_font('helvetica', '', 8)
    pdf.set_text_color(*MID_GREY)
    pdf.cell(50, 4, 'On behalf of Healthcare CPD', 0, 0, 'L')

    # ── 10. Accreditation logos (bottom-right) ────────────────────────────────
    logo_y  = 130
    logo_x2 = 215
    if os.path.exists(quality_mark_logo):
        pdf.image(quality_mark_logo, x=logo_x2, y=logo_y, w=28)
    if os.path.exists(skills_for_care_logo):
        pdf.image(skills_for_care_logo, x=logo_x2 - 4, y=logo_y + 10, w=38)
    if os.path.exists(cpd_certified_logo):
        pdf.image(cpd_certified_logo, x=logo_x2, y=logo_y + 30, w=28)
    
        
    # ── 11. Bottom gold banner ────────────────────────────────────────────────
    pdf.set_fill_color(*GOLD)
    pdf.rect(0, 199, 297, 11, 'F')
    pdf.set_y(199)
    pdf.set_font('helvetica', 'B', 11)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 11, 'www.healthcarecpd.org', 0, 0, 'C')

    return pdf


@app.route("/admin")
@admin_required
def admin():
    return render_template("admin.html")


@app.route("/info/<int:ID>")
def course_info(ID):
    course = db.session.get(Course, ID)
    if not course:
        return abort(404)
    
    course_images = {
        'care_course': 'https://cdn.pixabay.com/photo/2023/10/30/12/36/bed-8352775_1280.jpg',
        'food_course': 'https://cdn.pixabay.com/photo/2016/11/18/15/40/cookies-1835414_1280.jpg',
        'mental': 'https://cdn.pixabay.com/photo/2021/02/12/10/33/psychologist-6008048_1280.jpg',
        'farm_course': 'https://cdn.pixabay.com/photo/2021/10/23/17/19/horse-6735455_1280.jpg',
        'driver_course': 'https://www.dat.com/resources/wp-content/uploads/2023/06/DAT-Longform-Marketing-Pages-Guide-to-commercial-truck-driver-safety-training.jpg',
        'fire_course': 'https://cdn.pixabay.com/photo/2019/09/22/08/57/fire-fighting-4495488_1280.jpg',
        'electric_course': 'https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_1280.jpg',
        'weld_course': 'https://cdn.pixabay.com/photo/2012/11/28/10/32/welding-67640_1280.jpg',
        'equ_course': 'https://cdn.pixabay.com/photo/2021/02/04/16/50/coronavirus-5981935_1280.jpg',
        'palliative_course': '/static/pictures/palliative.jpeg'
    }
    
    img_url = course_images.get(course.html, f"/static/course/{course.html}/main.webp")
    
    conf = config.read_config()
    conf = conf["courses"][str(ID)]
    return render_template(f"/course_data/{course.html}/info.html", course_id=ID, title=course.title, img=img_url, disabled=conf["disabled"], price=conf["price"])


@app.route("/info/mental-info")
def info_mental():
    img_url = 'https://cdn.pixabay.com/photo/2021/02/12/10/33/psychologist-6008048_1280.jpg'
    return render_template("mental-info.html", course_id=None, title="Mental Health Certificate", img=img_url, disabled="disabled", price=150)


@app.route('/create-checkout-session/<int:u_ID>/<string:c_ID>')
def create_checkout_session(u_ID, c_ID):
    try:
        cfg = config.read_config()
        price = cfg["courses"][c_ID].get("price")
        user = db.session.get(Users, u_ID)
        course = db.session.get(Course, c_ID)
        if not (price and user and course):
            return abort(404)
        session["paying_user"] = u_ID
        session["paying_course"] = c_ID
        stripe.api_key = cfg["gateways"]["stripe"]["key"]
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'product_data': {
                            'name': "CPD Course",  # Assuming course name is available
                        },
                        'unit_amount': int(price * 100),  # Convert price to cents
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url = f'{domain[0]}://{domain[1]}{url_for("accept_payment")}',
            cancel_url = f'{domain[0]}://{domain[1]}/checkout/{c_ID}',
        )
    except Exception as e:
        print(e)
        return str(e)

    return redirect(checkout_session.url, code=303)


@app.route("/yfufcn1qqt")
def accept_payment():
    u_ID = session.get("paying_user")
    c_ID = session.get("paying_course")

    if u_ID and c_ID:
        session.pop("paying_user")
        session.pop("paying_course")
        user = db.session.get(Users, u_ID)
        user.paid = True
        
        paid = Paid(user_id=u_ID, course_id=c_ID)
        db.session.add(paid)

        db.session.commit()
        return render_template("paid.html")
    return abort(406)

@app.route("/paypal/yfufcn1qqt/<int:u_ID>/<c_ID>")
def paypal_accept_payment(u_ID, c_ID):
    user = db.session.get(Users, u_ID)
    user.paid = True
    paid = Paid.query.filter_by(user_id=u_ID, course_id=c_ID).first()
    if not paid:
        paid = Paid(user_id=u_ID, course_id=c_ID)
        db.session.add(paid)
        db.session.commit()
    return render_template("paid.html")

@app.route("/checkout/<int:ID>")
def checkout(ID):
    user_id = session.get("id")
    if (user_id == -1):
        session.pop("id")
    if user_id and Paid.query.filter_by(course_id=ID, user_id=user_id).first():
        return redirect(f"/course/{ID}")
    course = db.session.get(Course, ID)
    if not course:
        return abort(404)
    
    conf = config.read_config()
    course_conf = conf["courses"][str(ID)]
    paypal_conf = conf["gateways"]["paypal"]
    return render_template("checkout.html", course_id=ID, title=course.title, price=course_conf["price"], paypal_key=paypal_conf["key"], currency=paypal_conf["currency"])


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
        topic = SubModule.query.filter_by(course_id=c_ID).filter(SubModule.ID > progress).order_by(SubModule.ID.asc()).first()
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
        return render_template(f"course_data/{course.html}/module_{module_num}/{sub_num}.html", module_title=topic.title, URL=URL, course_id=c_ID, module_num=module_num, course=course)
    return redirect("/account")


def next_sub_module(c_ID, m_num, sub_num):
    topic = SubModule.query.filter_by(course_id=c_ID, module_num=m_num, sub_num=sub_num).first()
    next_topic = SubModule.query.filter_by(course_id=c_ID).filter(SubModule.ID > topic.ID).order_by(SubModule.ID.asc()).first()
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
    users = Users.query.filter_by(paid=True).all()
    users_dict = []
    for i in users:
        user = {}
        user["id"] = i.id
        user["f_name"] = i.f_name
        user["l_name"] = i.l_name
        user["email"] = i.email
        user["enrolled"] = Paid.query.filter_by(user_id=i.id).count()
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
    user_progress = []

    if user:
        paid = Paid.query.filter_by(user_id=ID).all()
        for i in paid:
            data = {}
            data["ID"] = i.course_id
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
            user_progress.append(data)
        

    return jsonify(user_progress)
