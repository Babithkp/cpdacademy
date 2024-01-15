const overlay = document.getElementById("custom-overlay");
const overlay_msg = overlay.querySelector("h1")

function show_overlay(msg = "Verifying Your Email Address") {
    overlay_msg.innerHTML = msg
    overlay.style.top = "0%"
}

function hide_overlay() {
    overlay.style.top = "100%"
}
// show_overlay()