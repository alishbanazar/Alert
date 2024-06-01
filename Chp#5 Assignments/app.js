// question no#1

// var num1 = "3";
// var num2 = "5";
// document.write( "The sum of " + num1 + " and " + num2 +" is 5");

// question no#2
// document.write(num1-num2)

// document.write(num1*num2)

// document.write(num1%num2)

// question no#3
// a. Declare a variable
// var myVariable;

// b. Show the value of the variable in the browser
// document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number
// myVariable = 10;

// Show the updated value of the variable in the browser
// document.write("Value after variable initialization is: " + myVariable + "<br>");

// Increment the variable
// ++myVariable;

//  Show the value of variable in your browser
//  document.write("Value after increment is: " + myVariable + "<br>")

//  Add 7 to the variable
// myVariable = 10+7;
// var result = "17"

// Show the value of variable in your browser
// document.write("Value after addition is: " + result + "<br>" )

// Decrement the variable
// myVariable--;

// value of variable in your browser
// document.write("Value after decrement is: " + myVariable + "<br>")

// dividing the variable’s value by 3
// myVariable = 16%3

// output
// document.write("Output:" + "The remainder is " + myVariable + "<br>")

// question no#4
// var ticketPrice = "600"
// var totalPrice = ticketPrice*5 
// document.write("Total cost to buy 5 tickets to a movie is " + totalPrice + "PKR" + "<br>")

// question no#5
// Write a script to display multiplication table of any number in your browser.

// document.write( "Table of " + 4 + "<br>");
// for(var i=0 ; i<=10 ; i++){
//     document.write("4 x" +i+ "=" + 4*i + "<br>")
// }

// question no#6
// 6. The Temperature Converter: It’s hot out! Let’s make a  converter based on the steps here.
// a. Store a Celsius temperature into a variable.

// var celsius= 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

// var fahrenheit = (celsius * 9/5 )+32

// c. Now store a Fahrenheit temperature into a variable.

// fahrenheit=77;

//  d. Convert it to Celsius & output “NNoF is NNoC”.

// celsius = (fahrenheit - 32) * 5 / 9;
// document.write(celsius + " C is " + fahrenheit + "F" + "<br>");
// document.write(fahrenheit + "F is " + celsius + "C" + "<br/>");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables

 // a. Price of item 1
// var itemprice1 = 150;

// // b. Price of item 2
// var itemprice2 = 350;

// // c. Ordered quantity of item 1
// var quantityItem1 = 2; 

// // d. Ordered Quantity of item 2
// var quantityItem2 = 4;

// // e. Shipping charges
// var shippingCharges = 100;

// // Compute the total cost & show the receipt in your browser.
// var total = (itemprice1 * quantityItem1) + (itemprice2 * quantityItem2) + shippingCharges;
// document.write("Price of Item 1 is " + itemprice1 + "<br/>");
// document.write("Quantity of Item 1 is " + quantityItem1 + "<br/>");
// document.write("Price of Item 2 is " + itemprice2 + "<br/>");
// document.write("Quantity of Item 2 is " + quantityItem2 + "<br/>");
// document.write("Shipping Charges " + shippingCharges + "<br/>");
// document.write("<br/>");
// document.write("Total cost of your order is " + total);

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in
//your browser

// var totalMarks = 500;
// var obtainedMarks = 400;
// var percentage = (obtainedMarks/totalMarks)*100;

// document.write("<h2> Marks Sheet </h2>" + "<br>");
// document.write("Total Marks:" + totalMarks + "<br>");
// document.write("Marks Obtain:" + obtainedMarks + "<br>");
// document.write("Percentage:" + percentage +  "<br>");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)
//  var pkr = (10*104.80)+ (25*28);
//  document.write("<h3>Currency in PkR </h3>");
//  document.write("Total currency in PKR:" + pkr );

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

// var num = 5;
// num = (((num+5)/10)*2);
// document.write("<h3> Arithematic Operatin in one statement: </h3>" +"</br>" )
// document.write("Output:" + num)

//11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values
//Output them to the screen like so: “They are either NN or NN years old”.

// var currentYear = 2024;
// var birthYear = 2003;
// var age = currentYear-birthYear;

// document.write("<h2> Age Calculator </h2>");
// document.write("Current year: "+ currentYear + "<br>");
// document.write("Birth Year: "+ birthYear + "<br>");
// document.write(" My Age: "+ age + "<br>");

//12. The Geometrizer: Calculate properties of a circle.
 //document.write("<h2> The  Geometrize </h2> " + "<br>");

//a. Store a radius into a variable.
// var radius = 20;
// document.write (" The radius of the circle is : "+ radius + "<br>")

//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
// var circumference = 2*3.142 *radius;
// document.write("The circumference is: " + circumference + "<br>");

//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
//var area = 3.142 * radius *radius;
//document.write("The area is : " + area + "<br>");

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?Wonder no more.

// document.write("<h2> The Lifetime Supply Calculator </h2>" + "<br>");

//a. Store your favorite snack into a variable

//   var snack = "DayDream";
//  document.write ("Favourite Snack : "+ snack + "<br>" );

//b. Store your current age into a variable.

// var age = 21;
//  document.write ("Current age : "+ age + "<br>" );

//c. Store a maximum age into a variable.

// var maximum = 80;
//  document.write ("Estimated maximum : "+ maximum + "<br>" );

//d. Store an estimated amount per day (as a number).

// var amount = 3;
//  document.write(" Amount of snacks per day : "+ amount + "<br>" );

//e. Calculate how many would you eat total for the rest of
//  var eat =(60-20) * (365*3);
//   document.write("You will need " + eat + " to last you until the ripe old age of " + maximum);


            // ----------------chpter#5 done ------------------------------------