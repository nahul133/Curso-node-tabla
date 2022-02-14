const { multiplicar } = require('./helpers/multiplicar');
const argv = require('./config/argv')


console.clear();

console.log(argv)



multiplicar(argv.base, argv.l, argv.h ).then( r => {console.log(r);} )