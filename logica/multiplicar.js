const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base=5, listar=false, hasta=10) => {
        try {   
            let salida = '';
            let consola='';
    
            for( let i = 1; i<= hasta ; i++) {
                salida +=`${null, base} x ${i} = ${base * i}\n`;
                consola +=`${colors.blue(base)} ${'x'.gray} ${colors.blue(i)} ${'='.green} ${colors.yellow(base * i)}\n`;
            }

            if (listar) {
                console.log('==================='.green);
                console.log('  Tabla del:'.green, colors.blue(base));
                console.log('==================='.green);
                console.log(consola);
            }

            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);       
            // resolve( `Tabla-${base}.txt`);
            return `Tabla-${base}.txt`;
    
    
        } catch (error) {
            throw err;
        }            
}
module.exports={
    crearArchivo
}