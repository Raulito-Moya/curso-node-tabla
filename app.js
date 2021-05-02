const {crearArchivo} = require('./helpers/multiplicar')
const fs = require('fs');
const argv = require('./config/yargs')
const colors = require('colors');

crearArchivo( argv.b, argv.l, argv.h ).then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado') )
                  .catch(err => console.log(err) );