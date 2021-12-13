let form = document.getElementById("register-form");
let error = document.querySelector('.error-message');
let closeModalBtn = document.querySelector('.btn');

// let nameRegex = /^[a-zA-Z ]{2,30}$/;
// let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// let passwordRegex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let checkPassword = document.getElementById("confirm-password");

form.addEventListener('submit', function(event) {
        let errors = [];

        if (firstName.value === '' || firstName.value === null) {
            errors.push('First name is required');
        } else if (lastName.value === '' || lastName.value === null) {
            errors.push('Last name is required');
        } else if (username.value.length < 3 || username.value.length > 150) {
            errors.push('Username must be between 3 and 150 characters in length');
        } else if (username.value === '' || username.value === null) {
            errors.push('Username is required')
        } else if (email.value === '' || email.value === null) {
            errors.push('Email is required')
        } else if (!isEmail(email.value)) {
            errors.push('Email not valid!');
        } else if (password.value === '' || password.value === null) {
            errors.push('Password is required');
        } else if (!isPassword(password.value)) {
            errors.push('Password must have a minimum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character')
        } else if (checkPassword === '' || checkPassword === null) {
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

// function checkInputs() {
//     const firstNameValue = firstName.value.trim();
//     const lastNameValue = lastName.value.trim();
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const checkPasswordValue = checkPassword.value.trim();

//     if (firstNameValue === '') {
//         setErrorFor(firstName, 'First name is required')
//     } else {
//         setSuccessFor(firstName)
//     }

//     if (lastNameValue === '') {
//         setErrorFor(lastName, 'Last name is required')
//     } else {
//         setSuccessFor(lastName)
//     }

//     if (usernameValue === '') {
//         setErrorFor(username, 'Username is required')
//     } else {
//         setSuccessFor(username)
//     }

//     if (emailValue === '') {
//         setErrorFor(email, 'Email is required')
//     } else if (!isEmail(emailValue)) {
//         setErrorFor(email, 'Email is not valid')
//     } else {
//         setSuccessFor(email)
//     }

//     if (passwordValue === '') {
//         setErrorFor(password, 'Password is required');
//     } else if (passwordValue === 'password') {
//         setErrorFor(password, 'Password cannot be password')
//     } else if (passwordValue.length < 6) {
//         setErrorFor(password, 'Password must be longer than 6 characters')
//     } else {
//         setSuccessFor(password);
//     }

//     if (checkPasswordValue === '') {
//         setErrorFor(checkPassword, 'Password check is required')

//     } else if (passwordValue !== checkPasswordValue) {
//         setErrorFor(checkPassword, 'Password does not match');
//     } else {
//         setSuccessFor(checkPassword);
//     }
// }

// function setErrorFor(input, message) {
//     const formField = input.parentElement;
//     const small = formField.querySelector('small');
//     small.innerText = message;

//     formField.className = 'form-field fail'
// }

// function setSuccessFor(input) {
//     const formField = input.parentElement;
//     formField.className = 'form-field success';
// }

// function isEmail(email) {
//     const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//     return emailTest;
// }


// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     // fetch(form.action, {
//     //         method: 'post',
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify({ username: username.value, fname: firstName.value, lname: lastName.value, email: email.value, password: password.value })
//     //     })
//     //     .then(data => {
//     //         console.log(data);
//     //         if (data.status === 200) {
//     //             checkInputs();
//     //             window.location.href = "http://localhost:2000/auth/login";

//     //         } else {
//     //             console.log('error!!')
//     //         }

//     //     })
//     checkInputs();
//     // alert("User successfully registered. Please log in!");
//     window.location.href = "http://localhost:2000/auth/login";
// })