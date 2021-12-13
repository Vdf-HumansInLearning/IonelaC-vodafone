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
    if (req.cookies.user_email) {
        logged = true;
    }

    res.render('login', { title: "login", loginTitle: "Account login", logged: logged });
});

router.post('/login', function(req, res, next) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    console.log(req.body);
    axios.post(`http://localhost:3001/auth/login`, {
            username: username,
            email: email,
            password: password
        }, {
            "headers": {
                "content-type": "application/json",
            }
        })
        .then(function(res) {
            console.log(res);
            // handle success 
            const user = res.data;
            if (user) {
                res.cookie = `user_email=${user.email}`;
                console.log(res.cookie);
                console.log(user.email);
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

            // res.redirect('http://localhost:2000/auth/login')
        })
        .catch(function(error) {
            res.status(400).send('Bad request');
            console.log(error);
        })


});

router.get('/logout', function(req, res, next) {
    res.clearCookie('user_email');
    res.render("logout", {});
});


module.exports = router;