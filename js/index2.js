// atajo para comentar ctrl+k + c

//Clase 2 - 16/08 

//Comparacion
let unNumero = 5

if (unNumero == 5){
    console.log('Son iguales');
}

let username = prompt('Ingresa tu Usuario:')

if(username === 'ConiRepetto'){
    console.log('Bienvenida ', username)
}else{
    console.log('usuario no registrado')
}

let user = prompt('Ingresa tu usuario:')
let contrasena = prompt('Ingresa tu contrasena:')
let fingerprint = confirm('Usar huella para loggearte?')

if (user == 'ConiRepetto' && contrasena == '1234'){
    console.log('Bienvenid@ ', user)
} else {
    console.warn('Usuario o contrasena incorrectos')
}

if (fingerprint === true || (user == 'ConiRepetto' && contrasena == '1234')){
    console.log('Bienvenid@ ', user)
} else {
    console.log('Usuario o contrasena incorrectos')
}

//EJERCICIO EN CLASE 2- 16/08

let edadIngresada = prompt('Ingresa tu edad')

if (edadIngresada >= 18){
    console.log('Sos mayor de edad, podes ingresar.')
}else {
    console.log('Sos menor de edad, no podes ingresar.')
}


let numero = parseInt(prompt('Ingresa un numero'))

if (numero >= 10 && numero <= 50){
    let numeroCorrecto = alert('numero aceptado')
}else {
    console.warn('numero no aceptado')
}

