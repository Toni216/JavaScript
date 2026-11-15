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
            return;
        }
        const i = buscar(nombre);

        if (i !== -1) {
            items[i].cantidad += cantidad;
            console.log(`+${cantidad} ${nombre}. Total: ${items[i].cantidad}`)
            return;
        } 
        if (items.length >= capacidad) {
            console.log(`Inventario lleno, no cabe ${nombre}`)
            return;
        }

        items.push({ nombre, cantidad })
        console.log(`Nuevo item: ${nombre} x${cantidad}`)
    };

    this.quitarItem = function(nombre, cantidad) {
        const i = buscar(nombre);

        if (i === -1) {
            console.log(`No tienes ${nombre}`);
            return;
        }

        if (cantidad > items[i].cantidad) {
            console.log(`Solo tienes ${items[i].cantidad} de ${nombre}`);
            return;
        }

        items[i].cantidad -= cantidad;

        if (items[i].cantidad === 0) {
            items.splice(i, 1);
            console.log(`${nombre} se ha agotado`);
        } else {
            console.log(`-${cantidad} ${nombre}. Quedan: ${items[i].cantidad}`);
        }
    }

    this.contar = function(nombre) {
        const i = buscar(nombre);
        if (i === -1) {
            return 0;
        }
        return items[i].cantidad;
    };

    this.listar = function () {
        for (const item of items) {
            console.log(`${item.nombre} x${item.cantidad}`);
        }
    };
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