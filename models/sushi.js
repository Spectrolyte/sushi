var orm = require('../config/orm.js');

var sushi = {
    all: function (callback) {
        orm.selectAll(function (data) {
            var toEat = [];
            var eaten = [];
            for (var i=0; i < data.length; i++) {
                if (data[i].devoured == true) {
                    eaten.push(data[i]);
                }
                else if (data[i].devoured == false) {
                    toEat.push(data[i]);
                }
            }
            callback(toEat, eaten);
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