
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




// =========================================================== Transformations

//Map
const arr1 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr1.map((e) => e.length);
console.log(nuevoArr); // Devuelve [3, 5, 5, 9, 9];

//Filter

const arr2 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr2.filter((e) => e[0] == "P");

nuevoArr; // Devuelve ['Pablo', 'Pedro', 'Pancracio'];

//find

const arr3 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

arr3.find((e) => e.length == 5); // 'Pablo'      --> El find devuelve el elemento
arr3.findIndex((e) => e.length == 5); // 1       --> El findIndex devuelve su posición en el array original

//reduce

const reduce = [95, 5, 25, 10, 25];
reduce.reduce((p, e) => {                      //   --> El reduce se encarga de recorrer todos los elementos del array e ir acumulando valores (o alguna operación)
    console.log(`P=${p} e=${e}`);              //       y sumarlo todo, para devolver el resultado final.
    return p + e;
  });

// P=95 e=5     (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// P=100 e=25   (2ª iteración: 100 + elemento 3: 25) = 125
// P=125 e=10   (3ª iteración: 125 + elemento 4: 10) = 135
// P=135 e=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160

const reduce1 = [95, 5, 25, 10, 25];
reduce1.reduce((p, e) => p - e); // 95 - 5 - 25 - 10 - 25. Devuelve 30  --> Acumulador de elementos de izquierda a derecha
reduce1.reduceRight((p, e) => p - e); // 25 - 10 - 25 - 5 - 95. Devuelve -110 --> Acumulador de elementos de derecha a izquierda

**/

// =========================================================== Transformations