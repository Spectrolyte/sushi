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
    insertOne: function (sushiName, callback) {
        var query = 'INSERT INTO sushi (sushi_name) VALUES (?)';
        connection.query(query, [sushiName], function (error, data) {
            if (error) {
                console.log(error);
                return;
            }
            callback(data);
        })
    },
    updateOne: function (devoured, sushiId, callback) {
        var eaten;
        if (devoured == true) { 
            eaten = false;
        }
        else if (devoured == false) {
            eaten = true;
        }
        var query = 'UPDATE sushi SET devoured = ? WHERE id = ?';
        connection.query(query, [eaten, sushiId], function (error, data) {
            if (error) {
                console.log(error);
                return;
            }
            callback(data);
        });
    }
};

module.exports = orm;