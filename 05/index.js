// constant or const

const PI = 3.14159;
var radius;
var circum;

// radius = window.prompt("Enter the radius of circle");
// radius = Number(radius);

document.getElementById("submit-button").onclick = function() {

    radius = document.getElementById("radius-input").value;
    radius = Number(radius);
    circum = 2 * PI * radius;
    document.getElementById("result").textContent = `Result: ${circum} cm`;
}