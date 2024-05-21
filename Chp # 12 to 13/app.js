// ----------- Chapter 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ----------

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if two integers integers
// are equal

// var firstnum = +prompt ("enter youe first number");
// var secondnum = +prompt ("enter youe second number");
// if (firstnum>secondnum){
//     alert(firstnum + " is larger than " + secondnum)
// }
// else if (firstnum<secondnum){
//     alert(firstnum + " is less than " + secondnum)
// }
// else{
//     alert(firstnum + " and " + secondnum + " both are equals")
// }

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num = +prompt("Please enter the number to check whether the number is positive, negative and zero")
// if (num>0){
//     alert(num + " is positive")
// }
// else if (num<0){
//     alert(num + " is negative")
// }
// else{
//     alert(num + " is equals to zero")
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
// Show “Incorrect password” otherwise.

// var password = ("Alishba786")
// var userPassword = +prompt("Please enter your password☺")
// if(userPassword===""){
//     alert("enter your password")
// }
//  else if (password===userPassword){
//     alert("Correct! The password you entered matches the original password.")
// }
// else{
//     alert("Incorrect password")
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//  var greeting;
// var hour=13;
// if(hour<18){
//     greeting='Good day'
//     alert(greeting);
// }
// else{
//     greeting='Good evening';
//     alert(greeting);

// }

//  7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements


 var time=+prompt('Please enter time in 24 hours \n clock format like: 1900 = 7pm.');
if(time>=000 && time<1200){
    alert('Good Morning')
}
else if(time>=1200 && time<1500){
    alert('Good Afternoon')
}
else if(time >=1700 && time<2000){
    alert('Good Evening')
}
else if(time >=2100 && time<=2359){
    alert('Good Night')
}
else{
    alert('Invalid Input')
}
