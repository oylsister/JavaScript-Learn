const generateButton = document.getElementById("generate-button");
const Label01 = document.getElementById("label01");
const Label02 = document.getElementById("label02");
const Label03 = document.getElementById("label03");

const min = 1;
const max = 6;

var randomnumber1;
var randomnumber2;
var randomnumber3;

generateButton.onclick = function() {
    randomnumber1 = Math.floor(Math.random() * max) + min;
    randomnumber2 = Math.floor(Math.random() * max) + min;
    randomnumber3 = Math.floor(Math.random() * max) + min;

    Label01.textContent = randomnumber1;
    Label02.textContent = randomnumber2;
    Label03.textContent = randomnumber3;
}