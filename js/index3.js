// //Clase 3 18/08

// //actualizaciones: i++ / i-- / i+=

// //Ciclo FOR estatico
// for (let i=0; i < 10; i++){ //>> for(desde*valor inicial*, hasta*condicionde fenado*, actualizacion*cambio luego de cada vuelta*){}
//     console.log(i)
// }

// //i >= 0 ----> Es la condición, para que el for funcione tiene que ser true. Cuando vos haces i === 0 Solo va a funcionar si ponemos 0, si no siempre va a dar false y no va a funcionar.


// //Ciclo FOR dinamico
// //Algoritmo para calcular la tabla de multiplicar
// let ingresaNumero = parseInt(prompt('Ingresa un Numero'))
// for (let i = 1; i <= 10; i++){
//     let resultado = ingresaNumero * i;
//     console.log(ingresaNumero + ' X ' + i + ' = ' + resultado)
// }

// //Algoritmo para asignar turno:
// for(let i = 1; i <= 20; i++){
//     let ingresarNombre = prompt('Ingresa tu nombre:');
//     alert('Turno No. ' + i + ' Asignado a: ' + ingresarNombre)
// }


// //Sentencia BREAK
// for (let i = 0; i <=10; i++){
//     if (i === 7){
//         break      //util para recorrer arrays, y buscar algo especifico
//     }
//     console.log('iteracion No.', i)
// }

// //Sentencia CONTINUE >> para que dada una condicion se saltee la repeticion y continue por a siguiente
// let numeroSaltear = parseInt(prompt('Que numero salteo?'))
// for (let i = 0; i <=10; i++){
//     if (i === numeroSaltear){
//         continue      
//     }
//     console.log('iteracion No.', i)
// }

//Ciclo WHILE
// let entrada = prompt("Ingresa tu contraseña");
// //Repetimos con While hasta que el usuario ingrese su contra
// while(entrada != "ConiConi" ){
//     alert("El usuario ingresó "+ entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Contraseña incorrecta");
// }


let numerito = parseInt(prompt('Ingresa un numero:'));
let factor = 1;
let seguimos = true;

while (seguimos); {
    console.log('resultado: ', (numerito * factor));
    seguimos = confirm ('Siguiente multiplicacion?');
    if (seguimos); {
        factor++
    }
}

// SWITCH

// debugger
// // //EJERCICIO EN CLASE 2- 16/08
// let ingresaNumero2 = parseInt(prompt('Ingresa un Numero para tu cuenta regresiva:'))
// for (let i = ingresaNumero2; i >= 0; i--)
// {
//     console.log('Quedan ' + i + ' dias para tu evento')
// }
