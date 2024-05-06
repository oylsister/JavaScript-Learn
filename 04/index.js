// type conversion

/*
var age = window.prompt("How old are you?");

// without conversion it will print 251 because prompt is string;

age = Number(age);
age += 1;

console.log(age);
*/

var x = "";
var y = "";
var z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

// 0 for boolean from string it will return true so empty it will be false.
// if there is no initial value number will be NaN instead of 0.

console.log(x , typeof x);
console.log(y , typeof y);
console.log(z , typeof z);