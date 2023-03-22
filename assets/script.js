// Variables assigning special characters, letters, and numbers available.
var character = ["!", "#", "$", "%","&"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// A function for an uppercase letter option.
var uppercase = function (x) {
  return x.toUpperCase();
}

//Variable to call specific choices in order to generate password within user parameters.
var choices;

var generatePassword() {
  prompt("Your password can have anywhere from 8 to 128 characters.");
  if (enter < 8 || enter > 128);
  prompt("Your input is outside of character parameters");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
