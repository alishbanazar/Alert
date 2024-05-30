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

// var index=+prompt('At which index no you want to add color');
// var colorName=prompt('And which color ?');
// colors.splice(index,0,colorName);
// document.write('Updated array :'+ colors+'<br>')

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete

// index=+prompt(' At which index you want to delete color' );
// var deleteCount=+prompt('How many colors do you want to delete?');
// colors.splice(index,deleteCount);
// document.write('Updated array :'+ colors+'<br>')


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
// var score = [320,220,480,120];
// document.write("Score of students :" + score + "<br>");
// document.write("Score of students :" + score.sort() + "<br>");

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 

// var citiesList = [ "Karachi","Lahore" , "Islamabad" , "Quetta", "Peshawar"];
// document.write("<h3>Cities List: </h3>" + "<br>"+ citiesList + "<br>");
// document.write("<h3>Selected cities: </h3>" + "<br>"+ citiesList.slice(2,4) + "<br>");

//12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, 
// “ my ”, “ cat”];
// var array = ["This","is", "my", "cat"];
// document.write("Array:" + "<br>" + array + "<br>");

// var string=array.join(' ');
// document.write('String : '+'<br>'+string);

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which
//they were stored. (FIFO-First In First Out)

// var devices = ["Keyboard", " mouse", "printer", "monitor"];
// document.write(" <h3>Devices:<h3>" + "<br>"+ devices + "<br>" + "<br>")
// document.write ("<h3>Out:</h3>" + "<br>" + devices.shift() + "<br>");
// document.write (" <h3>Out: </h3>" + "<br>" + devices.shift() + "<br>" );
// document.write (" <h3>Out:</h3>" + "<br>" + devices.shift() + "<br>");
// document.write ("<h3>Out:</h3>" + "<br>" + devices.shift() + "<br>");

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order.
//(Last In-First Out)
// var devices = ["Keyboard", " mouse", "printer", "monitor"];
// document.write(" <h3>Devices:<h3>" + "<br>"+ devices + "<br>" + "<br>");

// document.write ("<h3>Out:</h3>" + "<br>" + devices.pop() + "<br>");
// document.write ("<h3>Out:</h3>" + "<br>" + devices.pop() + "<br>");
// document.write ("<h3>Out:</h3>" + "<br>" + devices.pop() + "<br>");
// document.write ("<h3>Out:</h3>" + "<br>" + devices.pop() + "<br>");

//15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your browser using document.write() method:

// var phoneManufactur = [ "Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select>");
// document.write("<option>"+ phoneManufactur[0]+"</option>");
// document.write("<option>"+ phoneManufactur[1]+"</option>");
// document.write("<option>"+ phoneManufactur[2]+"</option>");
// document.write("<option>"+ phoneManufactur[3]+"</option>");
// document.write("<option>"+ phoneManufactur[4]+"</option>");

               //--------------------------------completed chp # 14 to 16------------------------------

