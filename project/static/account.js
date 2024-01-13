const nav_profile = document.querySelector("#nav_profile")
const nav_course = document.querySelector("#nav_course")

const profile_div = document.querySelector("#profile_div")
const course_div = document.querySelector("#course_div")

function show_profile() {
    nav_profile.classList.add("active")
    nav_course.classList.remove("active")

    profile_div.style.display = "block"
    course_div.style.display = "none"
}


function show_course() {
    nav_course.classList.add("active")
    nav_profile.classList.remove("active")

    course_div.style.display = "block"
    profile_div.style.display = "none"
}

nav_profile.onclick = show_profile;
nav_course.onclick = show_course;