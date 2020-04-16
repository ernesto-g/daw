var express = require('express');
var app = express();
var mysql = require('./mysql');
app.use(express.json()); // para parsear application/json

//ej 3
var datos = require('./datos.json');

//ej 4
app.get('/dispositivos', function(req, res, next) {

    res.json(datos);
});

//ej 5
app.get('/dispositivos/:id', function(req, res, next) {
    let datosFiltrados = datos.filter(item => item.id == req.params.id);
    res.json(datosFiltrados);
});

//ej 6 espero recibir {id:1,state:1} Ejemplo
app.post('/dispositivos', function(req, res, next) {
    let datoFiltrado = datos.filter(item => item.id == req.body.id);
    if (datoFiltrado.length > 0) {
        datoFiltrado[0].state = req.body.state;
    }
    res.json(datoFiltrado);
});


//EJ 12
app.get('/dispositivosDB', function(req, res, next) {
    mysql.query('Select * from DAW.Devices', function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });
});
app.get('/dispositivosDB/:id', function(req, res, next) {
    mysql.query('Select * from DAW.Devices where id=?', [req.params.id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });
});
app.post('/dispositivosDB', function(req, res, next) {
    mysql.query('Update DAW.Devices set state=? where id=?', [req.body.state, req.body.id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send("Se actualizo el usuario " + JSON.stringify(rta)).status(200);
    });
});


app.listen(3000, function(req, res) {
    console.log("API funcionando en el puerto 3000");
});