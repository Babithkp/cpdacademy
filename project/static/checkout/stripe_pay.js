async function stripe_payment() {
    if (form_validation) {
        if (validate_form()) {
            show_overlay("Veryfing Data")
            let result = await check_email()
            if (result) {
                result = await send_signup_info()
                result = JSON.parse(result)
                hide_overlay()
                if (result.status && result.user_id > 0) {
                    window.location.href = `/create-checkout-session/${result.user_id}/${course_id}`
                } else {
                    alert("Try Again")
                }
            }
            hide_overlay()
        }
    } else {
        window.location.href = `/create-checkout-session/${user_id}/${course_id}`
    }
}