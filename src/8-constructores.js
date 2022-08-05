// ============= CONSTRUCTOR ============= Método que se ejecuta automáticamente cuando se crea la instancia

// Se le llama constructor a un tipo especial de método de una clase, que se ejecuta automáticamente a la hora de hacer un 
// "new" de dicha clase. Una clase solo puede tener un constructor, y en el caso de que no se especifique un constructor a una clase
// tendrá uno vacío de forma implícita.

// Declaramos la clase
class Animal{
    //Método que se ejecuta al hacer un new
    constructor(){
        console.warn("Ha nacido un pato");
    }
    //Métodos
    hablar(){
        return "Cuack!";
    }
}

//Creación de la instancia u objeto
const pato = new Animal(); //'Ha nacido un pato'

//El constructor es un mecanismo muy interesante y utilizado para tareas de inicialización o que quieres realizar tras haber creado el nuevo objeto.
//Otros lenguajes de programación tienen concepto de "destructor" (el opuesto al constructor), sin embargo en javascript eso no existe.


// ====> ¡¡¡ Ojo !!! En un constructor NUNCA se puede utilizar un "return" puesto que al hacer un new se devuelve siempre el propio objeto creado.