var  docente1  =  {
    nombre : 'GuillermoRo' ,
    apellido : 'Pizarro' ,
    afiliacion : 'Universidad Politécnica Salesiana' ,
    correo_electronico : 'gpizarro@ups.edu.ec' ,
}

var  docente2  =  {
    nombre : 'Roberto' ,
    apellido : 'Jijon' ,
    afiliacion : 'Universidad Politécnica Salesiana' ,
    correo_electronico : 'rjijon@ups.edu.ec' ,
}

función  imprimirNombreMayuscula ( objeto )  {
    var  { nombre }  =  objeto
    consola . log (  ` $ { nombre . toUpperCase ( ) }  $ { objeto . apellido } `  )
}

function  imprimirNombreMinuscula ( objeto )  {
    consola . log (  ` $ { objeto . nombre . toLowerCase ( ) }  $ { objeto . apellido } `  )
}

función  imprimirA ApellidoMayuscula (  {  apellido  }  )  {
    consola . log (  ` $ { apellido . toUpperCase ( ) } `  )
}


imprimirNombreMayuscula (  docente1  )
imprimirNombreMinúscula (  docente1  )
imprimirA ApellidoMayuscula (  docente2  )