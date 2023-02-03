// Assignment Code
var generateBtn = document.querySelector("#generate");
var passw=document.querySelector("#password")
// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var symbo=prompt("Do you prefer using symbols in your password?(yes or no)")
  if (symbo=="yes")
  {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cap=prompt("Do you prefer using upper case in your password?(yes or no)");
    if (cap="yes") {
      var chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else{
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    }
  }
  else{
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cap=prompt("Do you prefer using upper case in your password?(yes or no)");
    if (cap="yes") {
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    }
    else {
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    }
  }
 
  var passLength=prompt("How many digits is the password?");
  if (passLength>=8) {
    
    var passwordLength= passLength;
  }
  var passLength=prompt("How many digits is the password?");
  if (passLength<=128) {
    
    var passwordLength= passLength;
  }
  var password="";
  for (let num = 0; num <passwordLength; num++) {
    var rand = Math.floor(Math.random()*chars.length);
    password += chars.substring(rand, rand+1);
  }
  passw.value=password
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

