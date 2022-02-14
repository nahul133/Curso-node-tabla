const fs = require('fs');
const colors = require('colors');

const multiplicar = async (base = 5, listar=false, limite=10  ) => {

    console.log('\n')
    console.log('==========================')
    console.log('       tabla del', base,':'     );
    console.log('========================== \n')

    let salida = ''

    for(let i = 1 ; i <= limite; i++) {
        salida += (` ${'      '} ${base} ${colors.green('x')} ${i} ${colors.green('=')} ${ base * i } \n`);  
    }

    listar ? console.log(salida) : console.log('')

    

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    return `${'   '}` + colors.blue(`tabla-${base} ha sido creada`)

}


module.exports = {
    multiplicar
}