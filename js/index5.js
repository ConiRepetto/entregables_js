// //Clase 5 - 25/08

// //Objetos

// let nombre = "Homero";
// let edad = 39;
// let calle = "Av. Siempreviva 742";
// // Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
// const persona = { //Declaracion de objeto
//     nombre: "Homero", //Par clave/propiedad/key -valor 
//     edad: 39,
//     calle: "Av. Siempreviva 742"
// }

// //Como obtener/llamar a los valores
// const persona4 = {
//     nombre: "Homero",
//     edad: 39,
//     calle: "Av. Siempreviva 742"
// }

// console.log(persona1.nombre) //nombre del Objeto + . + propiedad que quiero llamar
// console.log(persona1.edad)
// console.log(persona1.calle)

// //Asignar o Cambiar el valor de una propiedad ya declarada 
// persona3.edad = 36 //nombre del Objeto + . + propiedad a la cual le quiero cambiar el valor + = + nuevo valor

// //FUNCIONES CONSTRUCTORAS
// function Persona(nombre, edad, calle) { //FUNCTION + nombre con 1era letra mayus (todas las propiedades separadas por , )
//     this.nombre = nombre; //en las funciones contructoras se pone el this. antes de la key, y le decimos que va a rellenar eso con lo que se ingrese por parantesis. o se le define un valor fijo que no se busque en el parentesis
//     this.edad 	 = edad;
//     this.calle  = calle;
// }

// //Instanciar
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

//METODOS >> CUANDO SE LE PASA COMO PROPIEDAD UNA FUNCION
const Iva = 1.21
// class Producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//         this.precioConIva = function () {
//             return this.precio * Iva;
//         };
//         this.descontarStock = function (unidades) {
//             return this.stock = this.stock - unidades;
//         };
//     }
// }

//const producto1 = new Producto("Zapatos", 100, 500);

// producto1.precioConIva() //>>poner los parentesis para llamar al metodo

// producto1.descontarStock(5)

// //Iterar un objeto, mostrar cada una de las propiedades dentro de el 
// for(propiedad in producto1){
//     console.log(propiedad)
// }

// //Clases
// class Persona22{
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//     }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
//convertir funcion constructora en una clase usando VSC > poner el cursor sobre los ... abajo de Producto > QuickFix >> Conertir funcion en ......>> Hay que sacar los metodos de las primeras llaves con propiedades, sacarles el this


class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    precioConIva() { //funcion anonima "limpia"
        return this.precio * Iva;
    };
    descontarStock(unidades) {
        return this.stock = this.stock - unidades;
    };
}

const producto1 = new Producto("Zapatos", 100, 500);

