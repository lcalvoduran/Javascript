class Button{
    constructor(value){
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}

let button = new Button("Hello");
setTimeout(button.click, 1000);