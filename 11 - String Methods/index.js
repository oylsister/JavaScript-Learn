var username = "  Oylsister";

var firstString = username.charAt(8);

console.log(username);
console.log(firstString);

var indexString = username.lastIndexOf('s');
console.log(indexString);

console.log(username.length);

var trim = username.trim();
console.log(trim);

console.log(trim.toUpperCase());
console.log(trim.toLowerCase());
console.log(trim.repeat(4));

// check if char start with whatever
var result = trim.startsWith("O");
var resultd = trim.endsWith("R");
console.log(result);
console.log(resultd);

// random phone number
var number = "085-651-9502";
console.log(number);

number = number.replaceAll("-", "");
console.log(number);