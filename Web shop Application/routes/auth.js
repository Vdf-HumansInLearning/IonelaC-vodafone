var express = require('express');
const axios = require('axios').default;
var router = express.Router();

// Get REGISTER page 
router.get('/register', function(req, res, next) {
    res.render('register', { title: "register", registerTitle: "Register" });
});


// Get LOGIN page
router.get('/login', function(req, res, next) {
    let logged = false;
    if (req.signedCookies.email) {
        logged = true;
    }

    res.render('login', { title: "login", loginTitle: "Account login", logged: logged });
});

router.post('/login', function(req, res, next) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    if (!username || !email || !password) {
        res.redirect('/auth/login');
    }

    console.log(req.body);
    axios.post(`http://localhost:3001/auth/login`, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }, )
        .then(function(response) {
            console.log(response);
            // handle success 
            let user = response.data;
            // let loggedInUser = users.find(user => user.username.toLowerCase() === username.toLowercase() && user.email.toLowerCase() === email.toLowerCase() && user.password === password);
            if (user) {
                res.cookie('email', email, { secure: true, signed: true });

                res.redirect('/');
            } else {
                res.redirect('/auth/login')
            }

        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });

});



router.post('/register', function(req, res, next) {
    axios.post(`http://localhost:3001/auth/register`, {
            data: req.body
        }, {
            "headers": {
                "content-type": "application/json",
            }

        })
        .then(function(res) {
            // handle success
            res.status(200);
            res.send("Successfully registered");

            res.redirect('/auth/login')
        })
        .catch(function(error) {
            res.status(400).send('Bad request');
            console.log(error);
        })


});

router.get('/logout', function(req, res, next) {
    // if (req.signedCookies.email) {
    res.clearCookie('email');
    // }

    return res.status(200).redirect('/auth/login');
    // res.render("logout", {});
});


module.exports = router;