function RollDice()
{
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceTotal = document.getElementById("diceTotal");
    const diceimage = document.getElementById("diceimages");
    const values = [];
    const images = [];
    var total = 0;

    for(var i = 0; i < numOfDice; i++)
    {
        const value = Math.floor(Math.random() * 6) + 1;
        //console.log(`${i+1}. Number: ${value}`);
        values.push(value);
        images.push(`<img class="dice-image" src="pictures/Dice-${value}.svg">`);
        total += value;
    }
    //console.log(values);
    diceResult.textContent = `Dice: ${values.join(', ')}`
    diceTotal.textContent = `Total Result: ${total}`;
    diceimage.innerHTML = images.join('');
}