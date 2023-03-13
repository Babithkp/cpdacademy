from flask import Flask
# from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.secret_key = 'BAD_SECRET_KEY'


from project import routes
