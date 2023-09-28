//get user input
function getValue(){
    //make alert box invisible to start
    document.getElementById("alert").classList.add("invisible");
    //get user string from the page
    let userString = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = checkForPalindrome(userString);

    //display message to screen
    displayMessage(returnObj);
}
//check if string is a palindrome
function checkForPalindrome(userString){

    //make all lower case
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    //replace special characters with empty string
    userString = userString.replace(regex,"");

    //reverse the string with for loop
    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index]; 
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a Palindrome!"
    }

    else{
        returnObj.msg = "Sorry! You did not enter a Palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;

}
//displat a message to the screen
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = 'Your phrase reversed is: ${returnObj.reversed}';
    document.getElementById("alert").classList.remove("invisible");


}



