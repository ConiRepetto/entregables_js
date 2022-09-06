

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

function pedido(mesa){
    let mesa = parseInt(prompt('Ingresa numero de mesa:'))
    let productos = []
    while (productos != 'listo'){
        productos = productos.push(prompt('Ingresa un plato:'))
    }
    function mesaElegida(){
        switch(mesa){
            case 1:
                return mesa1.push(productos)
                console.table(mesa1)
            case 2:
                return mesa2.push(productos)
                console.table(mesa2)
            case 3:
                return mesa3.push(productos)
                console.table(mesa3)
        }
    }  
    console.log(mesaElegida())
}
//AFTER 2/09 > 20:12 QUE PONER EN EL PROYECTO FINAL