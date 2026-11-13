function Herramienta(nombre, durabilidad) {
    this.nombre = nombre;

    this.usar = function() {
        if (durabilidad === 0) {
            console.log(`No se puede usar ${this.nombre}: durabilidad agotada`);
        } else {
            durabilidad--;
            if ( durabilidad === 0) {
                console.log(`${this.nombre} se ha roto`);
            } else {
                console.log(`Has usado ${this.nombre}. Durabilidad ${durabilidad}/3`)
            }
        }
    }

    this.reparar = function(puntos) {
        if (puntos <= 0) {
            console.log("Cantidad no válida")
        } else if (durabilidad === 0) {
            console.log(`No se puede reparar ${this.nombre}. Durabilidad agotada`)
        } else {
            if (puntos >= 3) {
                durabilidad += 2;
            } else {
                durabilidad += puntos;
            }
            console.log(`Has reparado ${this.nombre}. Durabilidad ${durabilidad}/3`)
        }
    }
}

const pico = new Herramienta("Pico de hierro", 3);
pico.usar();
pico.usar();
pico.reparar(5);
pico.usar();
pico.usar();
pico.usar();
pico.usar();
pico.reparar(2);