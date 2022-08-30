

class Plato {
    constructor(nombre, precio, ingredientes) {
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        
    }
}

const producto1 = new Plato("Milanesa", 1500, 'ternera, pan rallado, huevo');
const producto2 = new Plato("papas fritas", 500, 'papas');
const producto3 = new Plato("pure", 500, 'papa, leche, manteca');
const producto4 = new Plato("sorrentinos", 1500, 'calabaza, mozarella');


let mesa1 = []
let mesa2 = []

function pedido(mesa, productos){
    let mesa
    mesa1.push(producto1, producto2, producto4)
}



console.log(mesa1)
console.table(mesa1)