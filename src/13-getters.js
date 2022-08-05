// GETTERS 


// 1) getter ¿qué es?
//Los getters son la forma de definir propiedades computadas de lectura en una clase. Veamos un ejemplo sobre el ejemplo anterior 
//de la clase Animal:

class Animal {
    constructor(n) {
      this._nombre = n;
    }
  
    get nombre() {
      return "Sr. " + this._nombre;
    }
  
    hablar() {
      return "Cuak";
    }
    quienSoy() {
      return "Hola, soy " + this.nombre;
    }
  }
  
  // Creación de objetos
  const pato = new Animal("Donald");
  
  pato.nombre; // 'Sr. Donald'
  pato.nombre = "Pancracio"; // 'Pancracio'
  pato.nombre; // 'Sr. Donald'