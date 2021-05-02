const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listar = false, hasta = 9) => {

   try {
       


   


    
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta ; i++) {
         
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${colors.green(base) } ${colors.red('X')} ${colors.yellow(i)  } = ${base*i}\n`
    }

    if (listar) {
        console.log('========================='.green);
        console.log('TABLA DEL:', base);
        console.log('========================='.blue);
      
         console.log(consola);    
        }

    
       fs.writeFile( `./salida/tabla-${base}.txt` , salida, (err) => {
        if (err){
            return err
        }

            return 'tabla-${base}.txt creada'
        
        //console.log(`tabla-${base}.txt creada`);
    })


  return  `tabla-${base}.txt `



   } catch (error) {
       throw error
   }

    
}

module.exports = {
     crearArchivo
}