
var generateBtn = document.querySelector("#generate");

var passwordLength;
var inputLower;
var inputUpper;
var inputNumber;
var inputSpecial;
var clientsChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// To write the password to #password input--
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adding an event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// beginning of the function 
function generatePassword() {

  // Asking for users input to generate the password with the number of charachters 
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    inputLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + inputLower);
    inputUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + inputUpper);
    inputNumber = confirm("Will this contain numbers?");
    console.log("Number " + inputNumber);
    inputSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + inputSpecial);

  };

  // If no answer is included then...
  if (!inputLower && !inputUpper && !inputNumber && !inputSpecial) {
    clientsChoices = alert("You must choose a criteria");

  // user fourth option
  } else if (inputLower && inputUpper && inputNumber && inputSpecial) {
    clientsChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(clientsChoices);
  }

  // User 3rd option 
  else if (inputLower && inputUpper && inputNumber) {
    clientsChoices = lowerCase.concat(upperCase, numbers);
    console.log(clientsChoices);
  }
  else if (inputLower && inputUpper && inputSpecial) {
    clientsChoices = lowerCase.concat(upperCase, special);
    console.log(clientsChoices);
  }
  else if (inputLower && inputNumber && inputSpecial) {
    clientsChoices = lowerCase.concat(numbers, special);
    console.log(clientsChoices);
  }
  else if (inputUpper && inputNumber && inputSpecial) {
    clientsChoices = upperCase.concat(numbers, special);
    console.log(clientsChoices);
  }

  // User second option 
  else if (inputLower && inputUpper) {
    clientsChoices = lowerCase.concat(upperCase);
    console.log(clientsChoices);
  }
  else if (inputLower && inputNumber) {
    clientsChoices = lowerCase.concat(numbers);
    console.log(clientsChoices);
  }
  else if (inputLower && inputSpecial) {
    clientsChoices = lowerCase.concat(special);
    console.log(clientsChoices);
  }
  else if (inputUpper && inputNumber) {
    clientsChoices = upperCase.concat(numbers);
    console.log(clientsChoices);
  }
  else if (inputUpper && inputSpecial) {
    clientsChoices = upperCase.concat(special);
    console.log(clientsChoices);
  }
  else if (inputNumber && inputSpecial) {
    clientsChoices = numbers.concat(special);
    console.log(clientsChoices);
  }
  // User first option
  else if (inputLower) {
    clientsChoices = lowerCase;
    console.log(clientsChoices);
  }
  else if (inputUpper) {
    clientsChoices = blankUpper.concat(upperCase);
    console.log(clientsChoices);
  }
  else if (inputNumber) {
    clientsChoices = numbers;
    console.log(clientsChoices);
  }
  else if (inputSpecial) {
    clientsChoices = special;
    console.log(clientsChoices);
  };

  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Will be looping for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = clientsChoices[Math.floor(Math.random() * clientsChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}