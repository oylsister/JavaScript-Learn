// Catch the error, because if you don't, the rest of the code will not be executed.

/*
try // Enclose code that might cause error
{
    console.lag("Hello");
    // Nework error
    // Promise rejection
    // Security error
}
catch(error) 
{
    console.error(error);
}
finally 
{
    // close files
    // close connections
    // release resource
    console.log("This always executed");
}
console.log("The End");
*/

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }

    if(isNaN(dividend) || isNaN(divisor))
        throw new Error("Values must be a number!")

    const result = dividend / divisor;
    console.log(result);
}

catch (error) {
    console.error(error);
}

console.log("The End");