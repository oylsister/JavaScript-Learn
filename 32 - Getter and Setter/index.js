class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth > 0)
            this._width = newWidth;

        else
            console.error("Must be positive number.")
    }

    get width() {
        return this._width.toFixed(1);
    }

    set height(newHeight) {
        if(newHeight > 0)
            this._height = newHeight;

        else
            console.error("Must be positive number.")
    }

    get height() {
        return this._height.toFixed(1);
    }

    get area() {
        return (this._height * this._width).toFixed(1);
    }
}

const rectangler = new Rectangle(20, 15);

console.log(rectangler.width);
console.log(rectangler.height);
console.log(rectangler.area);

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(name) {
        if(typeof name === "string" && name.length > 0)
            this._firstname = name;

        else 
            console.error("Must be a character and have at least 1 character");
    }

    set lastname(name) {
        if(typeof name === "string" && name.length > 0)
            this._lastname = name;

        else 
            console.error("Must be a character and have at least 1 character");
    }

    set age(newage) {
        if(typeof newage === "number" && newage > 0)
            this._age = newage;

        else 
            console.error("Must be a character and have at least 1 character");
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("Naphat", "Promphakping", 26);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);