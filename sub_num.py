#!/usr/bin/python
# Add sub_num to every sub_module
from project.models import Module, SubModule, db

course = 5
for c in range(1, course+1):
    modules = Module.query.filter_by(course_id=c).all()
    # print(f"-- {c} --")
    for m in modules:
        sub_modules = SubModule.query.filter_by(module_id=m.ID).all()
        for i in range(len(sub_modules)):
            s_module = sub_modules[i]
            s_module.sub_num = i+1

db.session.commit()


