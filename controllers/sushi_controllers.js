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

module.exports = router;