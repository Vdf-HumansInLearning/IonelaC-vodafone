const axios = require('axios').default;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    // obtain the users from an API call
    axios.get('http://localhost:3001/users')
        .then(function(response) {

            let users = response.data
                .filter(item => {
                    if (req.query.username) {
                        return !req.query.username.includes(item.username)
                    }
                    return true;
                });


            let moreInfoUsers = response.data.filter(item => {
                if (req.query.id) {
                    return req.query.id.includes(item.id)
                }
            });

            res.render('users', { title: 'Users', users: users, moreInfoUsers: moreInfoUsers });
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
            // always executed
        });
});


module.exports = router;