var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: 'userpass'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error al conectar: ' + err.stack);
        return;
    }

    console.log('Conectado con id ' + connection.threadId);
});

module.exports = connection;