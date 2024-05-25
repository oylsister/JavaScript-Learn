const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("PlayerDisplay");
const botDisplay = document.getElementById("BotDisplay");
const resultDisplay = document.getElementById("ResultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const botScoreDisplay = document.getElementById("botScoreDisplay");
const gameCountDisplay = document.getElementById("gameCountDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");

var playerScore = 0;
var botScore = 0;
var gameCount = 0;
var tieCount = 0;

function PlayGame(playerChoice)
{
    const botChoice = choices[Math.floor(Math.random() * 3)];
    var result = "";

    if(playerChoice == botChoice)
    {
        result = "IT'S A TIE!";
        tieCount++;
        tieScoreDisplay.textContent = tieCount;
    }

    else
    {
        switch(playerChoice) {
            case "rock":
                result = (botChoice == "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                result = (botChoice == "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                result = (botChoice == "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    botDisplay.textContent = `PLAYER: ${botChoice}`;
    resultDisplay.textContent = result;

    gameCount++;
    console.log(gameCount);
    gameCountDisplay.textContent = gameCount;

    resultDisplay.classList.remove("redtext", "greentext");

    switch(result) {
        case "YOU WIN!": {
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        }
        case "YOU LOSE!": {
            resultDisplay.classList.add("redtext");
            botScore++;
            botScoreDisplay.textContent = botScore;
            break;
        }
    }
    //console.log(botChoice);
}