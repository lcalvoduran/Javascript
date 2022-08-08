//Las classfields es una sintaxis que nos permite añadir cualquier propiedad.
/**
class User{
    name = "Jhon";

    sayHi(){
        alert(`Hello, ${this.name}!`);
    }
}

new User().sayHi(); //Hello Jhon!

 **/


// Además, podemos añadir valores usando algunas expresiones más complejas y function calls

class User {
    name = prompt("Name, please?", "John");
  }
  
  let user = new User();
  alert(user.name); // John