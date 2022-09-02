// Clase 6 - 30/08 
//Arrays
// tipo de dato que sirve para almacenar valores en forma de lista.
// Declaraciòn de array vacío, por ejemplo para ir agregando datos que se generan de otro lado
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1, 2];
// Declaracion de array con booleanos
const arrayD = [true, false, true, false];

//Acceder al contenido del array &gt;&gt; indice = posición de cada elemento dentro de un array. Accedo al contenido “nombre array”+ [“indice”]
const numeros1 = [1, 2, 3, 4, 5];
console.log(numeros[0]) // = 1;
console.log(numeros[3]) // = 4;
let resultado = numeros[1] + numeros[2]
console.log(resultado) // = 5;
//console.table >> devuelve todo el contenido del array en formato tabla.
//Recorrer el Array > bucle para acceder a cada elemento por separado
const numeros2 = [1, 2, 3, 4, 5];

function recorreArr()
for (let i = 0; i < 5 /*(reemplazable por numerous.length)*/ ; i++) {

    console.log(numeros[i]);
}
//Propiedades y Metodos de Arrays 

//LENGTH “nombre array” + . + length &gt;&gt; utilizarlo cuando quiero recorrer todo el array
const numeros = [1, 2, 3, 4, 5];
numeros.length // = 5 (cantidad de elementos, no su indice)

//PUSH (método, suma un elemento al final del array)
const miArray2 = ['marca', 3, 'palabra']
miArray.push('otro elemento')
console.log(miArray) //['marca', 3, 'palabra', 'otro elemento']
function agregaeElemento() { //dinamico
    let nuevoEl = prompt('Ingresa un nuevo elemento:')
    numeros.push(nuevoEl)
    console.table(numeros)
}

//UNSHIFT (método, suma un elemento al principio del array)
const miArray = ['marca', 3, 'palabra']
miArray.unshift('otro elemento')
console.log(miArray) //[“otro elemento”, &quot;marca&quot;, 3, &quot;palabra&quot;]

//SHIFT (método, eliminar el primer elemento del array)
function quitarElementoPpio() {
    numeros.shift()
    console.table(numeros)
}
numeros.shift // devuelve el elemento eliminado?

//POP (método, eliminar el primer elemento del array)
function quitarElementoFin() {
    numeros.pop()
    console.table(numeros)

}

//SPLICE
const nombres3 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'vanesa'];
nombres.splice(1, 2) // Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición)
console.log(nombres) // [&#39;Rita&#39;, &#39;Ana&#39;, &#39;Vanesa&#39;]
function quitarElementoSplice() {
    let aquitar = prompt('Ingresar índice a quitar')
    let resultado = numeros.splice(aquitar, 1) //atrapo lo que se saca , y lo puedo guardar en otro array para utilizar esos datos mas tarde
    console.log(resultado)
    console.table(numeros)
}

//JOIN (genera un string con todos los elementos del array)
const nombres = ['Luis', 'Ana', 'Julia', 'Juan']
console.log(nombres.join('', '')) // Luis, Ana, Julia // Espera que se le pase un separador  * - x etc.
console.log(nombres.join('*')) // Luis*Ana*Julia

//CONCAT (METODO, combinar dos Arrays en un único Array)
const perros = ['Pupy', 'Ronnie']
const gatos = ['Mishi', 'Garfield', 'Zuri']

function fusionar() {
    const mascotas = perros.concat(gatos)
    console.table(mascotas)
}

console.log(mascotas) // ['Pupy', 'Ronnie', 'Mishi', 'Garfield', 'Zuri']

// SLICE (método, devuelve una copia de una parte(pasándole desde donde y hasta donde) del Array dentro de un nuevo Array
const nombres4 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'vanesa'];
const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro', 'Miguel']

//Array de Objetos