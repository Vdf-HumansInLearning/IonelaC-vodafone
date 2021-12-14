const e = require('express');
const { response } = require('express')
var express = require('express');
const fs = require('fs');
const path = require('path');
const { off } = require('process');
var router = express.Router();

router.get('/login', function(req, res, next) {
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));
    res.json(users);
    // console.log(users)
});

router.get('/register', function(req, res, next) {
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));
    console.log(users)
    res.json(users);
});

router.post('/login', function(req, res, next) {
    console.log(req.body);
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));
    let loginUser = users.find(user => user.username === req.body.username && user.email === req.body.email && user.password === req.body.password);
    console.log(loginUser);
    res.json(loginUser);
});


router.post('/register', function(req, res, next) {
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));
    // console.log(req.body);
    // let user = {
    //     fname: req.body.data.fname,
    //     lname: req.body.data.lname,
    //     username: req.body.data.username,
    //     email: req.body.data.email,
    //     password: req.body.data.password,
    //     confirmPassword: req.body.data.confirm_password
    // }
    // let errors = validateRegisteredUser(user);

    // if (errors.length === 0) {
    //     res.status(200);
    //     res.json(user)
    // } else {
    //     res.status(400);
    //     res.send(errors);
    // }

    let fname = req.body.data.fname;
    let lname = req.body.data.lname;
    let username = req.body.data.username;
    let email = req.body.data.email;
    let password = req.body.data.password;
    let confirmPassword = req.body.data.confirm_password;

    if (password === confirmPassword) {
        users.push({
            "id": users.length + 1,
            'loggedin': 'false',
            "name": fname + " " + lname,
            "username": username,
            "email": email,
            "password": password,
            "address": {
                "street": "..",
                "suite": "..",
                "city": "..",
                "zipcode": "..",
                "geo": {
                    "lat": "..",
                    "lng": ".."
                }
            },
            "phone": "..",
            "website": "..",
            "company": {
                "name": "..",
                "catchPhrase": "..",
                "bs": ".."
            }
        })
        console.log('pushed')
    } else {
        console.log("error")
    }

    fs.writeFile(path.resolve(__dirname, '../data/users.json'), JSON.stringify(users), function(error) {
        if (error) {
            console.log(error)
        } else {
            console.log("registered")
        }
    });

});

function validateRegisteredUser(user) {
    let errors = [];

    if (!user.fname) {
        errors.push('First name is required');
    } else if (!user.lname) {
        errors.push('Last name is required');
    } else if (user.username.length < 3 || user.username.length > 150) {
        errors.push('Username must be between 3 and 150 characters in length');
    } else if (!user.username) {
        errors.push('Username is required')
    } else if (!user.email) {
        errors.push('Email is required')
    } else if (!isEmail(user.email)) {
        errors.push('Email not valid!');
    } else if (!user.password) {
        errors.password('Password is required');
    } else if (!isPassword(user.password)) {
        errors.push('Password must have a minimum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character')
    } else if (!user.password) {
        errors.push('Password is required');
    } else if (!user.confirmPassword) {
        errors.push('Please confirm your password');
    } else if (user.password !== user.confirmPassword) {
        errors.push("Passwords don't match");
    }

    return errors;
}


function isEmail(email) {
    const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    return emailTest;
}

function isPassword(password) {
    const passwordTest = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/.test(password);
    return passwordTest;
}
// to do - move validation in separate function in api or express validator
module.exports = router;