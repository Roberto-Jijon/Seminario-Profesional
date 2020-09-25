dejar  persona  =  {
    nombre : 'Roberto' ,
    apellido : 'Jijon' ,
    peso : 150 , 
}

const  INCREMENTAR_PESO  =  3
const  DECREMENTAR_PESO  =  2

const  aumentarPeso  =  (  objeto  )  =>  objeto . peso  + =  INCREMENTAR_PESO
const  disminuyePeso  =  (  objeto  )  =>  objeto . peso  - =  DECREMENTAR_PESO

const  comeMucho  =  ( )  =>  Math . aleatorio ( )  <  0.1
const  realizaDeporte  =  ( )  =>  Math . aleatorio ( )  <  0.8

const  META  =  persona . peso  -  10

consola . log (  `Al inicio del año $ { persona . nombre } pesa $ { persona . peso } .`  )

while (  persona . peso  >  META  )  {
    si  ( comeMucho ( ) )  {
        aumentarPeso (  persona  )
    }
    if  ( realizaDeporte ( ) )  {
        disminuirPeso (  persona  )
    }
}

consola . log (  `Al final del año $ { persona . nombre } pesa $ { persona . peso } .`  )