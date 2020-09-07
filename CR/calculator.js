// Variable Declarations
var name;
var num1;
var num2;

// Gather information from user
name = prompt("Enter your name: ");

    // Ensure name is uppercase
    var upper = name.charAt(0).toUpperCase() + name.slice(1);
    
    //Print to console and screen
    console.log("Welcome to the system, " + name);
    document.getElementById("user").innerHTML="<p> Welcome to your calculator summary, " + upper + "!</p>";


num1 = prompt("Let's do simple arithmetic! Enter a number! ");

    //Ensure user entered a number 
    while(isNaN(num1)){
        alert("Oops! You've entered something other than a number! Let's try again.");
        num1 = prompt("Try again! Enter a number! ");
    }
    //Print to console and screen
    console.log("First number: " + num1);
    document.getElementById("calc").innerHTML="<p>First number: " + num1 + "</p>";

num2 = prompt("Great! What's the second number?");

    //Ensure user entered a number 
    while(isNaN(num2)){
        alert("Oops! You've entered something other than a number! Let's try again.");
        num2 = prompt("Try again! Enter a number! ");
    }
    //Print to console and screen 
    console.log("Second number: " + num2);
    document.getElementById("calc2").innerHTML="<p>Second number: " + num2 + "</p>";

// call functions & display results
    // Addition
    document.getElementById("add").innerHTML= "Added : " + num1 + " + " + num2 + "</p>" + "<hr />" + calculate(num1, num2, '+') + "</p>";
    // Subtraction
    document.getElementById("sub").innerHTML= "Subtracted : " + num1 + " - " + num2 + "</p>" + "<hr />" + calculate(num1, num2, '-') + "</p>";
    // Multiplication 
    document.getElementById("mult").innerHTML= "Multiplied : " + num1 + " x " + num2 + "</p>" + "<hr />" + calculate(num1, num2, '*') + "</p>";
    // Division
    document.getElementById("divi").innerHTML= "Divided : " + num1 + " / " + num2 + "</p>" + "<hr />" + calculate(num1, num2, '/') + "</p>";



/****************** Function ************************* 
  This function takes three parameters & calculates 
  (+,-,*,/) and returns the results to user. 
 @x = first number to be calculated
 @y = second number to be calculated 
 @z = resquested mathematical operation
*******************************************************/
function calculate(x, y, z){

    // check requested operation, compute, print to console & return result
    if( z == '+'){
        var addition = Number(x) + Number(y);
        var add = "When " + x + " and " + y + " are added together the total is: " + addition + ".";

        console.log(add);
        return addition;
    }
    else if(z == '-'){
        var subtraction = Number(x) - Number(y);
        var sub = "When " + x + " is subtracted from " + y + " the total is: " + subtraction + ".";

        console.log(sub);
        return subtraction;
    }
    else if(z == '*'){
        var multiply = x * y;
        var mult = "When " + x + " and " + y + " are multiplied together the total is: " + multiply + ".";

        console.log(mult);
        return multiply;
    }
    else if(z == '/'){
        var divide = x/y;
        var div = "When " + x + " is divided by " + y + " the total is: " + divide + ".";

        console.log(div);
        return divide;
    }
}

