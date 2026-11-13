function Inventario(capacidad) {
    const items = [];

    function buscar(nombre) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].nombre === nombre) {
                return i;
            }
        }
        return -1;
    }

    this.añadirItem = function(nombre, cantidad) {
        if (cantidad <= 0) {
            console.log("Cantidad no válida")
        } else if (capacidad === items.length) {
            console.log(`Inventario lleno no cabe ${nombre}`);
        } else {
            if (buscar(nombre) === -1) {
                console.log(`Nuevo item: ${nombre} x${cantidad}`)
                items.push({nombre, cantidad})
            } else {
                items[buscar(nombre)].cantidad = items[buscar(nombre)].cantidad + cantidad;
                console.log(`+${cantidad} ${nombre}. Total: ${items[buscar(nombre)].cantidad}`)
            }  
        }
    }

    this.quitarItem = function(nombre, cantidad) {
        if (buscar(nombre) === -1) {
            console.log(`No tienes ${nombre}`);
        } else if (items[buscar(nombre)].cantidad < cantidad) {
            console.log(`Solo tienes ${items[buscar(nombre)].cantidad } de ${nombre}`)
        } else {
            items[buscar(nombre)].cantidad = items[buscar(nombre)].cantidad - cantidad;
            if (items[buscar(nombre)].cantidad === 0) {
                items.splice(buscar(nombre), 1);
                console.log(`${nombre} se ha agotado`);
            } else {
                console.log(`-${items[buscar(nombre)].cantidad} ${nombre}. Quedan: ${items[buscar(nombre)].cantidad}`);
            }

        }
    }

    this.contar = function(nombre) {
        if (buscar(nombre) === -1) {
            return 0;
        } else {
            return items[buscar(nombre)].cantidad
        }
    }

    this.listar = function() {
        for (const item of items) {
            console.log(`${item.nombre} x${item.cantidad}`);
        }
    }
}

const inv = new Inventario(3);
inv.añadirItem("Espada", 1);
inv.añadirItem("Antorcha", 16);
inv.añadirItem("Antorcha", 8);
inv.añadirItem("Pan", 5);
inv.añadirItem("Diamante", 2);
inv.quitarItem("Antorcha", 30);
inv.quitarItem("Pan", 5);
inv.añadirItem("Diamante", 2);
inv.quitarItem("Escudo", 1);
inv.añadirItem("Pan", 0);
console.log(inv.contar("Antorcha"));
console.log(inv.contar("Pan"));
inv.listar();