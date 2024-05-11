// this

const person = {
    firstname: "Naphat",
    surname: "Promphakping",
    age: 26,
    isEmployed: true,

    // use this to access property inside the object
    sayHello: function() { console.log(`Hello home boy the name is ${this.firstname}`); },

    // however it will not work with arrow function and could cause error
    sayFuckyou: () => { console.log(`Fuck you cunt I'm ${this.age}`); }
}

// constructor

function PersonFunc(firstname, surname, age, isEmployed)
{
    this.firstname = firstname,
    this.surname = surname,
    this.age = age,
    this.isEmployed = isEmployed,
    this.sayHello = function() { console.log(`Hello home boy the name is ${this.firstname}`); }
}

const person2 = new PersonFunc("James", "Naphat", 758, false);
const person3 = new PersonFunc("Naphat", "Promphakping", 26, true);

console.log(person2.firstname);
console.log(person2.surname);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();

console.log(person3.firstname);
console.log(person3.surname);
console.log(person3.age);
console.log(person3.isEmployed);
person3.sayHello();

