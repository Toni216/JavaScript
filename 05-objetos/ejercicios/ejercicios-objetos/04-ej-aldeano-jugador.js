function Aldeano(nombre, ofertas) {
    this.nombre = nombre;

    this.precioDe = function(indice) {
        if (!(ofertas[indice])) {
            return null;
        } else {
            return ofertas[indice].precio;
        }
    }

    this.nombreDe = function(indice) {
        return ofertas[indice].item;
    }

    this.vender = function(indice) {
        const nombre = this.nombreDe(indice);
        if (ofertas[indice].stock > 0) {
            ofertas[indice].stock--;
            return nombre;
        } else {
            return null;
        }
    }
}

const herrero = new Aldeano("Herrero", [
  { item: "Espada de hierro", precio: 5, stock: 1 },
  { item: "Pan", precio: 1, stock: 10 }
]);

function Jugador(nombre, esmeraldas) {
    this.nombre = nombre;
    this.esmeraldas = esmeraldas;
    const inventario = [];

    this.comprar = function(aldeano, indice){
        if (aldeano.precioDe(indice) === null) {
            console.log(`${aldeano.nombre} no tiene esa oferta`)
        } else if (esmeraldas < aldeano.precioDe(indice)) {
            console.log(`${nombre} no tiene suficientes esmeraldas (faltan ${aldeano.precioDe(indice) - esmeraldas})`)
        } else if (!(aldeano.vender(indice))) {
            console.log(`${aldeano.nombre} se ha quedado sin stock.`)
        } else {
            esmeraldas -= aldeano.precioDe(indice);
            console.log(`${nombre} compra ${aldeano.nombreDe(indice)} por ${aldeano.precioDe(indice)} esmeraldas`)
            inventario.push(aldeano.nombreDe(indice))
        }
    }

    this.mostrar = function() {
        console.log(`${nombre} tiene ${esmeraldas} esmeraldas`)
        for (const item of inventario) {
            console.log(`- ${item}`);
        }
    }
}

const toni = new Jugador("Toni", 8);
toni.comprar(herrero, 0);
toni.comprar(herrero, 0);
toni.comprar(herrero, 1);
toni.comprar(herrero, 1);
toni.comprar(herrero, 7);
toni.mostrar();

const ana = new Jugador("Ana", 20);
ana.comprar(herrero, 0);
ana.mostrar();

