// ============= MÉTODOS ESTÁTICOS ============= Se ejecutan directamente desde la clase, no desde la instancia

// Para utilizar estos métodos no nos hacen falta crear los objetos sino que se pueden ejecutar sobre la clase directamente.

class Animal{
    static despedirse(){
        return "Adios";
    }
    hablar(){
        return "Cuack";
    }
}

Animal.despedirse(); //Adios


// Aunque lo habitual es utilizar métodos normales (no estáticos) porque normalmente nos interesa crear varios objetos y guardar información
// diferente de cada uno de ellos y para eso tendríamos que instanciar un objeto.
// Una de sus limitaciones es que en su interior sólo podremos hacer referencia a elementos que sean estáticos. No podremos acceder a propiedades
// o métodos no estáticos, ya que necesitaríamos instanciar un objeto para hacerlo. 

// ==>  Estos métodos estáticos se suelen utilizar para crear funciones de apoyo que realicen tareas concretas o genéricas porque están relacionadas
//      con la clase en general.