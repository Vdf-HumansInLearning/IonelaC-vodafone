let form = document.getElementById("register-form");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let checkPassword = document.getElementById("confirm-password");



function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = checkPassword.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name is required')
    } else {
        setSuccessFor(firstName)
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last name is required')
    } else {
        setSuccessFor(lastName)
    }

    if (usernameValue === '') {
        setErrorFor(username, 'Username is required')
    } else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email is required')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password is required');
    } else if (passwordValue === 'password') {
        setErrorFor(password, 'Password cannot be password')
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password must be longer than 6 characters')
    } else {
        setSuccessFor(password);
    }

    if (checkPasswordValue === '') {
        setErrorFor(checkPassword, 'Password check is required')

    } else if (passwordValue !== checkPasswordValue) {
        setErrorFor(checkPassword, 'Password does not match');
    } else {
        setSuccessFor(checkPassword);
    }

}

function setErrorFor(input, message) {
    const formField = input.parentElement;
    const small = formField.querySelector('small');
    small.innerText = message;

    formField.className = 'form-field fail'
}

function setSuccessFor(input) {
    const formField = input.parentElement;
    formField.className = 'form-field success';
}

function isEmail(email) {
    const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    return emailTest;
}


form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkInputs();

    location.replace("http://localhost:3000/auth/login");

    alert("User successfully registered. Please log in!")


})