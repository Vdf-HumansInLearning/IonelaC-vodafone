var express = require('express');
const axios = require('axios').default;
var router = express.Router();

// Get REGISTER page 
router.get('/register', function(req, res, next) {
    res.render('register', { title: "register", registerTitle: "Register" });
});


// Get LOGIN page
router.get('/login', function(req, res, next) {
    let loggedIn = false;
    if (req.cookies.user_id) {
        loggedIn = true;
    }
    res.render('login', { title: "login", loginTitle: "Account login", loggedIn: loggedIn });
});

router.post('/login', function(req, res, next) {

    console.log(req.body);
    axios.post(`http://localhost:3001/auth/login`, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }, {
            "headers": {
                "content-type": "application/json",
            }
        })
        .then(function(response) {
            console.log(response)
                // handle success 
            const user = response.data;
            console.log(user);
            if (user) {
                res.cookie('user_id', user.id).send('cookie set');
                // res.status(200).json({ 'msg': 'ok' })
            } else {
                res.clearCookie('user_id');
                res.send('cookie user cleared');
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
            // if (res.status !== 400) {
            res.send("Successfully registered");
            // }
        })
        .catch(function(error) {
            console.log(error);
        })
    res.redirect('http://localhost:2000/auth/login')

});


module.exports = router;