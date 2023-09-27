//Get string from page
//Controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//Logic function
function reverseString(userString){

    let reverseString = [];
    
    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        
        reverseString += userString[index];
        
    }
    return reverseString;
}

//Display the reversed string to the user
//View function
function displayString(revString){

    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}