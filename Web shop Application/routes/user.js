const { response } = require('express');
var express = require('express');
const axios = require('axios').default;
var router = express.Router();

router.get('/', function(req, res, next) {

    // users obtained from the api
    axios.get('http://localhost:3001/user')
        .then(function(response) {
            response.data.forEach(element => {
                    console.log(element)
                })
                // console.log(req.query)
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
            // always executed
        });
});



module.exports = router;