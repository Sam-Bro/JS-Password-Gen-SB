//variables and prompts
const results = document.getElementById("result");


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// user input password length 
if (characters > 7 && characters < 129) {
    var userLength = parseInt(characters, 10);
} else {
    var userLength = false;
    alert("invalid password length");
    return;
}

// if input is "yes" return true
if(upperCase.toLowerCase() === 'yes') {
    var userUpper = true;
} else {
    var userUpper = false; 
}

if (lowerCase.toLowerCase() === 'yes') {
    var userLower = true;
}else {
    var userLower = false;
}

if (numbers.toLowerCase() === 'yes') {
    var userNumbers = true;
}else {
    var userNumbers = false;
}

if (symbols.toLowerCase() === 'yes') {
    var userSymbols = true;
}else {
    var userSymbols = false;
}

// function to generate password
function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = upper + lower + number + symbol;

    // filter false inputs
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(filterObj);
    function filterObj(item) {
        return Object.values(item)[0]; 
    }


    if (typesCount === 0) {
        return ' ';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(function(type) {
            const funcName = Object.keys(type)[0];
            //console.log('funcName', funcName);

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

//password generator button click statement 
generate.addEventListener('click', function() {

    const length = characters;
    const hasUpper = userUpper;
    const hasLower = userLower;
    const hasNumber = userNumbers;
    const hasSymbol = userSymbols;

    console.log(hasSymbol);
    result.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

//Password generator random character functions 

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*()<>?,."
    return symbols[Math.floor(Math.random() * symbols.length)];
}
