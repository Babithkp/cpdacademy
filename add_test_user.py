import sys
import os

sys.path.append(os.getcwd())

from project import app, db
from project.models import Users, Paid

def add_test_user():
    with app.app_context():
        email = "user1@user.com"
        password = "user123"

        # Check if user already exists
        existing = Users.query.filter_by(email=email).first()
        if existing:
            print(f"User '{email}' already exists (id={existing.id}). Ensuring payments...")
            user = existing
        else:
            user = Users(
                email=email,
                password=password,
                f_name="Test",
                l_name="User",
                company="Test Company",
                country="UK",
                addr1="123 Test Street",
                addr2="",
                city="London",
                postcode="SW1A 1AA",
                phone="07700000000",
                paid=True
            )
            db.session.add(user)
            db.session.commit()
            print(f"Created user '{email}' with id={user.id}")

        # Pay for Farm course (ID 7) and Electric course (ID 5) and Driver course (ID 8)
        for course_id in [7, 5, 8]:
            if not Paid.query.filter_by(user_id=user.id, course_id=course_id).first():
                paid = Paid(user_id=user.id, course_id=course_id)
                db.session.add(paid)
                print(f"  -> Paid for course {course_id}")
            else:
                print(f"  -> Already paid for course {course_id}")

        db.session.commit()
        print(f"\nDone! Login with:")
        print(f"  Email:    {email}")
        print(f"  Password: {password}")
        print(f"  Paid courses: Farm (7), Electric (5), Driver (8)")

if __name__ == "__main__":
    add_test_user()
