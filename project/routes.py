from flask import render_template, request, session, redirect
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
	return render_template("home.html")


@app.route("/login", methods=["GET", "POST"])
def login():
	if request.method == "POST":
		username = request.form["username"]
		password = request.form["password"]

		session["username"] = username

		print(username, password)
	return render_template("login.html")


@app.route("/account")
@login_required
def account():
	return "account"


@app.route("/course/care-certificate")
def course():
	return render_template("care-certificate.html")


@app.route("/checkout/care-certificate")
def checkout():
	return render_template("care-checkout.html")


@app.route("/logout")
def logout():
	session.pop('username', None)
	return redirect("/")