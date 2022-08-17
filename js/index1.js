//Primera prueba JavaScrpt//

let nombre = 'Constanza' //variable, puede cambiar su valor mas adelante en el codigo
let apellido = 'Repetto'
const CURSO = 'JavaScript' //constante, no varia su valor en todo el codigo

let telefono //se puede declarar pero no asignar valor

//operaciones matematicas
let num1 = 10
let num2 = 25

let resultado = num1 + num2

//concatenar> sumar strings
let nombreCompleto = nombre + ' ' + apellido

//cuadros de dialogo, bloquean la ejecucion de las siguientes lineas de codigo.


/* EJERCICIO EN CLASE 1 11/08*/
let nombreIngresado = prompt('Ingresa tu nombre:')
console.log('Hola ' + nombreIngresado + '! Bienvenid@') //concatenar datos

//debugger //??

let dia = prompt('Ingrsa un dia (en numeros)')
let año = prompt('Ingrsa un año(en numeros)')


//parseFloat() //convertir a num con decimales >> porque todo lo que llega por PROMPT se lee como un string
//parseInt() //convertir a numero entero


let fecha = parseInt(dia) * parseInt(año)

console.log('El resultado es:', fecha)



//pedir mail si puso aceptar 

let confirmar = confirm('Queres recibir notificaciones?') //Permite aceptar y cancelar. Y cuando el usuario haga clic en alguna de las dos, el valor del boton que cliqueo va a quedar guardado en la variable confirm. aceptar = true, cancelar = false.

if (confirmar == true){
    let mailIngresado = prompt('Ingresa tu mail:')
} 

