// R1 
const descargasCurseforge = 12500;
const descargasModrinth = 12500;
const descargasModrinthTexto = "12500";

console.log(descargasModrinth > descargasCurseforge);
console.log(descargasModrinth === descargasCurseforge);
console.log(descargasModrinthTexto === descargasCurseforge);
console.log(Number(descargasModrinthTexto) === descargasCurseforge);

// R2
function puedeBan(jugador) {
    return jugador === "MODERADOR" ? true : false
    || jugador === "OWNER" ? true : false
    || jugador === "ADMIN" ? true : false;
}

function puedeApagarServer(jugador) {
    return jugador === "ADMIN" ? true : false
    || jugador === "OWNER" ? true : false;
}

const jugador1 = "moderador";
const jugador2 = "jugador";
const jugador3 = "Admin";
console.log("Jugador 1: /ban -> ", puedeBan(jugador1.toUpperCase()), "/stop -> ", puedeApagarServer(jugador1.toUpperCase()));
console.log("Jugador 1: /ban -> ", puedeBan(jugador2.toUpperCase()), "/stop -> ", puedeApagarServer(jugador2.toUpperCase()));
console.log("Jugador 1: /ban -> ", puedeBan(jugador3.toUpperCase()), "/stop -> ", puedeApagarServer(jugador3.toUpperCase()));

// R3
const mods = 50;
const menos50 = mods < 50;
const desdeCincuentaHasta150 = mods >= 50 && mods < 150;
const desde150Hasta250 = mods >= 150 && mods <= 250;
const mas250 = mods > 250;

console.log("Mods: ", mods);
console.log("¿4 GB?: ", menos50);
console.log("¿6 GB?: ", desdeCincuentaHasta150);
console.log("¿8 GB?: ", desde150Hasta250);
console.log("¿No soportado?: ", mas250);

const ramRecomendada = mods < 50 ? "4 GB" 
: mods >= 50 && mods < 150 ? "6 GB"
: mods >= 150 && mods <= 250 ? "8 GB"
: "No soportado";

console.log(ramRecomendada);

// R4
const jugadorUno = { whitelist: true, op: false, baneado: false, version: "1.20.1", }
const jugadorDos = { whitelist: false, op: true, baneado: false, version: "1.20.1", }
const jugadorTres = { whitelist: true, op: false, baneado: true, version: "1.20.1", }
const jugadorCuatro = { whitelist: true, op: false, baneado: false, version: "1.19.2", }

function puedeEntrar(jugador, servidor) {
    
    return (jugador.whitelist || jugador.op) && !jugador.baneado && servidor === jugador.version;
}

console.log(puedeEntrar(jugadorUno, "1.20.1"));
console.log(puedeEntrar(jugadorDos, "1.20.1"));
console.log(puedeEntrar(jugadorTres, "1.20.1"));
console.log(puedeEntrar(jugadorCuatro, "1.20.1"));

/* 
 trampa de precedencia:
 en principio ahora debería mirar que jugador.op y !jugador.baneado sean ambos true (?)
 luego ese resultado con servidor === jugador.version
 luego jugador.whitelist con el resultado

 Imagino que seria jugadorUno -> j.w || false && servidor === j.v -> j.w || false -> true porque j.v es true xd
 jugadorDos -> j.w || true && true -> pasa todo a true
 jugadorTres -> j.w || false && true -> j.w || false -> true 
 jugadorCuatro -> j.w || false && true && false -> j.w || false && false -> j.w || false -> true

 Todo da true
*/

// R5
function cargaMod(mod, dependenciasInstaladas) {
    versionServidor = "Forge"
    return mod.loader.toUpperCase() === versionServidor.toUpperCase() && mod.version === "1.20.1" && dependenciasInstaladas;
}

const Prefix = {
    loader: "forge",
    version: "1.20.1"
}

console.log("¿Se puede cargar? ", cargaMod(Prefix, false));
console.log("¿Mostrar aviso? ", !cargaMod(Prefix, false));

//R6 
const maxJugadores = 20;
function estadoServidor(jugadoresOnline) {
    const porcentaje = jugadoresOnline * 100 / maxJugadores;
    return porcentaje === 100 ? "Lleno " + "(" + porcentaje + "%)"
    : porcentaje >= 80 && porcentaje < 100 ? "Casi lleno " + "(" + porcentaje + "%)"
    : "Disponible " + "(" + porcentaje + "%)"
}

console.log("Estado: ", estadoServidor(18));
console.log("Estado: ", estadoServidor(20));
console.log("Estado: ", estadoServidor(5));

// R7
// Backups
const horasBackup = [ 0, 6, 12, 18 ]
function tocaBackup(hora)  {
    return horasBackup[0] === hora 
    || horasBackup[1] === hora 
    || horasBackup[2] === hora 
    || horasBackup[3] === hora ? "Si" : "No"
}

console.log("¿Toca backup a las 12? ", tocaBackup(12));
console.log("¿Toca backup a las 15? ", tocaBackup(15));

// Evento equipos
const jugadores = 23;
const jugadoresXEquipo = 4;

console.log("Jugadores sin equipo: ",jugadores % jugadoresXEquipo);
// Porque % es el mejor, da el resto que es lo que buscamos, si lo dividimos da un numero con decimales que nada que ver.


// PARTE B
// R8
console.log(24 % 6);   // R8.1 - 0 V
console.log(25 % 6);   // R8.2 - 1 V
console.log(6 % 25);   // R8.3 - -10 X -> 6 
console.log(0 % 5);    // R8.4 - Infinite X -> 0
console.log(-9 % 4);   // R8.5 - -5 X -> -1
console.log(9 % -4);   // R8.6 (¿de quién se copia el signo?) 5 X -> 1

// R9 
let nivel = 1; 
const x = nivel++; // para el momento de terminar la línea ya vale 2
const y = nivel++ + ++nivel; // 2 (que se suma luego ++) + 3 = 5
console.log(x, y, nivel);   // R9.1 (haz la tabla de pasos en un comentario) 2 5 4 X -> 1 6 4

let vidas = 3;
vidas--;
console.log(--vidas);       // R9.2 - 1 V

// R10
const jugador = { nombre: "Toni216", apodo: "", esOp: false };

const nombreMostrado = jugador.apodo || jugador.nombre || "Anónimo";
console.log(nombreMostrado);           // R10.1 - "Toni216" V

const prefijo = jugador.esOp && "[OP] ";
console.log(prefijo + jugador.nombre); // R10.2 (bug clásico: ¿qué sale y por qué?) - undefined Toni216 X falseToni216, tiene sentido xd

const prefijoBien = jugador.esOp ? "[OP] " : "";
console.log(prefijoBien + jugador.nombre); // R10.3 - Toni216 V
// Porque en el 10.2 está pidiendo que se cumpla si o si ambas condiciones y cuando no se cumple pues el resultado del primero es false
// En ternario estás dando una opción por si no tiene op

// R11
const config = {
    pvp: false,
    mensajeBienvenida: "jelou"
}
const jugadorR11 = {
    apodo: "",
    nombre: "sic seben"
}
// se que los nombres de las funciones no son los mejores
// 1. `config.volumen` va de 0 a 100. Si no viene, usar `50`. (Volumen 0 = silenciado a propósito.)
function primero(vol) {
    return vol.volumen ?? 50; // el mas logico ns
}
console.log(primero(config))

// 2. `jugador.apodo`. Si está vacío (`""`) o no existe, usar `jugador.nombre`.
function segundo(ap) {
    return ap.apodo || ap.nombre; // porque sino sale vacio con ??
}
console.log(segundo(jugadorR11));

// 3. `config.pvp` es un booleano. Si no viene, usar `true`. 
// (Pista: ¿qué pasaría con `pvp: false` usando `||`?) - usando || usaria el ultimo siempre ya que devuelve false 
function tercero(pvp) {
    return pvp.pvp ?? true;
}
console.log(tercero(config));

// 4. `config.mensajeBienvenida`. Si el admin lo ha dejado en `""`, es porque no quiere mensaje. 
// Si no viene, usar `"¡Bienvenido!"`.
function cuarto(mensaje) {
    return mensaje.mensajeBienvenida ?? "¡Bienvenido!";
}
console.log(cuarto(config));


// R12
// R12.1
function porcentajeOcupacion(online, max) {
  resultado = online * 100 / max;
  console.log(resultado);
}
// No parece haber ningun bug, pero supongo que es preferible poner return online * 100 / max y poner el console.log fuera tipo
// console.log(porcentajeOcupacion(5,20));

// R12.2
function estaLleno(online, max) {
  return online === max;
}
console.log(estaLleno(5, 20));
// aqui estaba cambiando lo que valia online, se arregla poniendo ===

// R12.3
function volumenFinal(config) {
  return config.volumen ?? 50;
}
console.log(volumenFinal({ volumen: 0 })); // debería dar 0
// aqui cambiamos a ?? porque sino elige el ultimo porq 0 es falsy

// R12.4
function puedeEntrar(jugador) {
  return (jugador.whitelist || jugador.op) && !jugador.baneado;
}
console.log(puedeEntrar({ whitelist: true, op: false, baneado: true })); // debería dar false
// metemos a jugador.whitelist y jugador.op entre parentesis para que primero se compare entre ellos y ya luego con el otro resultado.

// PARTE C 
// 13.1
function puedeBanear(rango) {
    return rango === "MODERADOR"
    || rango === "ADMIN"
    || rango === "OWNER" ? true : false;
}
function puedeParar(rango) {
    return rango === "ADMIN"
    || rango === "OWNER"  ? true : false;
}

jugadorM = "MODERADOR"
jugadorA = "ADMIN"
jugadorO = "OWNER"
console.log(puedeBanear(jugadorM));
console.log(puedeBanear(jugadorA));
console.log(puedeBanear(jugadorO));
console.log(puedeParar(jugadorM));
console.log(puedeParar(jugadorA));
console.log(puedeParar(jugadorO));

// 13.2
// Creo que no haré este ni los que quedan, hice funciones en todos

// Entiendo que la ventaja es que repites menos código 