from project import app, db
from project.models import Course, Module, SubModule

def populate():
    with app.app_context():
        # Farm Management and Maintenance (ID 7)
        farm_course = Course(ID=7, title='Farm Management and Maintenance', html='farm_course')
        db.session.add(farm_course)
        
        # Modules for Farm Management
        farm_modules = [
            'Fundamentals of Farm Management',
            'Course assessment'
        ]
        
        for i, title in enumerate(farm_modules):
            m = Module(course_id=7, module_num=i+1, title=title)
            db.session.add(m)
            db.session.flush()
            
            if title == 'Fundamentals of Farm Management':
                sub_modules = [
                    'Learning Outcomes',
                    'Introduction to Farm Management',
                    'Crop and Livestock Management',
                    'Financial Planning and Sustainable Agriculture Practices',
                    'Farm Maintenance and Business Management',
                    'Lesson Summary'
                ]
                for j, sub_title in enumerate(sub_modules):
                    sm = SubModule(course_id=7, module_id=m.ID, module_num=i+1, sub_num=j+1, title=sub_title)
                    db.session.add(sm)
        
        # Driver Safety Awareness Training (ID 8)
        driver_course = Course(ID=8, title='Driver Safety Awareness Training', html='driver_course')
        db.session.add(driver_course)
        
        # Modules for Driver Safety
        driver_modules = [
            'Mastering Safe Driving',
            'Course assessment'
        ]
        
        for i, title in enumerate(driver_modules):
            m = Module(course_id=8, module_num=i+1, title=title)
            db.session.add(m)
            db.session.flush()
            
            if title == 'Mastering Safe Driving':
                sub_modules = [
                    'Learning Outcomes',
                    'Foundations of Safe Driving',
                    'Vehicle Safety and Driving Tactics',
                    'Adverse Conditions and Road Incidents',
                    'Lesson Summary'
                ]
                for j, sub_title in enumerate(sub_modules):
                    sm = SubModule(course_id=8, module_id=m.ID, module_num=i+1, sub_num=j+1, title=sub_title)
                    db.session.add(sm)
        
        db.session.commit()
        print("Successfully populated courses 7 and 8.")

if __name__ == "__main__":
    populate()
