// Assignment code here
// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

var password = [];
var guarenteedCharacters = [];
var possibleCharacters = [];


function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8 || length > 128) {
    alert('Password length must be between 8 and 128 characters');
    return null;
  }

  //  Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  // if (length > 128) {
  //   alert('Password length must less than 129 characters');
  //   return null;
  // }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
var hasNumericCharacters = confirm(
  'Click OK to confirm including numeric characters.'
)
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercaseCharacters = confirm (
    'Click OK to confirm including lowercase characters.'
  )
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercaseCharacters = confirm (
    'Click OK to confirm including uppercase characters.'
  )
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowercaseCharacters && !hasUppercaseCharacters) {
  return null;
}

  // Object to store user input then return that object
  var passwordOptions = {
    length: length,
    special: hasSpecialCharacters,
    numeric: hasNumericCharacters,
    lowercase: hasLowercaseCharacters,
    uppercase: hasUppercaseCharacters
  }

  return passwordOptions;
}

var generatePassword = function() {
  var options = getPasswordOptions()
  if (options.special) {
    // creating a random index for the special Character array
    var randomCharacter = Math.floor(Math.random()*specialCharacters.length)

    for (let i=0; i < options.length; i++ ) {
      possibleCharacters.push(specialCharacters[randomCharacter])
    }
    guarenteedCharacters.push(specialCharacters[randomCharacter])
  }








  
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
// generateBtn.addEventListener("click", getPasswordOptions);