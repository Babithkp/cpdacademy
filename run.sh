#!/usr/bin/bash
cd "/home/shail/programming/freelancing/Health-Care-WebApp"
source /home/shail/programming/strip_testing/env/bin/activate
while :
do
	python3 web.py
	echo "... END ..."
	read
	clear
done
