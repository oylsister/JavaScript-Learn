// First Section

console.log("Hello");
console.log("This is a console lol.");

document.getElementById("header-01").textContent = "Hello Text";
document.getElementById("para-01").textContent = "This message is made from javascript.";

// This is a comment.
//window.alert("This is a alert");

// second section

var x = 100;
var y = 12;

console.log(x + y);

var age = 25;
var price = 10.99;
var gpa = 2.92;
var firstName = "Naphat";
var single = true;

console.log(`Your name is ${firstName}.`);
console.log(`Single: ${single}`);
console.log(`You are ${age} years old.`);
console.log(`Price is ${price} dollars.`);
console.log(`Your GPA is ${gpa}.`);
console.log(`Name is ${typeof firstName} | Single is ${typeof single} | Age is ${typeof age} | Price is ${typeof price} | GPA is ${typeof gpa}`);

var fullName = "Napaht Promphakping";
var isStudent = false;

document.getElementById(`full-name`).textContent = `Your name is ${fullName}`;
document.getElementById(`age`).textContent = `Age: ${age}`;
document.getElementById(`student`).textContent = `Enrolled: ${isStudent}`;