const mod = { nombre: "PrefixTag", beta: true, changelog: "...", icono: "icon.png", loader: "forge" };

if ("beta" in mod) {
    mod.beta = !mod.beta;
}

if ("changelog" in mod && "icon" in mod) {
    delete mod.changelog;
    delete mod.icono;
}

if (!("licencia" in mod)) {
    mod.licencia = null;
}

console.log(mod);
