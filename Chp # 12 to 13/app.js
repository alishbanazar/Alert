// ----------- Chapter 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ----------

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if two integers integers
// are equal
var firstnum = +prompt ("enter youe first number");
var secondnum = +prompt ("enter youe second number");
if (firstnum>secondnum){
    alert(firstnum + " is larger than " + secondnum)
}
else if (firstnum<secondnum){
    alert(firstnum + " is less than " + secondnum)
}
else{
    alert(firstnum + " and " + secondnum + " both are equals")
}