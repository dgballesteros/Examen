var express = require('express');
var router = express.Router();

// Importamos el archivo dataService

const dataService = require('../data/dataService');

/* Ruta para mostrar la vista index.ejs */

router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/videojuegos', function(req, res, next) {
  let videojuegos = dataService.getVideojuegos();
  res.render('videojuegos', { videojuegos : videojuegos });
});


router.get("/videojuegos/:pid", function(req,res,next){
  let elvideojuego = dataService.getVideoJuegoId(req.params.pid);
  res.render('videojuego', { elvideojuego: elvideojuego });
});

module.exports = router;
