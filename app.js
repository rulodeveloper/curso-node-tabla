// const { demand, demandOption, argv, option } = require('yargs');
const { crearArchivo } = require('./logica/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivo (argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, 'creado'.rainbow))
    .catch(err => console.log(err));
