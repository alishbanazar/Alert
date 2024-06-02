// ----------- Chapter 17-20 ARRAYS AND LOOP ----------

//1. Declare and initialize an empty multidimensional array. (Array of arrays)

var arr = [];

//2. Declare and initialize a multidimensional array representing the following matrix:

// var arr = [
//     [0,1,2,3]
//     ,[1,0,1,2]
//     ,[2,1,0,1]];
    
// for(var i=0; i<3; i++){
//     for( var j=0; j<4; j++){
//         document.write(arr[i][j]+ "");
//     }
//        document.write("<br>");
//      }

//3. Write a program to print numeric counting from 1 to 10.

// for(var i=0; i<=10; i++){
//     document.write(i + "<br>");
// }

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be
//taken as an input from user

//  var table=+prompt('Enter a table to show its multiplication table');
//  var tableLength=+prompt('Enter the length multiplication table');
//   document.write("Multiplication table of " + table + "<br>" + " Table length " + tableLength+"<br>" +"<br>");
//  for(var i=1;i<=tableLength;i++){
//      document.write(table+' X'+i+' ='+table*i+'<br>')
//  }

//5. Write a program to print items of the following array using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]  


// var fruits=['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for(var i=0; i<fruits.length ;i++){
//     document.write(fruits[i]+'<br>')
// }
// document.write("<br>")
// for(var j=0;j<fruits.length;j++){
//     document.write('Element at index '+j + ' is '+fruits[j]+'<br>');}

//10. Write a program to print multiples of 5 ranging 1 to 100
 for (var i=5; i<=100; i+5){
    document.write(i+',')
 }