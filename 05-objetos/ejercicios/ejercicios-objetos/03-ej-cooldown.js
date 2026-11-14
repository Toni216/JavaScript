function Mob(nombre, vida, ataques) {
    
    for (const ataque of ataques) {
        ataque.enfriamiento = 0;
    }

    this.atacar = function(objetivo, indice) {
        if (vida <= 0) {
            console.log(`${nombre} no puede atacar: ha sido derrotado.`)
        } else if (indice > ataques.length) {
            console.log(`${nombre} no tiene ese ataque.`)
        } else if (ataques[indice].enfriamiento > 0) {
            console.log(`${ataques[indice].nombre} aún no está listo (turnos restantes: ${ataques[indice].enfriamiento})`)
        } else {
            console.log(`${nombre} usa ${ataques[indice].nombre}`)
            objetivo.recibirDaño(ataques[indice].puntos);
            ataques[indice].enfriamiento = ataques[indice].recarga;
        }
    };
    
    this.recibirDaño = function(puntos) {
        if (vida <= 0) {
            console.log (`${nombre} ya había sido derrotado.`)
        } else {
            if (vida - puntos > 0) {
                vida = vida - puntos;
                console.log(`${nombre} ha recibido ${puntos} de daño. Vida: ${vida}`)
            } else {
                vida = 0;
                console.log(`${nombre} ha recibido ${puntos} de daño. Vida: ${vida}`)
                console.log(`${nombre} ha sido derrotado`)
            }
        }

    };

    this.pasarTurno = function() {
        for (const ataque of ataques) {
            ataque.enfriamiento--;
        }
    }
}

const zombi = new Mob("Zombi", 40, [
  { nombre: "Mordisco", puntos: 10, recarga: 2 },
  { nombre: "Embestida", puntos: 25, recarga: 3 }
]);
const esqueleto = new Mob("Esqueleto", 30, [
  { nombre: "Flecha", puntos: 8, recarga: 1 }
]);

zombi.atacar(esqueleto, 0);
zombi.atacar(esqueleto, 0);
zombi.pasarTurno();
zombi.atacar(esqueleto, 0);
zombi.pasarTurno();
zombi.atacar(esqueleto, 0);
esqueleto.atacar(zombi, 0);
zombi.atacar(esqueleto, 1);
esqueleto.atacar(zombi, 0);
zombi.atacar(esqueleto, 5);
zombi.pasarTurno();
zombi.pasarTurno();
zombi.atacar(esqueleto, 0);