// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // all the veriable list
    var characterList = '';
    var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbersList = "0123456789";
    var specialCharList = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
    var allCharacters = " ";
    //prompt user for length of password
    charLength = Number(prompt("How Many Characters do you want for your password? (Choose a number between 8 and 128)"));
    //check if password is a number
    if (isNaN(charLength)) {
        alert("That's Not a number Please enter a number"); 
    }
    //alert if password is less than 8 
    if (charLength < 8) {
        alert("You know that password isn't long enough");
    } 
    //alert if password is greater then 128  
    if (charLength > 128) {
        alert("Your Password is too long!");
    }
    // password selection option                    
    if (charLength >= 8 && charLength <= 128 && !isNaN(charLength)) {
        var uppercaseConfirm = confirm("Click ok to confirm uppercase letters?");
        var lowercaseConfirm = confirm("Click ok to confirm lowercase letters?");
        var numbersConfirm = confirm("Click ok to confirm numbers?");
        var specialCharConfirm = confirm("Click ok to confirm special characters?");
    } else { alert("At least one character type must be select"); } 
    // Does password contain uppercaseList?
    if (uppercaseConfirm) {
        characterList += uppercaseList;
    }
    // Does password contain lowercaseList
    if (lowercaseConfirm) {
        characterList += lowercaseList;
    }
    // Does password contain numbers?
    if (numbersConfirm) {
        characterList += numbersList;
    }
    // Does password special characters?
    if (specialCharConfirm) {
        characterList += specialCharList;
    }
    var password = '';
    if (characterList === "") {
        characterList += allCharacters;
    }
    for (i = 0; i < charLength; i++) {
        password += characterList[Math.floor(Math.random() * characterList.length)];
    }
    return password;      
}
    // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);