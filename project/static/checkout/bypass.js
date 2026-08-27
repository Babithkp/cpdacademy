async function bypass_buy() {
    if (form_validation) {
        if (!validate_form()) {
            alert("Please Enter correct data in form");
            return;
        }
        show_overlay();
        let result = await send_signup_info();
        hide_overlay();
        let data = JSON.parse(result);
        if (data.status) {
            window.location.href = `/paypal/yfufcn1qqt/${data.user_id}/${course_id}`;
        } else {
            alert("ERROR");
        }
    } else {
        window.location.href = `/paypal/yfufcn1qqt/${user_id}/${course_id}`;
    }
}

document.getElementById("bypass_buy").addEventListener("click", bypass_buy);
