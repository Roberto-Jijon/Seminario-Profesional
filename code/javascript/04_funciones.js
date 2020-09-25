var  nombreA Apellidos  =  'Roberto Jijon'
var  edad  =  24

// Función tipo declarativa
función  imprimirEdad ( nombre ,  edad )  {
    consola . log (  ` $ { nombre } tiene la edad de $ { edad } .`  )
}

// Función tipo flecha
var  imprimirEdad2  =  ( nombre ,  edad )  =>  { 
    consola . log (  ` $ { nombre } tiene la edad de $ { edad } .`  ) 
}

// Función tipo expresiva
var  imprimirEdad3  =  function ( nombre ,  edad )  {
    consola . log (  ` $ { nombre } tiene la edad de $ { edad } .`  ) 
}

imprimirEdad (  nombreAñadir ,  edad  )
imprimirEdad (  'Jack Jijon' ,  1  )
imprimirEdad2 (  nombreA Apellidos ,  edad  )
imprimirEdad3 (  'Alfredo Jijon' ,  4  )