let objeto = { name: "Nicolas" };

function agregarId(obj) {
    obj.id = Math.random();
}

agregarId(objeto);
console.log(objeto)