const { response } = require('express');
const e = require('express');
var express = require('express');
const fs = require('fs');
var router = express.Router();
var path = require('path')


/* GET users list. */

router.get('/', function(req, res, next) {
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));
    res.status(200);
    res.json(users);
    console.log(users)

});

router.get('/:id', function(req, res, next) {
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));

    let id = req.params.id;
    let filteredUser = users.find(item => item.id == id);
    if (filteredUser === undefined) {
        // console.log("ERROR")
        res.status(404).json({ error: 'User not found' });
    }
    res.json(filteredUser);
    console.log(filteredUser);
    // HOW DO I DELETE THE USER WITH THIS ID?

    // TO DO: if no user find, respond with status 404, error message



});

router.delete('/:id', function(req, res) {

    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf8'));
    let userToDelete = users.filter((i) => i.id != req.params.id);
    console.log(req.params.id);
    console.log(userToDelete);

    fs.writeFile(path.resolve(__dirname, '../data/users.json'), JSON.stringify(userToDelete), function(error) {
        if (error) {
            console.log(error)
        } else {
            console.log("registered")
        }
    });

});

module.exports = router;