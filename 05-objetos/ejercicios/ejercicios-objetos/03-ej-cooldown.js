function Mob(nombre, vida, ataques) {
    this.nombre = nombre;

    for (const ataque of ataques) {
        if (!("enfriamiento" in ataque)) {
            ataque.enfriamiento = 0;
        }
    }

    this.atacar = function(objetivo, indice) {
        if (vida <= 0) {
            console.log(`${nombre} no puede atacar: ha sido derrotado.`);
            return;
        } 

        const ataque = ataques[indice];

        if (ataque === undefined) {
            console.log(`${nombre} no tiene ese ataque.`);
            return;
        }

        if (ataque.enfriamiento > 0) {
            console.log(`${ataques[indice].nombre} aún no está listo (turnos restantes: ${ataques[indice].enfriamiento})`);
            return;
        }
        
            console.log(`${this.nombre} usa ${ataque.nombre}`)
            objetivo.recibirDaño(ataque.puntos);
            ataque.enfriamiento = ataque.recarga;
    };
    
    this.recibirDaño = function(puntos) {
        if (vida <= 0) {
            console.log (`${nombre} ya había sido derrotado.`);
            return
        } 

        vida -= puntos;
        if (vida < 0) {
            vida = 0;
        }
        console.log(`${nombre} ha recibido ${puntos} de daño. Vida: ${vida}`)

        if (vida === 0) {
            console.log(`${nombre} ha sido derrotado`)
        }
    };

    this.pasarTurno = function() {
        for (const ataque of ataques) {
            if (ataque.enfriamiento > 0) {
                ataque.enfriamiento--;
            }            
        }
    }
};

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