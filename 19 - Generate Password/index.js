const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbol = false;

function GeneratePasword(length, lowercase, uppercase, number, symbol)
{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-=_+";

    var allowChars = "";
    var password = "";

    allowChars += lowercase ? lowercaseChars : "";
    allowChars += uppercase ? uppercaseChars : "";
    allowChars += number ? numberChars : "";
    allowChars += symbol ? symbolChars : "";

    //console.log(allowChars);

    if(passwordLength <= 0)
    {
        return `(password length must be at least 1)`;
    }

    if(allowChars.length === 0)
    {
        return `(at least 1 set of character needs to be selected)`;
    }

    for(var i = 0; i < passwordLength; i++)
    {
        const randomindex = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomindex];
    }

    return password;
}

const password = GeneratePasword(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbol); 

console.log(`Generated password: ${password}`);