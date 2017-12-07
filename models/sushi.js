var orm = require('../config/orm.js');

var sushi = {
    all: function (callback) {
        orm.selectAll(function (data) {
            callback(data);
        });
    }
}

// export the result of these calls
module.exports = sushi;