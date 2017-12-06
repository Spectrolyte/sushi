var orm = require('../config/orm.js');

orm.selectAll();
orm.insertOne();
orm.updateOne();

// export the result of these calls
module.exports = 'some data after orm function';