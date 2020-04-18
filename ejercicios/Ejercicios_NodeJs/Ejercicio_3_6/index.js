var express = require('express');
var app = express();
app.use(express.json()); // para parsear application/json

//ej 3
var datos = require('./datos.json');

//ej 4
app.get('/devices', function(req, res, next) {

    res.json(datos);
});

//ej 5
app.get('/devices/:id', function(req, res, next) {
    let datosFiltrados = datos.filter(item => item.id == req.params.id);
    res.json(datosFiltrados);
});

//ej 6 espero recibir {id:1,state:1} Ejemplo
app.post('/devices', function(req, res, next) {
    let datoFiltrado = datos.filter(item => item.id == req.body.id);
    if (datoFiltrado.length > 0) {
        datoFiltrado[0].state = req.body.state;
    }
    res.json(datoFiltrado);
});



app.listen(3000, function(req, res) {
    console.log("API funcionando en el puerto 3000");
});
