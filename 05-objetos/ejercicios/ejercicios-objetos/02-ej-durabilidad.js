function Herramienta(nombre, durabilidad) {
    this.nombre = nombre;
    let durabilidad = durabilidadMax;

    this.usar = function() {
        if (durabilidad === 0) {
            console.log(`No se puede usar ${this.nombre}: durabilidad agotada`);
            return;
        } 
        durabilidad--;
        if (durabilidad === 0) {
            console.log(`${this.nombre} se ha roto`);
        } else {
            console.log(`Has usado ${this.nombre}. Durabilidad ${durabilidad}/3`)
        }
    };

    this.reparar = function(puntos) {
        if (puntos <= 0) {
            console.log("Cantidad no válida")
            return;
        } 
        
        if (durabilidad === 0) {
            console.log(`No se puede reparar ${this.nombre}. Durabilidad agotada`);
            return;
        } 
        
        durabilidad += puntos;
        if (durabilidad > durabilidadMax) {
            durabilidad = durabilidadMax;
        }
        console.log(`Has reparado ${this.nombre}. Durabilidad ${durabilidad}/3`)
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