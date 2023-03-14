from project import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True, nullable=False)
    email = db.Column(db.Text, unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)

    firstname = db.Column(db.Text, nullable=False)
    lastname = db.Column(db.Text, nullable=True)

    country = db.Column(db.Text)
    company = db.Column(db.Text)
    street = db.Column(db.Text)
    addr2 = db.Column(db.Text)
    town = db.Column(db.Text)
    postcode = db.Column(db.Integer)

    phone = db.Column(db.Text)

    paid = db.Column(db.Boolean, default=True)
    image_file = db.Column(db.Text, nullable=False, default='user.jpg')

    def __str__(self):
        return f'{self.email} : {self.username}'

    def __repr__(self):
        return f'{self.email} : {self.username}'

