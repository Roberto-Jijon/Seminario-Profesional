var  contador  =  0

const  avanzar  =  (  )  =>  {
    numero  =  Matemáticas . aleatorio ( )
    consola . log (  número  ) 
    
    resultado  =  numero  <  0.25
    volver  resultado 
}

hacer  {
    contador ++
}  mientras ( ! avanzar ( )  )

si  (  contador  ==  1  )  {
    consola . log (  `Se avanzó $ { contador } vez`  )
}  más  {
    consola . log (  `Se avanzó $ { contador } veces`  )
}