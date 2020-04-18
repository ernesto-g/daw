var express = require('express');
var app = express();
var mysql = require('./mysql');
app.use(express.json()); // para parsear application/json
app.use(express.static('.')); // para servir archivos estaticos

//EJ 12
app.get('/devices', function(req, res, next) {
    mysql.query('SELECT * FROM Devices', function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});
app.get('/devices/:id', function(req, res, next) {
    mysql.query('SELECT * FROM Devices WHERE id=?', [req.params.id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });
});
app.post('/devices', function(req, res, next) {

    console.log(req.body); // viene vacio, imprime {}

    mysql.query('UPDATE Devices SET state=? WHERE id=?', [req.body.state, req.body.id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(JSON.stringify(rta)).status(200);
    });
});


app.listen(3000, function(req, res) {
    console.log("API funcionando en el puerto 3000");
});