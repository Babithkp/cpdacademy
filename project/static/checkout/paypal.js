var verified_email = "";

function initPayPalButton() {
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'blue',
            layout: 'vertical',
            label: 'paypal',

        },
        onClick: function(data, actions) {
            if (form_validation && !validate_form()) {
                alert("Please Enter correct data in form")
            }
        },
        onInit: function(data, actions) {
            actions.disable();
            if (form_validation) {
                var form = document.getElementById("signup_form")
                form.addEventListener("change", (e) => {
                    actions.disable();
                    if (validate_form()) {
                        console.log("form is valid")

                        show_overlay()
                        if (verified_email != email.value) {
                            check_email().then((result) => {
                                if (result) {
                                    console.log("EMAIL IS VALID")
                                    verified_email = email.value
                                    actions.enable();
                                } else {
                                    actions.disable();
                                }
                            }).then(() => {
                                hide_overlay()
                            })
                        } else {
                            actions.enable()
                        }
                    } else {
                        actions.disable();
                    }
                })
            } else {
                actions.enable()
            }

        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    "description": course_title,
                    "amount": {
                        "currency_code": product_currency,
                        "value": course_price
                    }
                }]
            });
        },

        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {

                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thanks for your payment!</h3>';
                if (form_validation) {
                    show_overlay("Veryfing Payment")
                    send_signup_info().then((result) => {
                        let data = JSON.parse(result)
                        console.log(data)
                        if (data.status) {
                            let user_id = data.user_id
                            window.location.href = `/paypal/yfufcn1qqt/${user_id}/${course_id}`
                        } else {
                            alert("ERROR")
                        }
                    })
                } else {
                    window.location.href = `/paypal/yfufcn1qqt/${user_id}/${course_id}`
                }
            });
        },

        onError: function(err) {
            console.log(err);
        }
    }).render('#paypal-button-container');
}


initPayPalButton();