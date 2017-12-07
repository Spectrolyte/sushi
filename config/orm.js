var connection = require('./connection.js');

var orm = {
    selectAll: function (callback) {
        var query = 'SELECT * FROM sushi';
        connection.query(query, function (error, data) {
            if (error) {
                console.log(error);
                return;
            }
            callback(data);
        })
    },
    insertOne: function (sushiName) {
        var query = 'INSERT INTO sushi (sushi_name) VALUES (?)';
        connection.query(query, [sushiName], function (error, data) {
            if (error) {
                console.log(error);
                return;
            }
        })
    },
    updateOne: function (devoured, sushiId) {
        var query = 'UPDATE sushi SET devoured = ? WHERE id = ?';
        connection.query(query, [devoured, sushiId], function (error, data) {
            if (error) {
                console.log(error);
                return;
            }
        })
    }
};

module.exports = orm;