var express = require('express');
var router = express.Router();
const axios = require('axios').default;

/* GET home page. */
router.get('/', function(req, res, next) {
    let email = req.signedCookies.email;

    if (email) {
        axios.get(`http://localhost:3001/auth/login`, {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }, )
            .then(function(response) {
                console.log(response);
                // handle success 
                let users = response.data;
                let loggedInUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());

                console.log(loggedInUser);

            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
    res.render('index', { title: "Homepage" });
});

module.exports = router;