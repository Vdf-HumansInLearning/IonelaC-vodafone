let form = document.getElementById("login-form");
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let error = document.querySelector('.error-message');
form.addEventListener("submit", function(event) {
    let messages = [];

    // fetch("../users.json")
    //     .then(response => response.json())
    //     .then(response => response.forEach(el => {
    //         if (el.username === username.value && el.email === email.value && el.password === password.value) {
    //             location.replace("http://localhost:2000");
    //             alert(`Successfully logged in. Welcome in your account, ${el.username}!`)

    //         }
    //     }))
    // .catch(err => console.log(err))
    if (username.value === '' || username.value == null) {
        messages.push('Username is required')
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if (password.value === '' || password.value == null) {
        messages.push('Password is required')
    }
    if (messages.length > 0) {
        event.preventDefault();
        error.innerText = messages.join(', ')
    }

    // if (isLoggedin === true) {
    //     document.querySelector(".log-in").style.visibility = "hidden";
    // }

})