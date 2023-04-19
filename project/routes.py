from flask import render_template, request, session, redirect, url_for, Markup
from functools import wraps
from project import app, db
from project.models import Users, Unit, Section, Progress, Unit_Progress
from project.send_mail import send_mail

TITLE = "Healthcare CPD"
TESTING = True


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
		if email == "admin@admin.com" and password == "admin":
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
	return render_template("account.html", user=user, title=TITLE)


@app.route("/admin")
def admin():
	if (session.get("email") != "admin@admin.com"):
		return redirect("/account")
	users_data = []
	all_users = Users.query.all()
	
	num = 0
	for user in all_users:
		num += 1
		data = {}
		data["num"] = num
		data["user"] = user

		data["done"] = Progress.query.filter_by(user_id=user.id).group_by("section_id").count()
		data["total"] = Section.query.count()
		
		users_data.append(data)


	return render_template("admin.html", users=users_data)


@app.route("/info/care-info")
def info_care():
	return render_template("care-info.html", title="Care Certificate", img="/static/course/care-certificate_files/Care-Certificate-150x150.png", price=150)


@app.route("/info/food-info")
def info_food():
	return render_template("food-info.html", title="Food Safety Certificate", img="/static/course/food/Food-Safety-and-Hygiene-in-Care-150x150.png", disabled="disabled", price=100)


@app.route("/info/mental-info")
def info_mental():
	return render_template("mental-info.html", title="Mental Health Certificate", img="/static/course/mental/Autism-Awareness-200x200.png", disabled="disabled", price=150)


@app.route("/checkout")
def checkout():
	return render_template("checkout.html", title=TITLE)


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
def unit(unit_id):
	if not check_unit(unit_id):
		return redirect(f"/lms/care-certificate/unit/{getLatestUnit()}")
	unit_dir = f"care_certificate/units"
	
	units = get_units()
	topics = get_topics(units)
	unit_progress = get_unit_progress(units)
	topic_progress = get_topic_progress(topics)

	total_topics = Section.query.count()
	completed_topics = Progress.query.filter_by(user_id=session["id"]).group_by("section_id").count()

	return render_template(f"{unit_dir}/unit.html", title=TITLE, units=units, unit_progress=unit_progress, topics=topics, topic_progress=topic_progress, unit_id=unit_id, Markup=Markup, total_topics=total_topics, completed_topics=completed_topics)


@app.route("/lms/care-certificate/unit/<int:unit_id>/topic/<int:topic_id>")
@login_required
def topic(unit_id, topic_id):
	unit_dir = f"care_certificate/units/unit_{unit_id}"

	section_id = Section.query.filter_by(unit_id=unit_id).order_by("section_id").all()[topic_id-1].section_id
	if not Progress.query.filter_by(unit_id=unit_id, user_id=session["id"], section_id=section_id).first():
		progress = Progress(unit_id=unit_id, user_id=session["id"], section_id=section_id)
		db.session.add(progress)
		db.session.commit()
	return render_template(f"{unit_dir}/{topic_id}.html", title=TITLE)


@app.route("/lms/care-certificate/unit/<int:unit_id>/quiz")
@login_required
def quiz(unit_id):
	unit_dir = f"care_certificate/units/unit_{unit_id}"
	units = get_units()
	topics = get_topics(units)
	unit_progress = get_unit_progress(units)
	topic_progress = get_topic_progress(topics)

	total_topics = Section.query.count()
	completed_topics = Progress.query.filter_by(user_id=session["id"]).group_by("section_id").count()

	return render_template(f"{unit_dir}/quiz.html", title=TITLE, units=units, unit_progress=unit_progress, topics=topics, topic_progress=topic_progress, unit_id=unit_id, Markup=Markup, total_topics=total_topics, completed_topics=completed_topics)


@app.route("/lms/care-certificate/unit/<int:unit_id>/quiz/done")
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
