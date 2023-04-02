var email = document.getElementById("email")
var code = document.getElementById("code")
var passwd = document.getElementById("passwd")
var c_passwd = document.getElementById("c_passwd")
var btn_reset_password = document.getElementById("ResetPassword")
var btn_verify_code = document.getElementById("VerifyCode")
var btn_set_password = document.getElementById("SetPasswd")

var random_code;
var email_addr

async function reset_password() {
    show_overlay()
    random_code = Math.floor(Math.random() * 10000000);
    var result = await send_mail(email.value)

    if (result == "True") {
        alert("Email has been sent with CODE")
        email_addr = email.value
        show_interface("code")
    }
    else if (result == "False") {
        alert("This Email Address does not exist")
    }
    else if (result == false) {
        alert("Something Went Wrong")
    }

    hide_overlay()
}

function verify_code() {
    if (code.value == random_code){
        show_interface("password")
    }
    else {
        alert("Code is incorrect")
    } 
}


function show_interface(interface) {

    if (interface == "code") {
        email.style.display = "none"
        btn_reset_password.style.display = "none"

        passwd.style.display = "none"
        c_passwd.style.display = "none"
        btn_set_password.style.display = "none"

        code.style.display = ""
        btn_verify_code.style.display = ""
    }
    else if (interface == "password") {
        email.style.display = "none"
        btn_reset_password.style.display = "none"

        passwd.style.display = ""
        c_passwd.style.display = ""
        btn_set_password.style.display = ""

        code.style.display = "none"
        btn_verify_code.style.display = "none"
    }

    else if (interface == "email") {
        email.style.display = ""
        btn_reset_password.style.display = ""

        passwd.style.display = "none"
        c_passwd.style.display = "none"
        btn_set_password.style.display = "none"

        code.style.display = "none"
        btn_verify_code.style.display = "none"
    }
}


async function send_mail(email) {
    var form = new FormData();
    var result = false
    form.append("email", email)
    form.append("code", random_code)
    await fetch("/password_reset", {method: "POST", body: form})
    .then(resp=> {result = resp.text()})
    .catch(error => {
        console.log(error)
        result = false
    })

    return result
}


async function set_password() {
    if (c_passwd.value == passwd.value) {
        var result = await send_password(email_addr, passwd.value)
        if (result == "True") {
            alert("Your Password has been updated")
            window.location.href = "/login"
        }
        else if (result == false) {
            alert("Something Went Wrong")
        }
    }
    else {
        alert("Password matching failed")
    }
}


async function send_password(email, passwd) {
    var form = new FormData();
    var result = false
    form.append("email", email)
    form.append("passwd", passwd)
    await fetch("/set_password", {method: "POST", body: form})
    .then(resp=> {result = resp.text()})
    .catch(error => {
        console.log(error)
        result = false
    })

    return result
}
btn_reset_password.onclick = reset_password
btn_verify_code.onclick = verify_code
btn_set_password.onclick = set_password