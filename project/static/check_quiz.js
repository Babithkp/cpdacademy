var btn_check = document.getElementById("btn_check")
var btn_next_unit = document.getElementById("btn_next_unit")

var url = window.location.href
url = url.split("/")
var unit_id = parseInt(url[url.length - 2])

function check_quiz() {
    var correct_answers = 0

    ol = document.getElementsByTagName("ol")[2]
    li = ol.children
    for (let i = 0; i < li.length - 1; i++) {
        var quiz_li = li[i] // Direct li element of ol tag
        options = quiz_li.getElementsByTagName("li") // inside each quiz_li there is ul which contains all options as li tag

        var checked_input_li = false;
        var correct_input_li = false;
        var correct = false;

        options.forEach(element => {
            input = element.getElementsByTagName("input")[0]
            input.disabled = "disabled"

            if (input.value == 1) {
                correct_input_li = element
            }
            if (input.checked) {
                checked_input_li = element
                if (input.value == 1) {
                    correct_answers++
                    element.classList.add("wpProQuiz_answerCorrect");
                    correct = true
                }
            }
        });

        resp_div = quiz_li.getElementsByClassName("wpProQuiz_response")[0]

        resp_div.style.display = "block"
        correct_div = resp_div.children[0]
        incorrect_div = resp_div.children[1]

        if (correct == false) {
            correct_input_li.classList.add("wpProQuiz_answerCorrectIncomplete")
            incorrect_div.style.display = "block"
            if (checked_input_li != false) // Check if user checked radio input or not
                checked_input_li.classList.add("wpProQuiz_answerIncorrect")
        }
        else {
            correct_div.style.display = "block"
        }
    }

    return correct_answers
}

function result(unit_id, correct_answers) {
    var result_div = document.getElementById("result_div")
    var correct_answers_div = document.getElementById("correct_answers")
    var restart_quiz = document.getElementById("restart_quiz")
    var msg_passed = document.getElementById("msg_passed")
    var msg_failed = document.getElementById("msg_failed")

    result_div.style.display = "block"
    correct_answers_div.innerText = correct_answers

    // If passed
    if (correct_answers >= 12) {
        msg_passed.style.display = "block"
        var url = `/lms/care-certificate/unit/${unit_id}/quiz/done`
        fetch(url).then(resp => resp.text()).then(result => console.log(result)).then(()=> {
        if (unit_id < 15) {
            btn_next_unit.style.display = ""
        }
        })
    }
    // If failed
    else
        msg_failed.style.display = "block"

    restart_quiz.onclick = () => {
        location.href = location.href
    }
}



function btn_check_click() {
    var correct_answers = check_quiz()
    result(unit_id, correct_answers)
}

function btn_next_unit_click() {
    var unit = unit_id+1
    var url = `/lms/care-certificate/unit/${unit}`
    window.location.href = url
}

btn_check.onclick = btn_check_click
btn_next_unit.onclick = btn_next_unit_click

// Hightlight correct quiz
function Hightlight_correct() {
    var a = document.getElementsByClassName("wpProQuiz_questionListItem")
    for (var i = 0; i < a.length; i++) {
        var input = a[i].children[1].children[0]
        if (input.value == "1") {
            input.checked = true
            a[i].style.color = "red"
        }
    }
}

// Hightlight_correct()