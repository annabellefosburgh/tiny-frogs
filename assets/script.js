// Variables assigning special characters, letters, and numbers available.
var character = ["!", "#", "$", "%","&"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


//For loop to randomly select chosen variables
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

//Function to generate the password. Included are prompts to choose password criteria, if statements with the concat method to call each selection.
function generatePasswords() {
  var choices = [];
  passwordLength = (prompt("Choose a length between 8 and 128 characters for your password."))
  if(passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a minimum of 8 characters and a maximum of 128.")
    return
  }
  var yesLetter = confirm("Would you like to include letters?")
  if (yesLetter) {
    choices = choices.concat(letter)
  }
  var yesNumber = confirm("Would you like to include numbers?")
  if (confirm("Would you like to include numbers?")) {
    choices = choices.concat(number)
  }
  var yesCharacter = confirm("Would you like to include special characters?")
  if(yesCharacter) {
    choices = choices.concat(character)
  }
  var yesUppercase = confirm("Would you like to include uppercase letters?")
  if(yesUppercase) {
    choices = choices.concat(uppercase)
  }
}

//The random variable is created to randomize from the function.
var randompassword = "";

//A for loop runs through all the choices to decide which are called.
for (i = 0; i < length; i++) {
  randomPassword += choices [Math.floor(math.random()*choices.length)]
}

console.log(randomPassword)
return randomPassword

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
