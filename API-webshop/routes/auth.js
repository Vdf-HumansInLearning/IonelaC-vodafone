const e = require('express');
const { response } = require('express')
const express = require('express');
const fs = require('fs');
const path = require('path');
const { off } = require('process');
const router = express.Router();

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
    if (loginUser) {
        res.status(200).json(loginUser)
    } else {
        res.status(404).send({ message: '404 NOT FOUND' });
    }
});


router.post('/register', function(req, res, next) {
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));

    let user = {
        fname: req.body.data.fname,
        lname: req.body.data.lname,
        username: req.body.data.username,
        email: req.body.data.email,
        password: req.body.data.password,
    };

    let isValid = validateUser(user, req.body.data.confirmPassword);


    if (isValid) {
        let fname = req.body.data.fname;
        let lname = req.body.data.lname;
        let username = req.body.data.username;
        let email = req.body.data.email;
        let password = req.body.data.password;
        let confirmPassword = req.body.data.confirm_password;

        if (password === confirmPassword) {
            users.push({
                "id": users[users.length - 1].id + 1,
                "loggedin": 'false',
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
    }
    // res.redirect('/auth/login');

});


function validateUser(user, confirmPassword) {
    let isValid = true;

    if (!user.fname) {
        isValid = false;
    }

    if (!user.lname) {
        isValid = false;
    }

    if (!user.username || user.username < 3 || user.username > 150) {
        isValid = false;
    }

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(user.email)) {
        isValid = false;
    }

    if (user.password <= 8 || user.password >= 20 || user.password !== confirmPassword) {
        isValid = false;
    }

    return isValid;
}

// to do - move validation in separate function in api or express validator
module.exports = router;