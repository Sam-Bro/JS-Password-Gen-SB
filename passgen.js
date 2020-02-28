//variables and prompts
const results = document.getElementById("result");
var characters = prompt("How many characters should the password be? (8-128)");
var upperCase = prompt("Should the password contain uppercase letters? (yes / no)");
var lowerCase = prompt("Should the password contain lowercase letters? (yes / no)");
var numbers = prompt("Should the password contain numbers? (yes / no)");
var symbols = prompt("Should the password contain symbols? (yes / no)")

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

