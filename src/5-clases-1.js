//Clases en Javascript: Las clases son formas de organizar código de manera entendible con el objetivo de simplificar el
//funcionamiento del programa.


// Por ejemplo

//          --> Pato
// Animal
//          --> Lucas

// Por ejemplo, tenemos dos variables "Pato" y "Lucas", los dos son animales por lo que son objetos que están basados en la clase "Animal". Tanto
// "Pato" como "Lucas" tienen las características de un animal: Color, sonido que emiten, su nombre...




//          --> SEAT
// Vehículo
//          --> OPEL

// Se trata de dos coches que son vehículos puesto que están basados en la clase "Vehículo" y cada uno tendrá las características de un 
// vehículo: Color del vehículo, número de ruedas, marca, modelo...


//          --> Cuadrado
// Forma
//          --> C2

// Se trata de dos formas geométricas, que al igual que los ejemplos anteriores tendrán sus propias características, como por ejemplo
// el tamaño de sus lados. El elemento "cuadrado" puede tener un lado de 3cm y el elemento "c2" puede tener un lado de 6cm.



// Declaración de una clase 
class Animal{}

// Crear o instanciar una clase
const pato = new Animal();


// El objetivo de las clases es almacenar en ellas todo lo que tenga relación. Observamos que luego creamos una variable dodne hacemos 
// new Animal(), estamos creando una variable llamada "Pato" (un objeto) que es de tipo "Animal" y que contendrá todas las características que
// estén definidas dentro de la clase animal (de momento, vacía)


//Elementos de una clase: Se pueden dividir en PROPIEDADES y MÉTODOS


//1) PROPIEDADES            --> A grandes rasgos, variables dentro de las clases


//2) MÉTODOS                --> Función que existe dentro la clase puede ser pública o privada