var express = require('express');
var router = express.Router();
var express = require('express');
var ejs = require('ejs');
const { checkout } = require('.');
const axios = require('axios');
const { log } = require('debug');

router.get('/', function(req, res, next) {

    // users obtained from the api
    axios.get('http://localhost:3001/shop')
        .then(function(response) {
            let brands = [];
            let os = [];

            response.data.forEach(item => {

                if (!brands.includes(item.brand)) {
                    brands.push(item.brand)
                }
                if (!os.includes(item.operating_system)) {
                    os.push(item.operating_system)
                }
            });
            console.log(response.data);

            let phones = response.data.filter(item => {
                if (req.query.brand) {
                    return req.query.brand.includes(item.brand);
                }
                return true;
            }).filter(item => {
                if (req.query.os) {
                    return req.query.os.includes(item.operating_system)
                }
                return true;
            }).filter(item => {
                if (req.query.minPrice && req.query.maxPrice) {
                    let min = req.query.minPrice - 1 + 1;
                    let max = req.query.maxPrice - 1 + 1;
                    return item.price - item.discount > min && item.price - item.discount < max;

                }
                return true;
            });

            // .filter(item => {
            //     if (req.query.searchedBrand) {
            //         return req.query.searchedBrand.toLowerCase().includes(item.brand.toLowerCase());
            //     }
            //     return true;
            // });

            console.log(req.query);
            res.render('shop', { title: "shop", phones: phones, phonesFilter: phones, brands: brands, os: os });
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
            // always executed
        });
});

module.exports = router;