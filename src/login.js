function new_user(email, pass) {

    this.email = email
    this.password = pass
}

function create_user() {
    let email_cad = document.getElementById('email_field').value
    let password_cad = document.getElementById('pass_field').value

    console.log(new new_user(email_cad, password_cad))
    
}