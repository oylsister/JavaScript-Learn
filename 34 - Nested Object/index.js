const person = {
    firstname: "Naphat Promphakping",
    age: 26,
    isStudent: false,
    hobbies: ["gaming", "coding", "walking"],
    address: {
        street: "23/44",
        city: "Bangkok",
        country: "Thailand"
    }
}

console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);

for(var i = 0; i < person.hobbies.length; i++)
{
    console.log(person.hobbies[i]);
}

console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

// for loop access property.
for(const property in person.address)
{
    console.log(person.address[property]);
}

class Person {
    constructor(name, age, ...address)
    {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person2 = new Person("Derick", 43, "151/21", "New York", "U.S.A");
const person3 = new Person("Johny", 43, "23/45", "Michigan", "U.S.A");

for(const property in person2.address)
    {
        console.log(person2.address[property]);
    }