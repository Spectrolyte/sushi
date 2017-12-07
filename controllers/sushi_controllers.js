var express = require('express');
var router = express.Router();
var sushi = require('../models/sushi.js');

router.get('/', function (req, res) {
    sushi.all(function(data) {
        var hbsobj = {
            allSushi: data
        }
        res.render('index', hbsobj);
    })
});

router.post('/add', function (req, res) {
    var newSushiName = req.body.sushiName;
    console.log(newSushiName);
    sushi.insert(newSushiName, function (data) {
        // data gives back affectedRows, changedRows, etc.
        // console.log(data);
    })
})

module.exports = router;