const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Mudasir@1231', {
    dialect: 'mysql',
    host: 'localhost',

})
module.exports = sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Mudasir@1231'
// });

// module.exports = pool.promise();