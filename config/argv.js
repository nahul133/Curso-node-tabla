const argv = require('yargs')
             .option('b', {
                alias:'base',
                type: 'number',
                demandOption: true,
                describe:'es la base o el numero a multiplicar en la tabla'
             })
             .option('l', {
                 alias: 'listar',
                 type: 'boolean',
                 default:false,
                 describe: 'muestra la tabla en consola'
             } )
             .option('h', {
                 alias: 'hasta',
                 type: 'number',
                 describe: 'limite de numeros a mutiplicar',
                 default: 10
             })
             .check( (argv, option) => {
                 if ( isNaN( argv.base ) ) {
                     throw 'La base tiene que ser un numero'
                  }

                  return true;
             } )
             .check( (argv, option) => {
                if (isNaN( argv.hasta ) ) {
                    throw 'La base tiene que ser un numero'
                 }
                 return true;
             })
             .argv;   

module.exports = argv;            

