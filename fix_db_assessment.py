from project import app, db
from project.models import SubModule, Module

def fix_database():
    with app.app_context():
        # Farm Course (ID 7)
        farm_module_2 = Module.query.filter_by(course_id=7, module_num=2).first()
        if farm_module_2:
            # Check if submodule 1 exists
            exists = SubModule.query.filter_by(module_id=farm_module_2.ID, sub_num=1).first()
            if not exists:
                sm = SubModule(course_id=7, module_id=farm_module_2.ID, module_num=2, sub_num=1, title="Farm Management Assessment")
                db.session.add(sm)
                print("Added Farm Assessment SubModule")
        
        # Driver Course (ID 8)
        driver_module_2 = Module.query.filter_by(course_id=8, module_num=2).first()
        if driver_module_2:
            exists = SubModule.query.filter_by(module_id=driver_module_2.ID, sub_num=1).first()
            if not exists:
                sm = SubModule(course_id=8, module_id=driver_module_2.ID, module_num=2, sub_num=1, title="Driver Safety Assessment")
                db.session.add(sm)
                print("Added Driver Assessment SubModule")
        
        db.session.commit()

if __name__ == "__main__":
    fix_database()
