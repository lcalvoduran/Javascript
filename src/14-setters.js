// SETTERS

// De la misma forma que tenemos un getter para obtener información mediante propiedades computadas, también podemos tener un setter, 
//que es el mismo concepto pero en lugar de obtener información, para establecer información.

//Si incluímos un getter y un setter a una propiedad en una clase, podremos modificarla directamente:
class Animal {
    constructor(n) {
      this.nombre = n;
    }
  
    get nombre() {
      return "Sr. " + this._nombre;
    }
  
    set nombre(n) {
      this._nombre = n.trim();
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
  pato.nombre = "   Lucas  "; // '   Lucas  '
  pato.nombre; // 'Sr. Lucas'


  // Observa que de la misma forma que con los getters, podemos realizar tareas sobre los parámetros del setter antes de guardarlos 
  // en la propiedad interna. Esto nos servirá para hacer modificaciones previas, como por ejemplo, en el ejemplo anterior, 
  // realizando un trim() para limpiar posibles espacios antes de guardar esa información.