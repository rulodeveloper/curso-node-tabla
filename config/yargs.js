const { describe } = require('yargs');
const argv = require('yargs')
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra tabla en consola'
    })
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es un limite para el numero de veces que se multiplica'
    })
    .check((argv, options)=>{
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv;
                
module.exports=argv;