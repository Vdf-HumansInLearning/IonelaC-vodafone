var express = require('express');
var router = express.Router();
const axios = require('axios').default;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cart', { title: "cart" });
});

module.exports = router;