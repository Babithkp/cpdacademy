function stripe_payment() {
    if (form_validation) {
        if (validate_form()) {
            window.location.href = "/create-checkout-session"
        }
    } else {
        window.location.href = `/create-checkout-session/${user_id}/${course_id}`
    }
}