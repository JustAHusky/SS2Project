const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'godyr2003',
    database: 'wordsmith_database'
});

module.exports = connection;
