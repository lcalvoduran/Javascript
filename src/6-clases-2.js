//Declaración de una clase
class Animal(){
    //Métodos
    hablar(){
        return "Cuack";
    }
}

//Creamos la instancia u objeto
const pato = new Animal();
pato.hablar(); //'Cuack'

const donald = new Animal();
donald.hablar(); //'Cuack'

// Si observamos el método hablar se encuentra dentro de la clase Animal, existen las variables "Pato" y "Donald" porque realmente son de tipo animal.
// Al igual que las funciones se le pueden pasar parámetros para trabajar con ellos.


// ============= MÉTODOS ESTÁTICOS ============= Se ejecutan directamente desde la clase, no desde la instancia
// ============= MÉTODO PÚBLICO ============= Se pueden ejecutar desde dentro y fuera de la clase
// ============= MÉTODO PRIVADO ============= Se puede ejecutar solo desde dentro de la clase
// ============= CONSTRUCTOR ============= Método que se ejecuta automáticamente cuando se crea la instancia


