let form = document.getElementById("register-form");
let error = document.querySelector('.error-message');
let closeModalBtn = document.querySelector('.btn');



form.addEventListener('submit', function(event) {

        let firstName = document.getElementById("fname");
        let lastName = document.getElementById("lname");
        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let checkPassword = document.getElementById("confirm-password");

        let errors = [];

        if (!firstName.value) {
            errors.push('First name is required');
        } else if (!lastName.value) {
            errors.push('Last name is required');
        } else if (!username.value) {
            errors.push('Username is required')
        } else if (username.value.length < 3 || username.value.length > 150) {
            errors.push('Username must be between 3 and 150 characters in length');
        } else if (!email.value) {
            errors.push('Email is required')
        } else if (!isEmail(email.value)) {
            errors.push('Email not valid!');
        } else if (!password.value) {
            errors.push('Password is required');
        } else if (!isPassword(password.value)) {
            errors.push('Password must have a minimum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character')
        } else if (!checkPassword.value) {
            errors.push('Please confirm your password');
        } else if (password.value !== checkPassword.value) {
            errors.push("Passwords don't match");
        }

        if (errors.length > 0) {
            event.preventDefault();
            error.innerText = errors.join(', ');
            console.log(errors)
        }

        if (errors.length === 0) {
            console.log("ok");
            registerModal();
        }
    })
    // function validateRegisteredUser(user) {

//     return errors;
// }

function isEmail(email) {
    const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    return emailTest;
}

function isPassword(password) {
    const passwordTest = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/.test(password);
    return passwordTest;
}


function registerModal() {
    document.querySelector('.modal').style.visibility = 'visible';
    setTimeout(() => {
        location.replace("http://localhost:2000/auth/login");
    }, 2000);

}
// closeModalBtn.addEventListener('click', function() {
//     location.replace("http://localhost:2000/auth/login");
// })