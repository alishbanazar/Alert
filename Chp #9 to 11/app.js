// ----------- Chapter 9-11 USER INPUT & CONDITIONAL STATEMENT ----------


// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var cityName = prompt("Enter here city name:");
// if(cityName=="Karachi"){
//    document.write("Welcome to City of Lights 😍❤")
// }
// else{
//    alert("Most Welcome 🤩")
// }

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If
//  the user is female, give the message: Good Morning Ma’am.

// var gender = prompt ("Enter here your gender")
// if (gender=="Male"){
//     document.write("Good Morning Sir.😎😊")
// }
// else{
//     alert("Good Morning Ma'am.🥰🤗")
// }

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this 
// table:

// var color = prompt("Enter the traffic color");
// if (color=="red"|| color=="Red"){
//     alert("Must stop✋🚦🚧🚗")
// }
// else if(color=="yellow"|| color=="Yellow"){
//     alert("Ready to move🚦🚧🚕")
// }
// else if(color=="green" || color=="Green"){
//     alert("Move now 🚦🚧🚙")
// }


// 4. Write a program to take input remaining fuel in car (inlitres) from user. If the current fuel is less than 
// 0.25litres,  show the message “Please refill the fuel in your car”

// var remainingFuel = prompt("please enter here current fuel inliteres ");
// if(remainingFuel=="0.25literes"){
//     alert("Please refill the fuel in your car👨‍🔧👩‍🔧")
// }
// else{
//     alert("grearter than 0.25 literes good progress")
// }

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// PART # A 
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// PART # B
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// PART # C
// var c = 12;
// if (c++ === 13){
//    alert("condition 1 is true");
// }
// if (c === 13){
//   alert("condition 2 is true");
// }
// if (++c < 14){
//   alert("condition 3 is true");
//  }
//  if (c === 14){
//    alert("condition 4 is true");
// }
// PART # D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// PART # E
// if (true){
//     alert("True")
// }

// if(false){
//     alert("False")
// }

// PART # F
// if ("car" < "cat"){
//     alert("car is smaller than cat")
// }

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:

// var obtainedMarks=+prompt('Enter Obtained Marks in three subjects: ');
// var totalMarks=+prompt('Enter total Marks:');
// var percentage=(obtainedMarks/totalMarks)*100;
// percentage=percentage.toFixed(2);

// document.write('<h2>'+'Marksheet'+'</h2>');
// document.write('Total marks :'+totalMarks+'<br>');
// document.write('Percentage :'+percentage+'<br>');

// var grade;
// var remarks;
// if(percentage>=80){
//     grade="A-one";
//     remarks="Excellent";
// }
// else if(percentage>=70){
//     grade="A";
//     remarks="Good";
// }
// else if(percentage>=60){
//     grade="B";
//     remarks="You need to improve";
// }
// else if(percentage>=70){
//     grade="A-one";
//     remarks="Excellent";
// }
// else if(percentage<60){
//     grade="Fail";
//     remarks="Sorry";
// }
// else{
//     document.write("Invalid Input" + "<br>")
// }
// document.write('Grade :'+grade+'<br>');
// document.write('Remarks :'+remarks+'<br>');

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.

// var guessNumber = +prompt("Guess the secret number : \nBetween 1-10 ")
// var secretNumber = 8
// if (guessNumber===secretNumber){
//     alert("Bingo! Correct answer")
// }

// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// if(++secretNumber===guessNumber){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("You guess the wrong number")
// }

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var num = +prompt("Enter a number to check wether the number is divisible by 3 or not")
// if (num%3===0){
//     alert(num + " is divisible by 3")
// }
// else{
//     alert(num + " is not divisible by 3")
// }

// 9. Write a program that checks whether the given input is an even number or an odd number.

// var num = +prompt("Check the number that is even or odd")
// if (num %2 ===0){
//     alert(num + " is even ")
// }
// else{
//     alert(num + " is odd ")
// }


// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = +prompt("Enter your city temperature")
// if(temperature>40){
//     alert("It is too hot outside.")
// }
// else if (temperature>30){
//     alert("The Weather today is Normal.")
// }
// else if (temperature>20){
//     alert("Today’s Weather is cool.")
// }
// else if (temperature>10){
//     alert("OMG! Today’s weather is so Cool.")
// }
// else{
//     alert("Put the temperature according to your city")
// }

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
 
// var firstNumber=+prompt('Enter first Number');
// var secondNumber=+prompt('Enter second Number');
// var operation=prompt('Choose your operation : \n(+, - , * , % ')
// if(operation==='+'){
//     alert(firstNumber+secondNumber)
// }
// else if(operation==='-'){
//     alert(firstNumber-secondNumber)
// }
// else if(operation==='*'){
//     alert(firstNumber*secondNumber)
// }
// else if(operation==='/'){
//     alert(firstNumber/secondNumber)
// }
// else{
//     alert(firstNumber%secondNumber)
// }




            //  End chapter 9 to 11




