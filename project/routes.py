from flask import render_template, request, session, redirect, url_for
from functools import wraps
from project import app, db
from project.models import Users, Unit, Section, Progress, Unit_Progress

TITLE = "Healthcare CPD"

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
	email = request.form["email"]
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
		user = Users.query.filter_by(email=email, password=password).first()
		if(user):
			session["id"] = user.id
			session["email"] = email
		return redirect("/account")
	return render_template("login.html", title=TITLE)


@app.route("/account")
@login_required
def account():
	user = Users.query.get(session["id"])
	return render_template("account.html", user=user, title=TITLE)


@app.route("/info/care-info")
def info_care():
	return render_template("care-info.html", title="Care Certificate", img="/static/course/care-certificate_files/Care-Certificate-150x150.png")


@app.route("/info/food-info")
def info_food():
	return render_template("food-info.html", title="Food Safety Certificate", img="/static/course/food/Food-Safety-and-Hygiene-in-Care-150x150.png", disabled="disabled")


@app.route("/info/mental-info")
def info_mental():
	return render_template("mental-info.html", title="Mental Health Certificate", img="/static/course/mental/Autism-Awareness-200x200.png", disabled="disabled")


@app.route("/checkout")
def checkout():
	return render_template("checkout.html", title=TITLE)


@app.route("/lms/care-certificate")
@login_required
def care_certificate():
	units = Unit.query.all()
	topics = []

	for i in units:
		topic = Section.query.filter_by(unit_id=i.unit_id).all()
		topics.append(topic)

	all_unit_progress = Unit_Progress.query.filter_by(user_id=session["id"]).order_by("unit_id")
	unit_progress = []
	for i in units:
		unit_progress.append("notcompleted")

	for i in range(all_unit_progress.count()):
		unit_progress[i] = "completed"

	return render_template("care_certificate/care_certificate.html", title=TITLE, units=units, unit_progress=unit_progress, topics=topics)


@app.route("/lms/care-certificate/unit/<int:unit_id>")
@login_required
def unit(unit_id):
    unit_dir = f"care_certificate/units/unit_{unit_id}"
    return render_template(f"{unit_dir}/index.html", title=TITLE)


@app.route("/lms/care-certificate/unit/<int:unit_id>/topic/<int:topic_id>")
@login_required
def topic(unit_id, topic_id):
    unit_dir = f"care_certificate/units/unit_{unit_id}"
    return render_template(f"{unit_dir}/{topic_id}.html", title=TITLE)


@app.route("/lms/care-certificate/unit/<int:unit_id>/quiz")
@login_required
def quiz(unit_id):
    unit_dir = f"care_certificate/units/unit_{unit_id}"
    return render_template(f"{unit_dir}/quiz.html", title=TITLE)


@app.route("/logout")
def logout():
	session.pop('id', None)
	session.pop('email', None)
	return redirect("/")
