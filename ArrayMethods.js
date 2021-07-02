const array = [1, 2, "asdf", true, { a: 5 }, 0, NaN, [0, 2, 4]];

// new: itera los elementos de un array y puedo realizar condiciones o funciones sobre cada uno de mis elementos.

// ejecuta una funcion por cada uno de mis elementos de mi array. forEach no retorna nada

console.log("---- forEach ----");
const arr = [];

array.forEach((element) => {
  if (typeof element === "number") {
    arr.push(element);
  }
});

console.log(arr);

// new: ejecuta una expresion a cada uno de mis elementos retornando un nuevo array con el resultado obtenido por elemento.

// devuelve un array que contiene el resultado de ejecutar una funcion sobre cada uno de mis elementos.

console.log("---- map ----");
const newarray = array.map((e) => {
  if (typeof e === "number") {
    return e;
  }
  return "1";
});

console.log(newarray);

// new: retorna una nuevo array con la condicion verdadera(true) sobre cada elemento.
// solamente te va a devolver un nuevo array con los elementos que cumplan la condicion

// forma un array que filtra los elementos del array original en base los valores true retornados por una condicion

console.log("---- filter ----");

// const result = array.filter((e) => typeof e === "number");
const result = array.filter((e) => {
  return typeof e !== "number";
});

console.log(result);

// new: retorna el primer valor que cumpla con la condicion.

console.log("---- find ----");

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
