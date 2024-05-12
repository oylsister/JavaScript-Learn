// Closure

function outer()
{
    var message = "hello";

    function inner()
    {
        console.log(message);
    }

    inner();
}

// this won't change the message.
message = "goodbye";
outer();

function CreateCounter()
{
    var count = 0;
    function increment()
    {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount()
    {
        return count;
    }

    return { increment, getCount };
}

const counter = CreateCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

// undefiened
console.log(counter.count);

// Return 4
console.log(counter.getCount());

// Example 2
function CreateGame()
{
    var score = 0;

    function increaseScore(point)
    {
        score += point;
        console.log(`+${point} pts`);
    }

    function decreaseScore(point)
    {
        score -= point;
        console.log(`-${point} pts`);
    }

    function getScore()
    {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = CreateGame();

game.increaseScore(10);
game.decreaseScore(2);
console.log(`total score: ${game.getScore()}`);
