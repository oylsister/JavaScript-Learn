const food1 = "pizza";
const food2 = "meat";
const food3 = "rice";
const food4 = "sushi";

function Fridge(...foods) {
    console.log(...foods);
}

function getFood(...foods) {
    return foods;
}

//Fridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);

function sum(average = false, ...numbers)
{
    var result = 0;
    for(var number of numbers)
    {
        result += number;
    }

    if(average)
        return result / numbers.length;

    return result;
}

const total = sum(false, 1, 2, 3, 4, 5);
console.log(total);

const total11 = sum(true, 1, 2, 3, 4, 5);
console.log(total11);
