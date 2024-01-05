function stripe_payment() {
  if (validate_form()) {
    window.location.href="/create-checkout-session"
  }
}