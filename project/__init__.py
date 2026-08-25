from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
import logging
import os

log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

app = Flask(__name__)
application = app
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#BASE_DIR = os.path.dirname(os.path.abspath(__file__))
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/autouttl/healthcarecpd.org/test.db'
app.config["APP_DIR"] = BASE_DIR
app.config["CONFIG"] = os.path.join(BASE_DIR, "config.toml")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'secret_key'
instance_path = os.path.join(app.config["APP_DIR"], 'instance', 'test.db')
# Convert backslashes to forward slashes for SQLite URI on Windows
instance_path = instance_path.replace('\\', '/')
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{instance_path}'
db = SQLAlchemy(app)

from project import routes
app.app_context().push()