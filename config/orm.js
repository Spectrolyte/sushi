var connection = require('./connection.js');

// selectAll()
// insertOne()
// updateOne()

var orm = {
    selectAll: function () {
        console.log('selectAll');
    },
    insertOne: function () {
        console.log('insertOne');
    },
    updateOne: function () {
        console.log('updateOne');
    }
};

module.exports = orm;