//Dentro de una clase tenemos dos tipos de ámbitos: ámbito de método y ámbito de clase:
//En primer lugar, veamos el ámbito dentro de un método. Si declaramos variables o funciones dentro de un método con var, let o const, 
//estos elementos existirán sólo en el método en cuestión. Además, no serán accesibles desde fuera del método:

class Clase{
    constructor(){
        const name = "Leandro";
        console.log("Constructor " + name);
    }
    metodo(){
        console.log("Método " + name);
    }
}

const c = new Clase();
c.name;             //Undefined
c.metodo();         //'Método: '


//Podemos observar que la variable "name" solo se muestra cuando se hace referencia a ella dentro del constructor() que es donde se creó y donde existe.


// === En segundo lugar
//  Tenemos el "ámbito de clase" en el que podemos crear propiedades precedidas por "this" (desde dentro del constructor) y significará que
//  estas propiedades tendrán alcance en toda la clase, tanto desde el constructor como desde otros métodos del mismo.
class Clase2{
    role = "Teacher";

    constructor(){
        this.name = "Leandro";
        console.log("Constructor " + this.name);
    }

    metodo(){
        console.log("Método " + this.name);
    }
}

const c2 = new Clase2();
c2.name;            // 'Leandro'
c2.metodo;          // 'Método Leandro'
c2.role;            // 'Teacher'

//Ojo, estas propiedades pueden ser modificadas desde fuera de la clase simplemente asignándole otro valor. Si quieres evitarlo, usa "#" antes
//del nombre de la propiedad al declararla.
