var  persona  =  {
    nombre : 'Luis' ,
    apellido : 'Rodríguez' ,
    edad : 25 ,
    universidad : 'Universidad Politécnica Salesiana' ,
    correoElectronico : 'lrodriguez@est.ups.edu.ec' ,
    ingeniero : cierto ,
    maestro : falso ,
    doctor : falso
}

función  imprimirPersona (  objeto  )  {
    consola . log (  ` $ { objeto . nombre }  $ { objeto . apellido } `  )
    consola . log (  `Edad: $ { objeto . edad } años`  )
    consola . log (  `Universidad: $ { objeto . universidad } `  )
    consola . log (  `Correo electrónico: $ { objeto . correoElectronico } `  )
    if  ( objeto . ingeniero )  {
        consola . log (  `Es Ingeniero`  )
    }
    if  ( objeto . master )  {
        consola . log (  `Es Magíster`  )
    }
    if  ( objeto . doctor )  {
        consola . log (  "Es Doctor"  )
    }
}

// INTERRUPTOR
opcion  =  2

cambiar ( opcion )  {
    caso  1 :
        consola . log ( 'Caso 1' )
        rotura
    caso  2 :
        consola . log ( 'Caso 2' )
        rotura
}

imprimirPersona (  persona  )