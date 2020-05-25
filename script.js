// Assignment Code
var generateBtn = document.querySelector("#generate");
var typesOfCharacters = {
    lowercase: "abcdefghijklomnopqrstuvwxyz",
    specialCharacters: '!@#$%^&*(){}[]=/,.',
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function generatePassword() {
 var fromPrompt = prompt("Select a number between 8 and 128");
 var length = parseInt(fromPrompt);
 if (length < 8 || length > 128) {
    alert("Password must be more than 8 characters, but less than 128.");
    return "Please select again!";
  }
  if (!length) {
    alert("Password must be more than 8 characters, but less than 128.");
    return "Please select again!";
  }
 var useLowerCase = confirm("Use Uppercase?");
 var useUpperCase = confirm("Use Lowercase?");
 var useSymbols = confirm("Use Symbols?");
 var useNumbers = confirm("Use Numbers?");

 console.log("conditions")

 if (!useLowerCase && !useUpperCase && !useNumbers && !useSymbols) {
    alert("You must use characters for your Password");
    return "Please try again!"
}


var possibleCharacters = [];

if (useLowerCase) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.split(""));
}
if (useUpperCase) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.toUpperCase().split(""));
}

if (useSymbols) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialCharacters.split(""));
}

if (useNumbers) {
    for (var i = 0; i < 10; i++) {
    possibleCharacters.push(i);
  }
}


var password = "";

for (var i = 0; i < length; i++) {
 var possition = Math.floor(Math.random() * possibleCharacters.length);
 password = password + possibleCharacters[possition];
}


console.log("Password:", password);
return password;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
