const { response } = require('express')
var express = require('express');
const fs = require('fs');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    let users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
    let username = users.map(item => item.username)
    res.json(username);
    console.log(username)

});

module.exports = router;