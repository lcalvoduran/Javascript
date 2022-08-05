// La palabra clave "this"
// Como te habrás fijado en ejemplos anteriores, hemos introducido la palabra clave this, que hace referencia al elemento padre que la contiene. 
//Así pues, si escribimos this.nombre dentro de un método, estaremos haciendo referencia a la propiedad nombre que existe dentro de ese objeto. 
//De la misma forma, si escribimos this.hablar() estaremos ejecutando el método hablar() de ese objeto.

class Animal{
    constructor(n="pato"){
        this.nobmre = n;
    }
    hablar(){
        return "cuack";
    }
    quienSoy(){
        return "Hola soy " + this.nobmre + ". " + this.hablar();
    }
}

const pato = new Animal("Donald");
pato.quienSoy();            // 'Hola soy Donald. cuack'


//Ten en cuenta que si usas this en contextos concretos, como por ejemplo fuera de una clase te devolverá el objeto Window, 
//que no es más que una referencia al objeto global de la pestaña actual donde nos encontramos y tenemos cargada la página web.