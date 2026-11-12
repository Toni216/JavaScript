function mod(nombre, version, loader, descargas) {
    this.nombre = nombre;
    this.version = version;
    this.loader = loader;
    this.descargas = descargas;

    this.mostrarInfo = function() {
        console.log( `${this.nombre} tiene la version ${this.version} de ${this.loader} y tiene ${this.descargas}`)
    }
    this.registrarDescargas = function(n) {
        if (n <= 0 || n > 1000) {
            console.log("No se permiten dichos valores");
        } else if (n > 0) {
            this.descargas += n;
        } 
    }
}

const prefix = new mod("Prefix", "1.20.1", "Forge", 0);
prefix.registrarDescargas(100);
const dgtf = new mod("DGTF", "1.20.1", "Forge", 0);
dgtf.registrarDescargas(50);
const areas = new mod("Areas", "1.20.1", "Forge", 0);
areas.registrarDescargas(130);


function Modpack(nombre) {
    this.nombre = nombre;
    const lista = [];

    function buscarIndice(nombreMod) {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].nombre === nombreMod) {
                return i;
            }
        }
        return -1;
    }

    this.añadirMod = function(mod) {
        if (buscarIndice(mod.nombre) !== -1) {
            console.log(`${mod.nombre} ya está en el modpack`);
            return
        }
        lista.push(mod);
    }

    this.quitarMod = function(mod) {
        const i = buscarIndice(mod);
            if (i === -i) {
                console.log(`${mod} no está en el modpack`);
                return;
            }
            lista.splice(i, 1);
        };

    this.listar = function() {
        for (const mod of lista) {
            console.log(mod.nombre);
        }
    }
    
    this.totalDescargas = function() {
        let total = 0;
        for (const mod of lista) {
            total += mod.descargas;
        }
        return total;
    }
};

// console.log(prefix);


const modpack1 = new Modpack("cipollo");

modpack1.añadirMod(prefix);
modpack1.añadirMod(prefix);
modpack1.añadirMod(dgtf);
modpack1.añadirMod(areas)
modpack1.listar();
prefix.mostrarInfo();
areas.mostrarInfo();
dgtf.mostrarInfo();
console.log(modpack1.totalDescargas());