// objects similar to json file

const person = {
    firstname: "Naphat",
    surname: "Promphakping",
    age: 26,
    isEmployed: true,
    sayHello: function() { console.log("Hello home boy"); },
    sayFuckyou: () => { console.log("Fuck you cunt"); }
}

console.log(person.firstname);
console.log(person.surname);
console.log(person.age);
console.log(person.isEmployed);

person.sayHello();
person.sayFuckyou();
