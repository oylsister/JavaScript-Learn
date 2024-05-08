const submitButton = document.getElementById("submit-button");
const guessNumber = document.getElementById("number-input");
const resultMessage = document.getElementById("result");

const min = 0;
const max = 50;

const text = "TDS32"

var randomnumber = Math.floor(Math.random() * max) + min;

console.log(`Number: ${randomnumber}`);
console.log(Number(text));

submitButton.onclick = function() {
    if(isNaN(Number(guessNumber.value)))
    {
        resultMessage.textContent = "You must enter the number!";
    }
    else if (Number(guessNumber.value) > max || Number(guessNumber.value) < min)
    {
        resultMessage.textContent = `Guess number range is between ${min} - ${max}!`;
    }
    else if(randomnumber != Number(guessNumber.value))
    {
        resultMessage.textContent = "WRONG!";
    }
    else {
        resultMessage.textContent = "CORRECT!";
    }
}