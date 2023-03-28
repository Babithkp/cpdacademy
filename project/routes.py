from flask import render_template, request, session, redirect, url_for
from functools import wraps
from project import app, db
from project.models import Users


def login_required(f):
	@wraps(f)
	def decorated_function(*args, **kwargs):
		if session.get("email") is None:
			return redirect("/login")
		return f(*args, **kwargs)
	return decorated_function


@app.route("/")
def home():
	return render_template("home.html", homepage="True")


@app.route("/signup", methods=["POST"])
def signup():
	form = request.form

	print(form)
	# f_name = form["f_name"]
	# l_name = form["l_name"]
	# company = form["company"]
	# country = form["country"]
	# addr_1 = form["addr_1"]
	# addr_2 = form["addr_2"]
	# city = form["city"]
	# postal_code = form["postal_code"]
	# phone = form["phone"]
	# email = form["email"]
	# passwd = form["passwd"]

	return "Success"


@app.route("/login", methods=["GET", "POST"])
def login():
	if request.method == "POST":
		email = request.form.get("email")
		password = request.form.get("password")

		session["email"] = email

		print(email, password)
	return render_template("login.html")


@app.route("/account")
@login_required
def account():
	return "account"


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
	return render_template("checkout.html")


@app.route("/logout")
def logout():
	session.pop('email', None)
	return redirect("/")
