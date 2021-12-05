var express = require('express');
const axios = require('axios').default;
var router = express.Router();
var fs = require('fs');
var path = require('path')

let rawdata = fs.readFileSync(path.resolve(__dirname, '../users.json'));

let users = JSON.parse(rawdata);
console.log(users);
// Get REGISTER page 
// router.get('/register', function(req, res, next) {
//     res.render('register', { title: "register", registerTitle: "Register" });
// });


// Get LOGIN page
router.get('/login', function(req, res, next) {
    res.render('login', { title: "login", loginTitle: "Account login" });
});


router.get('/register', function(req, res, next) {

    res.render('register', { title: "register", registerTitle: "Register" });
    // obtain the users from an API call
});


router.post('/register', function(req, res, next) {

    let fname = req.body.fname;
    let lname = req.body.lname;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirm_password;

    if (password === confirmPassword) {
        users.push({
            "id": users.length + 1,
            "name": fname + " " + lname,
            "username": username,
            "email": email,
            "password": password
        })
        console.log('pushed')
    } else {
        console.log("error")
    }

    fs.writeFile("users.json", JSON.stringify(users), function(error) {
        if (error) {
            console.log(error)
        } else {
            console.log("registered")
        }
    });

});

// router.get('/logout', function(req, res, next) {
//     res.clearCookie('user_id');
//     res.clearCookie('user_role');
//     res.render("logout", {});
// });

module.exports = router;