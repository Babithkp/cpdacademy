from project import db


class Users(db.Model):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.Text, unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)

    f_name = db.Column(db.Text, nullable=False)
    l_name = db.Column(db.Text, nullable=True)

    country = db.Column(db.Text)
    company = db.Column(db.Text)
    addr1 = db.Column(db.Text)
    addr2 = db.Column(db.Text)
    city = db.Column(db.Text)
    postcode = db.Column(db.Text)

    phone = db.Column(db.Text)

    paid = db.Column(db.Boolean, default=True)
    image_file = db.Column(db.Text, nullable=False, default='user.jpg')

    def __str__(self):
        return f'{self.id}: {self.email}'

    def __repr__(self):
        return f'{self.id}: {self.email}'


class Unit(db.Model):
    __tablename__ = 'Unit'
    unit_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text)

class Section(db.Model):
    __tablename__ = 'Section'
    section_id = db.Column(db.Integer, primary_key=True)
    unit_id = db.Column(db.Integer)
    title = db.Column(db.Text)
    type = db.Column(db.Text)

class Unit_Progress(db.Model):
    __tablename__ = "Unit_progress"
    unit_progress_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    unit_id = db.Column(db.Integer)
    status = db.Column(db.Boolean, default=True)

class Progress(db.Model):
    __tablename__ = 'Progress'
    progress_id = db.Column(db.Integer, primary_key=True)
    unit_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)
    section_id = db.Column(db.Integer)
    status = db.Column(db.Boolean, default=True)

class Course(db.Model):
    __tablename__ = 'Course'
    ID = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text)
    html = db.Column(db.Text)
 
class Paid(db.Model):
    __tablename__ = 'Paid'
    ID = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)

class Module(db.Model):
    __tablename__ = 'Module'
    ID = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer)
    module_num = db.Column(db.Integer)
    title = db.Column(db.Text)

class SubModule(db.Model):
    __tablename__ = 'SubModule'
    ID = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer)
    module_id = db.Column(db.Integer)
    module_num = db.Column(db.Integer)
    sub_num = db.Column(db.Integer)
    title = db.Column(db.Text)

class NewProgress(db.Model):
    __tablename__ = 'NewProgress'
    ID = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer)
    sub_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)
