// Variables assigning special characters, letters, and numbers available.
var character = ["!", "#", "$", "%","&"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Prompts to choose password criteria
var passwordLength = prompt("Choose a length between 8 and 128 characters for your password.")
var yesLetter = confirm("Would you like to include letters?")
var yesNumber = confirm("Would you like to include numbers?")
var yesCharacter = confirm("Would you like to include special characters?")
var yesUppercase = confirm("Would you like to include uppercase letters?")

//Function to generate the password. Included are prompts to choose password criteria, if statements with the concat method to call each selection.
function generatePassword() {
  var choices = [];
  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Please choose a password between 8 and 128 characters long.")
    return
  }
  if (confirm("Would you like to include letters?") == true) {
    choices = choices.concat(lowerLetter)
  }
  if (confirm("Would you like to include numbers?") == true) {
    choices = choices.concat(number)
  }
  if(confirm("Would you like to include special characters?") == true) {
    choices = choices.concat(character)
  }
  if(confirm("Would you like to include uppercase letters?") == true) {
    choices = choices.concat(uppercase)
  }
  if (!yesLetter && !yesNumber && !yesCharacter && !yesUppercase) {
    prompt("You must select at least 1.")
  }
  //This variable is to use the result of the generate function to randomize the selection.
  var randomPassword = "";

//The for loop uses the math.random to take those choices and randomize a string from them.
  for (i=0; i<passwordLength; i++) {
  randomPassword += choices[Math.floor(math.random()*choices.length)]
}
console.log(randomPassword)
return randomPassword;
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
