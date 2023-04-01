var verified_email = "";
function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'blue',
      layout: 'vertical',
      label: 'paypal',

    },
    onClick: function (data, actions) {
      if (!validate_form()) {
        alert("Please Enter correct data in form")
      }
    },
    onInit: function (data, actions) {
      actions.disable();
      var form = document.getElementById("signup_form")
      form.addEventListener("change", (e) => {
        actions.disable();
        if (validate_form()) {
          console.log("form is valid")
          if (verified_email != email.value) {
            show_overlay()
            check_email(email).then((result) => {
              if (result == "VALID EMAIL") {
                console.log("EMAIL IS VALID")
                verified_email = email.value
                actions.enable();
              }
              else if (result == "error") {
                alert("Something Went Wrong")
                alert("Try to refresh page")
              }
              else {
                alert("This Email is already in use")
                actions.disable();
              }
            }
            ).then(() => {
              hide_overlay()
            })
          }
          else {
            actions.enable()
          }
        }
        else {
          console.log("FORM IS NOT VALID")
          actions.disable();
        }
      })

    },
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [{ "description": "Care Asssistant Course ", "amount": { "currency_code": "GBP", "value": 150 } }]
      });
    },

    onApprove: function (data, actions) {
      return actions.order.capture().then(function (orderData) {

        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thanks for your payment!</h3>';
        send_signup_info().then(result => {
          console.log(result)
          alert("Go to login page to login and get access to course")
          window.location.href = "/login"
        })
      });
    },

    onError: function (err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}


initPayPalButton();