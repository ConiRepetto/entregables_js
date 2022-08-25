//Clase 4 - 23/08

//Funcion convencional
//Declaracion
let nombre = prompt("Ingresa tu nombre")

function saludar(){
    console.log('hola ', nombre)
}

//Llamado
saludar()

//Funcion con retorno

let primerNum = 0;
let segundoNum = 0;

function calcular(primerNum, segundoNum) { //recibe parametros
    return primerNum * segundoNum;
}

let resultado = calcular();



function calculos() {
    let primerNro = parseFloat(prompt('Ingresa el 1er nro:'))
    let segundoNro = parseFloat(prompt('Ingresa el 1er nro:'))
    let operacion = prompt('Ingresa la operacion (+ - * /):')
    console.log('Resultado', realizarCulculo(primerNro, segundoNro, operacion))
}

function realizarCulculo(num1, num2, ope) {
    switch (ope) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
}

//Funciones ANONIMAS
let iva = 1.21

const precioConIVA = function(precio, iva){
    return precio * iva
}

/* Llamado
precioConIVA(120, iva)
*/

//Funcion FLECHA

function cuandoNaciste(){
    console.log(2022 - 45)
}

const cuandoNacio = () => {
    console.log(2022 - 45)
}