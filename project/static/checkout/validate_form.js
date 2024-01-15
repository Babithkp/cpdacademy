var f_name = document.getElementById("billing_first_name");
var l_name = document.getElementById("billing_last_name");
var company = document.getElementById("billing_company");
var country = document.getElementById("billing_country");
var addr_1 = document.getElementById("billing_address_1");
var addr_2 = document.getElementById("billing_address_2");
var city = document.getElementById("billing_city");
var postal_code = document.getElementById("billing_postcode");
var phone = document.getElementById("billing_phone");
var email = document.getElementById("billing_email");
var passwd = document.getElementById("account_password");
var c_passwd = document.getElementById("account_confirm_password");

var postal_code_field = document.getElementById("billing_postcode_field");

var inputs = {
    f_name: f_name,
    l_name: l_name,
    company: company,
    country: country,
    addr_1: addr_1,
    addr_2: addr_2,
    city: city,
    postal_code: postal_code,
    phone: phone,
    email: email,
    passwd: passwd,
    c_passwd: c_passwd,
};

function validate_form() {
    for (const key in inputs) {
        var input = inputs[key];
        if (!input.checkValidity() && !(postal_code_field.style.display == "none" && input == postal_code)) {
            input.reportValidity();
            console.log("VALIDITY ISSUE: ", input)
            return false;
        }
    }

    if (inputs["passwd"].value != inputs["c_passwd"].value) {
        alert("Password Matching Failed")
        return false
    }
    return true
}


async function send_signup_info() {
    var form = new FormData();
    var url = "/signup"
    for (const key in inputs) {
        let input = inputs[key];
        form.append(key, input.value)
    }
    return await send_data(form, url)
}

async function check_email() {
    let email_addr = email.value
    console.log("CHECKING EMAIL: " + email_addr)
    var form = new FormData();
    var url = "/validate_email"
    form.append("email", email_addr)

    var result = await send_data(form, url)
    if (result == "error") {
        alert("Try Again")
        result = false
    } else if (result == "false") {
        alert("Email address is ready in use")
        result = false
    } else {
        result = true
    }
    if (result) console.log("EMAIL result: ", result)
    else console.log("EMAIL: result", result)

    return result
}


async function send_data(form, url) {
    var output = "false";

    await fetch(url, {
            method: "POST",
            body: form,
        })
        .then((result) => {
            return result.text()
        })
        .then(text => {
            output = text
        })
        .catch((error) => {
            console.log(error)
            output = "error";
        })
    return output;
}