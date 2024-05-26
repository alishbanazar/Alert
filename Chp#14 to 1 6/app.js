    //   -------------ARRAYS------------

// 1. Declare an empty array using JS literal notation to store student names in future.
// var studentName = [];

// 2. Declare an empty array using JS object notation to store student names in future.

// var students = new Array ();

// 3. Declare and initialize a strings array.

// var books = [" mathematice ", " English " , " Urdu " , " General-Sciencs "];
// document.write(" <h4>String Arrays: </h4> " + books + "<br>" )

// 4. Declare and initialize a numbers array.
// var num =[2,4,6,8,10];
// document.write(" <h4> Number Arrays:</h4> " + num + "<br>")

// 5. Declare and initialize a boolean array.
// var boolean =[" true "," false ", " false " , " true "];
// document.write("<h4> Boolean Arrays: </h4> " + boolean + "<br>");

// 6. Declare and initialize a mixed array.
// var mixed = [" Alishba ", " Nazar " ,  8 ,"  true"];
// document.write("<h3> Mixed Arrays: </h3>  " + mixed + "<br>");

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
// var count = 0;
// var i = 0;

// document.write("Qualification" + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>");

//  8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like: 

// var students= [" Alishba " , " Mariyam " , " Sadaf"];
// var score = [450 , 300 , 250];
// var total = 500;

// percentage1=(score[0]/total)*100;
// percentage2=(score[1]/total)*100;
// percentage3=(score[2]/total)*100;

// document.write('Score of  '+students[0]+' is  '+score[0]+' . Percentage: '+percentage1+' % '+'<br>')
// document.write('Score of  '+students[1]+' is  '+score[1]+' . Percentage: '+percentage2+' % '+'<br>')
// document.write('Score of  '+students[2]+' is  '+score[2]+' . Percentage: '+percentage3+' % '+'<br>')

// 9. Initialize an array with color names. Display the array lements in your browser.
var colors = [];

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// var userColor = prompt("Enter your desire color in the beginning of the array");
// colors.unshift(userColor)
// document.write(" <h3> Updated Array:</h3> " + colors + "<br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// var userColor = prompt ("Enter your color in the end of the array");
// colors.shift(userColor);
// document.write(" <h3>Updated array: </h3 " + colors + "<br>") 

// c. Add two more color to the beginning of the array. 
// var addColor1 = prompt ("Add first color to the beginning of the array");
// var addcolor2 = prompt ("Add second color to the beginning of the array");
// colors.unshift(addColor1,addcolor2);
// document.write("<h3> Updated Array : </h3>  " + colors + "<br>")

//d. Delete the first color in the array.array. Display the updated array in your browser.

// colors.shift();
// document.write("Updated Array:" + colors + "<br>");

//e. Delete the last color in the array. Display the updated array in your browser

// colors.pop();
// document.write("Updated Array:" + colors + "<br>");

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. 
//  Display the updated array in your browser.
 var index = +prompt("At which index number you want to add new color");
 var colorName = +prompt("And which color ?");
 colors.splice =(index,1,colorName);
 document.write("Updated Array:" + colors + "<br>");
