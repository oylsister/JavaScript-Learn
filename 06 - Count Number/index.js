var countnumber = 0;
var increaseClick = 0;
var isReachZero = false;

const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");
const countLabel = document.getElementById("countlabel");
const warningMsg = document.getElementById("warning");

increaseButton.onclick = function() {

    if(isReachZero)
    {
        increaseClick++;

        if(increaseClick > 3)
        {
            ResetStatus();
        }
    }
    countnumber++;
    countLabel.textContent = countnumber;
}

resetButton.onclick = function() {

    if(isReachZero)
    {
        ResetStatus();
    }

    countnumber = 0;
    countLabel.textContent = countnumber;
}

decreaseButton.onclick = function() 
{
    if(countnumber == 0)
    {
        isReachZero = true;
        increaseClick = 0;
        warningMsg.textContent = "You can't go below than 0!";
    }

    else {
        countnumber--;
        countLabel.textContent = countnumber;
    }
}

function ResetStatus()
{
    isReachZero = false;
    increaseClick = 0;
    warningMsg.textContent = "";
}