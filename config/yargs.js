const { options} = require('yargs');


const argv = require('yargs') //utilizo yargs para establcerle una bandera a base
             .option('b', {
                 alias: 'base',
                 type: 'number',
                 demandOption: true,
                 describe: 'Es la base de la tabla de multiplicar'
             })
             .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption:true,
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Muestra la tabla hasta cierto numero dado'
            })
             .check( (argv, options) => { //para chequear el argv.argumento
                if( isNaN(argv.b) ){
                   throw 'La base tiene que ser un numero'
                }
                
                 return true
             } )
             .check( (argv, options) => {
                 return true
             })
            .argv;
          


console.clear();// para limpiar la consola antes de empezar el programa

console.log(argv); //process.argv son los valores que vienen en consola

console.log(process.argv );

//console.log('base: argv', argv.b);

/*const [ , ,arg3 = 'base=5'] = process.argv
const [ , base] = arg3.split('=')

console.log(arg3);
console.log(base);*/


//const base = 2;

module.exports = argv;