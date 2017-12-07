var orm = require('../config/orm.js');

var sushi = {
    all: function (callback) {
        orm.selectAll(function (data) {
            callback(data);
        });
    },
    insert: function (sushiName, callback) {
        orm.insertOne(sushiName, function (data) {
            callback(data);
        });
    },
    update: function (devoured, sushiId, callback) {
        orm.updateOne(devoured, sushiId, function (data) {
            callback(data);
        });
    }
}

// export the result of these calls
module.exports = sushi;