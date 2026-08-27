import sys
import os

sys.path.append(os.getcwd())

from project import app, db
from project.models import Users, Paid, Course

def add_test_user():
    with app.app_context():
        email = "user1@user.com"
        password = "user123"

        # Check if user already exists
        existing = Users.query.filter_by(email=email).first()
        if existing:
            print(f"User '{email}' already exists (id={existing.id}). Ensuring payments...")
            user = existing
            user.paid = True
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

        # Simulate a completed purchase for every course (same effect as the
        # Stripe/PayPal success handlers: insert a Paid row per course).
        course_ids = [c.ID for c in Course.query.all()]
        for course_id in course_ids:
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
        print(f"  Paid courses: {course_ids}")

if __name__ == "__main__":
    add_test_user()
