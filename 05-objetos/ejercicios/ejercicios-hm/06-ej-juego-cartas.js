function Carta(nombre, vida, tipo, ataques, debilidades) {
    this.nombre = nombre;
    this.vida = vida;
    this.tipo = tipo;
    this.ataques = ataques; 
    this.debilidades = debilidades;
    this.energia = 0;

    this.atacar = function(objetivo, ataqueIndex) {
      if (ataqueIndex >= this.ataques.length) {
        console.log(`${this.nombre} no tiene ese ataque.`);
        return;
      }

      let ataque = this.ataques[ataqueIndex];
      if (this.energia >= ataque.energiaNecesaria) {
        console.log(`${this.nombre} ataca con ${ataque.nombre} causando ${ataque.puntos} de daño.`)
        objetivo.recibirAtaque(ataque.puntos);
        this.energia -= ataque.energiaNecesaria;
      } else {
        console.log(`${this.nombre} no tiene suficiente energía para atacar.`);
      }
    };

    this.recibirAtaque = function(daño) {
      if (this.vida <= 0) {
        return console.log("Ya no se puede recibir el ataque")
      } 
        this.vida -= daño;
        console.log(`... ha recibido ${daño}, vida restante: ${this.vida}`);
        if (this.vida <= 0) {
          console.log(`${this.nombre} ha sido derrotada.`);
        }
    }

    this.añadirEnergia = function(energia) {
      this.energia += energia;
      console.log(`{this.nombre} ha ganado ${energia} de energía. Energía actual: ${this.energia}`);
    }
}




const carta1 = new Carta("Dragón de Fuego", 100, "Fuego", [
  { nombre: "Llamarada", puntos: 30, energiaNecesaria: 2 },
  { nombre: "Golpe ígneo", puntos: 50, energiaNecesaria: 3 }
], ["Agua"])

const carta2 = new Carta("Serpiente acuática", 120, "Agua", [
  { nombre: "Tsunami", puntos: 40, energiaNecesaria: 2 }
], ["Eléctrico"])

carta1.añadirEnergia(2);
carta1.atacar(carta2, 0);
carta2.añadirEnergia(3);
carta2.atacar(1, 0);
carta1.atacar(2, 1);
añadirEnergia(3)