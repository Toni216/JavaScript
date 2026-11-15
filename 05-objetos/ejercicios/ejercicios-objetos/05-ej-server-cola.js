function Servidor(nombre, max) {
    this.nombre = nombre;
    const online = [];
    const cola = [];

    this.unirse = function(jugador) {
        if (online.indexOf(jugador) !== -1 || cola.indexOf(jugador) !== -1) {
            console.log(`${jugador} ya está dentro.`);
            return;
        } 
        if (online.length < max) {
            online.push(jugador);
            console.log(`${jugador} se ha unido.`)
        } else {
            cola.push(jugador);
            console.log(`Servidor lleno. ${jugador} en cola (posición ${cola.length})`)
        }
    }

    this.salir = function(jugador) {
        const indice = online.indexOf(jugador);
        if (indice !== -1) {
            online.splice(indice, 1)
            console.log(`${jugador} se ha salido.`)
            
            if (cola.length > 0) {
                const siguienteCola = cola.shift();
                online.push(siguienteCola);
                console.log(`${siguienteCola} entra desde la cola`)
            }
            return;
        } 
        const posCola = cola.indexOf(jugador);
        
        if (posCola !== -1) {
            cola.splice(posCola, 1)
            console.log(`${jugador} ha abandonado la cola`);
            return;
        }
        console.log(`${jugador} no está conectado`)
    };

    this.estado = function() {
        console.log(`${this.nombre}: ${online.length}/${max}, ${cola.length} en cola`)
    }

    this.listarOnline = function() {
        for (const jugador of online) {
            console.log(`- ${jugador}`)
        }
    }
}

const srv = new Servidor("CipolloLand", 2);
srv.unirse("Toni");
srv.unirse("Ana");
srv.unirse("Leo");
srv.unirse("Mar");
srv.unirse("Ana");
srv.estado();
srv.salir("Toni");
srv.salir("Mar");
srv.salir("Pepe");
srv.estado();
srv.listarOnline();