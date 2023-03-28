var f_name = document.getElementById("billing_first_name")
var l_name = document.getElementById("billing_last_name")
var company = document.getElementById("billing_company")
var country = document.getElementById("billing_country")
var addr_1 = document.getElementById("billing_address_1")
var addr_2 = document.getElementById("billing_address_2")
var city = document.getElementById("billing_city")
var postal_code = document.getElementById("billing_postcode")
var phone = document.getElementById("billing_phone")
var email = document.getElementById("billing_email")
var passwd = document.getElementById("account_password")
var c_passwd = document.getElementById("account_confirm_password")

var inputs = [f_name, l_name, company, addr_1, city, postal_code, phone, email, passwd, c_passwd]

function validate_form() {
    var valid = true

    inputs.forEach((input)=> {
        if(!input.checkValidity()) {
            input.reportValidity()
            valid = false
            return
        }
    })

    return valid
}
