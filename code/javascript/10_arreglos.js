// Especificación de objetos.
var  objeto1  =  {
    nombre : 'Miguel' ,
    apellido : 'Quiroz' ,
    altura : 180 ,
    cantidadLibros : 20 ,
}

var  objeto2  =  {
    nombre : 'Shirley' ,
    apellido : 'Coque' ,
    altura : 160 ,
    cantidadLibros : 200 ,
}

var  objeto3  =  {
    nombre : 'Javier' ,
    apellido : 'Ortiz' ,
    altura : 170 ,
    cantidadLibros : 50 ,
}

var  objeto4  =  {
    nombre : 'Guillermo' ,
    apellido : 'Pizarro' ,
    altura : 170 ,
    cantidadLibros : 50 ,
}

var  objeto5  =  {
    nombre : 'Galo' ,
    apellido : 'Valverde' ,
    altura : 160 ,
    cantidadLibros : 60 ,
}

var  personas  =  [  objeto1 ,  objeto2 ,  objeto3 ,  objeto4 ,  objeto5  ]

// Recorrer un arreglo de objetos
para  ( persona  de  personas )  {
    consola . log (  ` $ { persona . nombre }  $ { persona . apellido } `  )
}

consola . log ( '\ n' )

para  ( var  i = 0 ;  i < personas . longitud ;  i ++ )  {
    consola . log (  ` $ { personas [ i ] . nombre }  $ { personas [ i ] . apellido } `  )
}

// Uso de filtros con arreglos.
const  esAlta  =  ( objeto )  =>  objeto . altura > = 1,70
var  personasAltas  =  personas . filtro (  esAlta  )

consola . log (  personasAltas  )
para  ( persona  de  personasAltas )  {
    consola . log (  ` $ { persona . nombre }  $ { persona . apellido } `  )
}

// Uso de la funcion map con arreglos

para  ( persona  de  personas )  {
    persona . altura  =  persona . altura / 100
}
consola . log (  personas  )

const  pasarAlturasMetros  =  ( objeto )  =>  {
    objeto . altura  =  objeto . altura / 100
    devolver  objeto
}

var  otrasPersonas  =  [ ]

para  ( persona  de  personas )  {
    otrasPersonas . empujar (  { ... persona  }  )
}

otrasPersonas . mapa (  pasarAlturasMetros  )
consola . log (  personas  )
consola . log (  otrasPersonas  )

// var personasCm = personas.map (function (objeto) {
// objeto.altura = objeto.altura * 100
// devolver objeto
//})
// console.log (personasCm)

// Uso de la función reducir en arreglos
var  suma  =  0
para  ( persona  de  personas )  {
    suma  + =  persona . cantidadLibros
}
consola . log (  `La cantidad de libros en total es $ { sum } `  )


const  contabilizarLibros  =  ( acum ,  {  cantidadLibros  } )  =>  acum  +  cantidadLibros
var  totalLibros  =  personas . reducir (  contabilizarLibros ,  0 )

consola . log (  `La cantidad de libros en total es $ { totalLibros } `  )