const PaqueteUsuario = "AllAccess";

const accesoContenidoLibre = true;

const accesoContenidoFree = PaqueteUsuario !== "no registrado";
const accesoContenidoEUR = PaqueteUsuario === "EUR" || PaqueteUsuario === "AllAccess";
const accesoContenidoLATAM = PaqueteUsuario === "LATAM" || PaqueteUsuario === "AllAccess";
const accesoContenidoNacional = PaqueteUsuario === "LATAM"
    || PaqueteUsuario === "Nacional" 
    || PaqueteUsuario === "AllAccess";

console.log("Paquete del usuario: ", PaqueteUsuario);
console.log("¿Tiene acceso al paquete de contenido libre? ", accesoContenidoLibre);
console.log("¿Tiene acceso al paquete de contenido free? ", accesoContenidoFree);
console.log("¿Tiene acceso al paquete de contenido de Europa? ", accesoContenidoEUR);
console.log("¿Tiene acceso al paquete de contenido de LATAM? ",accesoContenidoLATAM);
console.log("¿Tiene acceso al paquete de contenido Nacional? ", accesoContenidoNacional);