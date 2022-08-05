
// =========================================================== forEach


/**
const arr = ["a", "b", "c", "d", "e"];





// Funciones por expresión 

const f = function() {
    console.log("Un momentito porfavo");
}
arr.forEach(f);


// Funciones anónimas 

arr.forEach(function (){
    console.log("Un momentito miarma");
});

/ Funciones arrow 

arr.forEach(() => console.log("Un momentito arrow function"));


**/

// =========================================================== Transformations

//Map
const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr.map((e) => e.length);
console.log(nuevoArr); // Devuelve [3, 5, 5, 9, 9];

//Filter

const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr.filter((e) => e[0] == "P");

nuevoArr; // Devuelve ['Pablo', 'Pedro', 'Pancracio'];

//find

const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

arr.find((e) => e.length == 5); // 'Pablo'      --> El find devuelve el elemento
arr.findIndex((e) => e.length == 5); // 1       --> El findIndex devuelve su posición en el array original