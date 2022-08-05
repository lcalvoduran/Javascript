// ============= MÉTODO PRIVADO ============= Se puede ejecutar solo desde dentro de la clase

// Para ello hay que añadir el carácter "#"

class Animal{
    #miSecreto = "Me gusta la Coca-Cola";

    #decirSecreto(){
        return this.#miSecreto;
    }

    decirSacrilegio(){
        return this.#decirSecreto();
    }
}

const patitoFeo = new Animal();
patitoFeo.#decirSecreto();      //Error
patitoFeo.decirSacrilegio();    //OK


//Si los llamamos desde fuera obtendremos un error tipo... "Uncaught SyntaxError: Private field '#decirSecreto' must be declared in an enclosing class"

//Sin embargo, si se llama a un método público como decirSacrilegio() que a su vez llama a un método privado (pero desde dentro de la clase) 
//todo nos funcionará correctamente, ya que el método #decirSecreto() se está llamando dentro de la clase.