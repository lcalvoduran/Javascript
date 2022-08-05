//JSON es un formato ligero de datos con una notación (estructura) específica.

const Objeto = {
    name: "Leandro",
    edad: 26
};

// Para trabajar con ellos tenemos una serie de métodos

// 1) JSON.parse(str)           --> Convierte el texto str (un JSON válido) a un objeto y lo devuelve


// 2) JSON.stringify(obj)       --> Convierte un objeto Javascript (Objeto en este caso) a su representación JSON y la devuelve



// ===========> Convirtiendo JSON a Objeto: Se le suele denominar parsear, lo que hace es que analiza un string que contiene un JSON y devuelve un 
//                                          objeto Javascript con dicha información correctamente estructurada. Para ello utilizaremos el parse.

const str = '{"name": "Leandro","age": 26}';
const obj = JSON.parse(str);
console.log(obj.name);
console.log(obj.age);

// ===========> Convirtiendo Objeto a JSON: Ahora lo haremos a la inversa pero usaremos el stringify

const obje = {
    "name": "Leandro",
    "age": 26,
    saludar: function(){
        return "Hello World!";
    }
};

const stre = JSON.stringify(obje);
console.log(stre);