function Mod(nombre, version, loader, descargas) { // funcion constructora con la primera en mayusculas por convencion
    this.nombre = nombre;
    this.version = version;
    this.loader = loader;
    this.descargas = descargas;

    this.mostrarInfo = function() {
        console.log( `${this.nombre} tiene la version ${this.version} de ${this.loader} y tiene ${this.descargas}`)
    }
    this.registrarDescarga = function() {
        this.descargas++;
    }
}

const prefix = new mod("Prefix", "1.20.1", "Forge", 0);
const dgtf = new mod("DGTF", "1.20.1", "Forge", 0);
const areas = new mod("Areas", "1.20.1", "Forge", 0);

prefix.mostrarInfo();
for (let i = 0; i < 4; i++) {
    prefix.registrarDescarga();
}
prefix.mostrarInfo();

areas.mostrarInfo();
for (let i = 0; i < 4; i++) {
    areas.registrarDescarga();
}
areas.mostrarInfo();