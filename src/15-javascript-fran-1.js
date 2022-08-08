class User{
    //class methods
    constructor(name){
        this.name = name;
    }
    sayHi(){
        alert(this.name);
    }
}

let user = new User("Jhon");
user.sayHi();