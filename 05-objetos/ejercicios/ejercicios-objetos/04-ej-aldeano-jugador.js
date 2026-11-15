function Aldeano(nombre, ofertas) {
    this.nombre = nombre;

    this.precioDe = function(indice) {
        const oferta = ofertas[indice];
        if (oferta === undefined) {
            return null;
        }
        return oferta.precio;
    }

    this.vender = function (indice) {
        const oferta = ofertas[indice];
        if (oferta === undefined || oferta.stock <= 0) {
            return null;
        }
        oferta.stock--;
        return oferta.item;
    };
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
        const precio = aldeano.precioDe(indice);

        if (precio === null) {
            console.log(`${aldeano.nombre} no tiene esa oferta`);
            return;
        }

        if (this.esmeraldas < precio) {
            console.log(`${this.nombre} no tiene suficientes esmeraldas (faltan ${precio - this.esmeraldas})`);
            return;
        }
        const item = aldeano.vender(indice);

        if (item === null) {
            console.log(`${aldeano.nombre} se ha quedado sin stock`);
            return;
        }
        this.esmeraldas -= precio;
        inventario.push(item);
        console.log(`${this.nombre} compra ${item} por ${precio} esmeralda(s)`);
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

