// 2.1 
function camposVacios(mod) {
  return Object.keys(mod).filter(clave => mod[clave] === null || mod[clave] === "");
}


const mod1 = {
    nombre: "DGTF",
    loader: null,
    version: ""
}
console.log(camposVacios(mod1));

const mod2 = {
    nombre: "Sodium",
    loader: "fabric"
}
console.log(camposVacios(mod2));

const mod3 = {}
console.log(camposVacios(mod3));