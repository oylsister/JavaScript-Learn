// In case you execute some function and it took to long using callback will proceed to call the function as order you want since they're not gonna wait it.

Hello(Wait);

function Hello(callback)
{
    console.log("Hello!");
    callback();
}

function Wait()
{
    console.log("Wait!");
}

function Leave()
{
    console.log("Leave!");
}

function Goodbye()
{
    console.log("Goodbye!");
}

Sum(DisplayPage, 3,5);

function Sum(callback, x, y)
{
    var result = x + y;
    callback(result);
}

function PrintResult(result)
{
    console.log(result);
}

function DisplayPage(result)
{
    document.getElementById("header").textContent = result;
}
