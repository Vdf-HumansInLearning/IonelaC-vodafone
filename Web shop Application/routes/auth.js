var express = require('express');
const axios = require('axios').default;
var router = express.Router();
var fs = require('fs');
var path = require('path')
const filePath = "../users.json";


console.log(filePath)

let isAdmin = false;
let isLoggedIn = false;

// Get REGISTER page 
router.get('/register', function(req, res, next) {
    res.render('register', { title: "register", registerTitle: "Register" });
});


// Get LOGIN page
router.get('/login', function(req, res, next) {
    res.render('login', { title: "login", loginTitle: "Account login" });
});


// POST LOGIN page --doesn't work yet
router.post("/register", function(req, res, next) {
    if (req.body.fname && req.body.lname && req.body.username && req.body.email && req.body.password && req.body.confirm_password) {
        let user = {
            firstName: req.body.fname,
            lastName: req.body.lname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirm_password,
            isAdmin: false,
        };

    }
})


// axios.post('../users.json')
//     .then(function(response) {
//         response.json()
//     })
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(error => console.log(error));



// router.post('/register', function(req, res, next) {
//     res.send('POST request to the homepage')

// });

router.get('/register', function(req, res, next) {

    // obtain the users from an API call
    axios.get('http://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            console.log(response)
            res.render('register', { title: "register", registerTitle: "Register" });
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
            // always executed
        });
});


// router.get('/register', function(req, res, next) {
//     let registered = false;
//     if (req.cookies.user_role && req.cookies.user_id) {
//         registered = true;
//     }
//     res.render('register', {
//         registerTitle: 'Register',
//         registered: registered
//     });
// });

// router.post('/register', function(req, res, next) {

//     axios.post(`http://localhost:3001/users/register`, {
//             name: req.body.fname + " " + req.body.lname,
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         }, {
//             "headers": {
//                 "content-type": "application/json",
//             }
//         })
//         .then(function(response) {
//             // handle success
//             res.send("Successfully registered");
//         })
//         .catch(function(error) {
//             // handle error
//             console.log(error);
//             res.send(error);
//         });

// });

// router.get('/logout', function(req, res, next) {
//     res.clearCookie('user_id');
//     res.clearCookie('user_role');
//     res.render("logout", {});
// });

module.exports = router;