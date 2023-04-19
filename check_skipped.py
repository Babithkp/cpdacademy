from project.models import *
USER_ID = 1
prog = Progress.query.filter_by(user_id=USER_ID).order_by("section_id").group_by("section_id").all()

should_be = 0
previous_section = 0

for i in prog:
    if (should_be + 1 != i.section_id):
        print(f"FROM: {previous_section+1} TO: {i.section_id - 1}")
    should_be = i.section_id
    previous_section = i.section_id

