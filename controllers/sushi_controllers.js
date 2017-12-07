var express = require('express');
var router = express.Router();
var sushi = require('../models/sushi.js');

router.get('/', function (req, res) {
    sushi.all(function(data) {
        var hbsobj = {
            allSushi: data
        }
        res.render('index', hbsobj);
    });
});

router.post('/add', function (req, res) {
    var newSushiName = req.body.sushiName;
    console.log(newSushiName);
    sushi.insert(newSushiName, function (data) {
        // data gives back affectedRows, changedRows, etc.
        // console.log(data);
        res.end();
    });
});

router.put('/update', function (req, res) {
    var sushiId = req.body.sushiId;
    var devoured = req.body.devoured;
    sushi.update(devoured, sushiId, function (data) {
        console.log('updated: ' + JSON.stringify(data));
        res.end();
    });
});

module.exports = router;