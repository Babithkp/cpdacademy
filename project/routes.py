from flask import render_template, request, session, redirect, url_for
from functools import wraps
from project import app, db
from project.models import Users


def login_required(f):
	@wraps(f)
	def decorated_function(*args, **kwargs):
		if session.get("username") is None:
			return redirect("/login")
		return f(*args, **kwargs)
	return decorated_function


@app.route("/")
def home():
	return render_template("home.html", homepage="True")


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
	return render_template("care-info.html")


@app.route("/info/food-info")
def info_food():
	return render_template("food-info.html", disabled="disabled")


@app.route("/info/mental-info")
def info_mental():
	return render_template("mental-info.html", disabled="disabled")


@app.route("/checkout")
def checkout():
	return render_template("checkout.html")


@app.route("/logout")
def logout():
	session.pop('username', None)
	return redirect("/")
