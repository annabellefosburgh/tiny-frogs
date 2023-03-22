// Variables for choices the user has in password parameters.
var yesNumber = confirm("Would you like to include numbers?")
var yesCharacter = confirm("Would you like to include special characters?")
var yesUppercase = confirm("Would you like to include uppercase letters?")
var passwordLength = prompt("Your password can be between 8 and 128 characters long.")

// Variables assigning special characters, letters, and numbers available.
var character = ["!", "#", "$", "%","&"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Variable to call specific choices in order to generate password within user parameters.
var choices = [character, number, letter, uppercase]

//If statement to choose password length
if(passwordLength) 

// If statements made to run the true value when the user accepts criteria.
if(yesNumber) {
  choices = number
}
if(yesCharacter) {
  choices = character
}
if(yesUppercase) {
  choices = uppercase
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
