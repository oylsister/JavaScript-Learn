const display = document.getElementById("display");
const operator = ["+", "-", "/", ".", "*"];
var decimalActive = false;
var decimalCount = 0;

function appendToDisplay(input)
{
    var total = display.value + input;

    // Check if the last one is operator, then we not allow it.
    var lastchar = total.charAt(total.length - 2);
    if(IsOperator(lastchar) && IsOperator(input))
        return;

    if(IsDecimal(lastchar))
        decimalActive = true;

    if(decimalActive)
        decimalCount++;

    display.value += input;
}

function clearDisplay()
{
    display.value = "";
}

function IsOperator(value)
{
    for(var i = 0; i < operator.length; i++)
    {
        if(value == operator[i])
            return true;
    }

    return false;
}

function IsDecimal(value)
{
    if(value == operator[3])
        return true;

    return false;
}

function calculate()
{
    // eval() calculate everything in the text
    try {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
}