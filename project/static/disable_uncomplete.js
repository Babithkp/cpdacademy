
// For TOPICS
var topics_div = document.getElementById("learndash_lesson_topics_list")

if (topics_div) {
    var topics = topics_div.getElementsByClassName("topic-notcompleted")

    for (var i=1;i<topics.length;i++) {
        topics[i].style.display = "none";
    }


    var quiz_div  = document.getElementById("quiz_list")
    if (quiz_div) {
        if (topics.length == 0) {1
            quiz_div.style.display = "block"
        }
        else {
            quiz_div.onclick = ()=> {
                alert("Please complete all topics first")
                return false
            }
        }
    }
}

// For UNITS in all units HTML file
var unit_div = document.getElementById("lessons_list")
if (unit_div) {
    var units = unit_div.getElementsByClassName("notcompleted")

    for (var i=1;i<units.length;i++) {
        units[i].parentElement.parentElement.style.display ="none"
    }
}

// FOR SIDE BAR
var sidebar_unit_div = document.getElementById("sidebar_lessons")
// console.log(sidebar_unit_div)
if (sidebar_unit_div) {
    // var sidebar_units = sidebar_unit_div.getElementsByClassName("")
    var sidebar_topics = sidebar_unit_div.getElementsByClassName("topic-notcompleted")
    for (var i=1;i<sidebar_topics.length;i++) {
        sidebar_topics[i].parentElement.parentElement.style.display ="none"
    }
}


function go_topic(unit, topic) {
    window.location.href=`/lms/care-certificate/unit/${unit}/topic/${topic}`
}
