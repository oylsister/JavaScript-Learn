var username = window.prompt("Enter your username: ");

// No method chaining

username01 = username.trim();
var letter = username01.charAt(0);
letter = letter.toUpperCase();

var extraChars = username01.slice(1);
extraChars = extraChars.toLowerCase();

username01 = letter + extraChars;

console.log(username01);

// method
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(); 
console.log(username);