const visaCheck = document.getElementById("visaRadio");
const mastercardCheck = document.getElementById("mastercardRadio");
const paypalCheck = document.getElementById("paypalRadio");
const submitButton = document.getElementById("card-submit");
const result = document.getElementById("payment-result");

submitButton.onclick = function() {
    if(visaCheck.checked)
    {
        result.textContent = 'You selected Visa';
    }

    if(mastercardCheck.checked)
    {
        result.textContent = 'You selected MasterCard';
    }

    if(paypalCheck.checked)
    {
        result.textContent = 'You selected PayPal';
    }

    else
    {
        result.textContent = "You haven't selected anything yet.";
    }
}