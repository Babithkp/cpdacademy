var topics_div = document.getElementById("learndash_lesson_topics_list")
var topics = topics_div.getElementsByClassName("topic-notcompleted")

for (var i=1;i<topics.length;i++) {
    topics[i].style.display = "none";
}


var quiz_div  = document.getElementById("quiz_list")
if (topics.length == 0) {
    quiz_div.style.display = "block"
}
else {
    quiz_div.onclick = ()=> {
        alert("Please complete all topics first")
        return false
    }
}