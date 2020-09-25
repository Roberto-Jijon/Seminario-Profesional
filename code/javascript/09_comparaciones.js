var  docente  =  {
    nombre : 'Guillermo' ,
    apellido : 'Pizarro' ,
}

var  docente2  =  {
    nombre : 'Dario' ,
    apellido : 'Huilcapi' ,
}

// Asignación por paso de valor
var  otroDocente  =  {
    ... docente
}

consola . log (  docente  ==  docente2  )
// Debido a que son objetos diferentes (tienen diferente dirección de memoria)
consola . log (  docente  ==  otroDocente  )

consola . log (  otroDocente . nombre  )

// Esta asignación es por referencia
docente3  =  otroDocente
otroDocente . nombre  =  'Luis'

// Debido a que es el mismo objeto (tienen la misma dirección en memoria)
consola . log (  docente3  ==  otroDocente  )
consola . registro (  docente3  )
consola . log (  docente  )