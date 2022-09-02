class Auto {
    constructor(marca, modelo, anio, precio, stock) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.stock = stock;
    }
    descontarStock() {
        this.stock = false
        console.table(this.Auto)
    };
}

let auto1 = new Auto('Chevrolet', 'Meriva', 2008, 5000, true)
let auto2 = new Auto('Toyota', 'Etios', 2017, 10000, false)
let auto3 = new Auto('Toyota', 'Yaris', 2020, 20000, true)
let auto4 = new Auto('Peugeot', '208', 2015, 15000, false)


const concesionaria = []

function agregarAuto(auto){
    concesionaria.push(auto)
    console.table(concesionaria)
}

agregarAuto(auto1)
agregarAuto(auto2)
agregarAuto(auto3)
agregarAuto(auto4)


let precioMenos = concesionaria.filter(auto => auto.precio <= 10000)
console.log(precioMenos)
