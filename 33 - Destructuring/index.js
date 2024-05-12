// Example 1

var a = 1;
var b = 2;

[a, b] = [b, a]; // swap value of variable

console.log(a);
console.log(b);

// Example 2
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

const [firstcolor, secondcolor, thirdcolor, ...extraColors] = colors;

console.log(colors);

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extraColors);

// Example 3
const person1 = {
    firstname: "Naphat",
    lastname: "Promphakping",
    age: 26
}

const person2 = {
    firstname: "Derick",
    lastname: "Rickman",
    age: 30
}

// if variable is not existed we can assign on {}.
//const {firstname, lastname, age=54} = person1;

//console.log(age);

function DisplayPerson({firstname, lastname, age}) {
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`Age: ${age}`);
}

DisplayPerson(person1);
