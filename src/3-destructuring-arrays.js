// Viene de "separar" una estructura
/**
const elements = [5, 2];
const [first, last] = elements;    // first = 5, last = 2

const elements2 = [5, 4, 3, 2];
const [first, second] = elements2;  // first = 5, second = 4, rest = discard

const elements3 = [5, 4, 3, 2];
const [first, , third] = elements3; // first = 5, third = 3, rest = discard

const elements4 = [4];
const [first, second] = elements4;  // first = 4, second = undefined


let a = 10;
let b = 5;

[a, b] = [b, a];



// ================== SPREAD (Expandir): Una función que recibe un parámetro

const debug = (param) => console.log(...param);
const array = [1, 2, 3, 4, 5];
debug(array);

// 1 2 3 4 5


// ================== REST (Agrupar): Agrupará las 5 variables en un array

const debug2 = (...param) => console.log(param);
debug2(1, 2, 3, 4, 5);

// [1, 2, 3, 4, 5]


**/

// ... Ejemplo de reestructuración de arrays

const pair = [3, 4];
console.log("Nuestro pair: " + pair);
const complete = [1, 2, ...pair, 5];  // [1, 2, 3, 4, 5]        --> Usando destructuración + spread
const complete2 = [1,2, pair, 5];    // [1, 2, [3, 4], 5]       --> Sin usar desestructuración