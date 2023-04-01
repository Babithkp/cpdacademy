from project import *
from project.models import *

sections = Section.query.all()

for i in sections:
	prg = Progress.query.filter_by(unit_id=i.unit_id, user_id=1, section_id=i.section_id).first()
	if not prg:
		print("Not THERE: " + str(i.section_id))
		prg = Progress(unit_id=i.unit_id, user_id=1, section_id=i.section_id)
		db.session.add(prg)
	else:
		print("ALREADY THERE: " + str(i.section_id))

db.session.commit()
