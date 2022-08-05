//Las clases siguen siendo estructuras para guardar información, pueden guardar variables con su correspondiente información
//Dicho concepto lo denominaremos "propiedades" y en Javascript se realiza en el interior del constructor, precedido por la palabra
//clave "this" (que hace referencia a "ESTE elemento", es decir, la clase)

class Animal{
    constructor(n ="pato"){
        this.nombre = n;
    }
    
    hablar(){
        return "Cuack";
    }

    quienSoy(){
        return "Hola soy " + this.nombre;
    }
}

// Creamos los objetos
const pato = new Animal();
pato.quienSoy();    // 'Hola soy pato'

const donald = new Animal();
donald.quienSoy();  // 'Hola soy Donald'

// Como se puede ver estas propiedades existen en la clase y se pueden establecer de forma que todos los objetos tengan el mismo valor, o que
// puedan tener valores diferentes dependiendo del tipo de objeto en cuestión, pasándole los valores específicos por parámetro.
// Observa que, las propiedades de la clase podrán ser modificadas externamente ya que por defecto son propiedades públicas.

const pato = new Animal("Donald");
pato.quienSoy();    // 'Hola soy Donald'

pato.nombre = "Paco";
pato.quienSoy();    // 'Hola soy Paco'