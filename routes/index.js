var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//ambiente de trabajo
var mongoose = require('mongoose');
var Tareas = mongoose.model('Tareas'); // Tareas es el modelo de datos

//GET - listar Tareas
router.get('/tareas', function(req, res, next) {
  Tareas.find(function(err, tareas) {
    if(err) { return next(err) }

    res.json(tareas)
  })
})

module.exports = router;
