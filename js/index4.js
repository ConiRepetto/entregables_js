// //Clase 4 - 23/08

// //Funcion convencional
// //Declaracion
// let nombre = prompt("Ingresa tu nombre")

// function saludar(){
//     console.log('hola ', nombre)
// }

// //Llamado
// saludar()

//Funcion con retorno

let primerNum = 0;
let segundoNum = 0;

function calcular(primerNum, segundoNum) {//recibe parametros
    return primerNum * segundoNum;
}

let resultado = calcular();