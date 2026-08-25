import sys
import os

# Add the project directory to sys.path
sys.path.append(os.getcwd())

from project import app, db
from project.models import NewProgress, SubModule, Paid, Users

def mark_course_complete(user_email, course_id):
    with app.app_context():
        user = Users.query.filter_by(email=user_email).first()
        if not user:
            print(f"User {user_email} not found")
            return
        
        # Ensure user has "paid" for the course
        if not Paid.query.filter_by(user_id=user.id, course_id=course_id).first():
            paid = Paid(user_id=user.id, course_id=course_id)
            db.session.add(paid)
        
        # Get the last submodule ID for this course
        last_sub = SubModule.query.filter_by(course_id=course_id).order_by(SubModule.ID.desc()).first()
        if not last_sub:
            print(f"No submodules found for course {course_id}")
            return
            
        progress = NewProgress.query.filter_by(user_id=user.id, course_id=course_id).first()
        if not progress:
            progress = NewProgress(user_id=user.id, course_id=course_id)
            db.session.add(progress)
            
        progress.sub_id = last_sub.ID
        db.session.commit()
        print(f"Course {course_id} marked as complete for user {user_email}")

if __name__ == "__main__":
    # Example: Mark course 7 as complete for admin or a test user
    # Note: Using the admin email or a known test user email
    mark_course_complete("admin@admin.com", 7)
    mark_course_complete("admin@admin.com", 8)
