const { response } = require('express')
var express = require('express');
const fs = require('fs');
var router = express.Router();
const path = require('path');


router.get('/', function(req, res, next) {
    let phones = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/phones.json'), 'utf8'));
    res.json(phones);
    console.log(phones)
});

module.exports = router;