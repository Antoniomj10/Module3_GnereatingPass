
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var Lowercasewords = "abcdefghijklmnopqrstuvwxyz";
  var Uppercasewords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialcharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

  var allCharacters = Lowercasewords + Uppercasewords + numbers + specialcharacters;

  var passwordLength = parseInt(prompt("Enter password length (between 8 and 24:"));
  

  if (passwordLength < 8 || passwordLength > 24 || isNaN(passwordLength)) {
    return "Please enter a valid password length between 8 and 24.";
  }

  var allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

