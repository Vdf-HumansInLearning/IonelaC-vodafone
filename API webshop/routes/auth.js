const { response } = require('express')
var express = require('express');
const fs = require('fs');
const path = require('path');
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
    // console.log(req.body);
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));
    // console.log(users)

    let fname = req.body.data.fname;
    let lname = req.body.data.lname;
    let username = req.body.data.username;
    let email = req.body.data.email;
    let password = req.body.data.password;
    let confirmPassword = req.body.data.confirm_password;

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

    fs.writeFile(path.resolve(__dirname, '../data/users.json'), JSON.stringify(users), function(error) {
        if (error) {
            console.log(error)
        } else {
            console.log("registered")
        }
    });

});

// to do - move validation in separate function in api or express validator
module.exports = router;