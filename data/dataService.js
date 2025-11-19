const path = require('path');
const fs = require('fs');

// Convertimos el JSON en un objeto de JavaScript

const videoJuegos = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'videojuegos.json'), 'utf8')
);

// Función que devuelve todos los videojuegos

function getVideojuegos() {
    return videoJuegos;
}

// Función que devuelve el videojuego con el id pasado por parametro

function getVideoJuegoId(id){
    return videoJuegos.filter((juego) => { return (juego.id == id) })[0]
}

// Exportamos las funciones para poder importarlas en el archivo de rutas index.js

module.exports = {
    getVideojuegos,
    getVideoJuegoId
}