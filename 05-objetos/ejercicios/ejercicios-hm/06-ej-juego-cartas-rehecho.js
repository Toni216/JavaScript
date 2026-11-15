function Carta(nombre, vida, tipo, ataques, debilidades) {
    this.nombre = nombre;
    this.vida = vida;
    this.tipo = tipo;
    this.ataques = ataques;
    this.debilidades = debilidades;
    this.energía = 0;

    this.atacar = function(objetivo, indice) {
        let ind = indice;
        if (ataques[indice]) {
            if (this.energía < ataques[indice].energía) {
                console.log(`${this.nombre} no tiene suficiente energía para usar ${ataques[indice].nombre}`)
                return;
            } else {
                console.log(`${this.nombre} ataca con ${ataques[indice].nombre} causando ${ataques[indice].daño} de daño`)
                this.recibirAtaque(objetivo, ind)
                this.energía -= ataques[indice].energía;
            }
        }
    }

    this.recibirAtaque = function(objetivo, ind) {
        if (objetivo.vida <= 0) {
            console.log(`${objetivo.nombre} ya no tiene vida, no se puede ejecutar este ataque.`);
            return;
        }
        objetivo.vida -= ataques[ind].daño;
        console.log(`${objetivo.nombre} ha recibido ${ataques[ind].daño} de daño. Vida restante: ${objetivo.vida}`)
        if (objetivo.vida <= 0) {
            console.log(`${objetivo.nombre} ha sido derrotada.`)
            return;
        } 
    }

    this.añadirEnergia = function(cantidad) {
        this.energía += cantidad;
        console.log("");
        console.log(`${this.nombre} ha ganado ${cantidad} de energía. Energía actual: ${this.energía}`)
    }
}

const carta1 = new Carta("Dragón de fuego", 100, "Fuego", [
    {nombre: "Llamarada", daño: 30, energía: 2},
    {nombre: "Golpe ígneo", daño: 50, energía: 3},
], ["agua"]);

const carta2 = new Carta("Serpiente Acuática", 120, "Agua", [
    {nombre: "Tsunami", daño: 40, energía: 2}
], ["eléctrico"]);

carta1.añadirEnergia(2);
carta1.atacar(carta2, 0);
carta2.añadirEnergia(3);
carta2.atacar(carta1, 0);
carta1.atacar(carta2, 1);
carta1.añadirEnergia(3);
carta1.atacar(carta2, 1)
carta1.añadirEnergia(3);
carta1.atacar(carta2, 1);
carta1.añadirEnergia(2);
carta1.atacar(carta2, 0);

