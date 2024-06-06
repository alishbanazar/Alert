// ----------- Chapter 17-20 ARRAYS AND LOOP ----------

//1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var arr = [];

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

//6. Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write("<h3> Counting : </h3> "+ "<br>");
// for (var i=1; i<=15; i++){
//    document.write(i + " , ");
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// document.write("<h3> Reverse counting:  </h3>");
// for(var i=10; i>=1; i++){
//    document.write(i + " ,");
// }

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// document.write("<h3> Even : </h3>");
// for (var i=0; i<=20; i++){
//    if(i%2==0)
//    document.write(i + " , ")
// }

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

//  document.write("<h3> Odd : </h3>");
//  for (var i=1; i<=20; i++){
//    document.write(i + " , ");
//    i++
//  }

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//  document.write("<h3> Series : </h3>");
// for(var i=2;i<=20;i=i+2){
//     document.write(i+'k'+ " , ")
// }

//7. You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an arry
//After searching, prompt the user whether the given item is found in the list or not.

// var bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome! to Abbasi bakery. What do you want to order sir/ma'am ? ");
// var flag = false
// var indexNo;
 
// for(var i=0; i<bakeryItem.length; i++){
//    if(bakeryItem[i]==userInput){
//       indexNo = i
//       flag=true
//       break;
//    }
//  }

// if(flag){
//    alert(userInput + " is avalaible at index " + indexNo + " in our bakery ");
// }

// else{
//    alert( "We are sorry. " + userInput + "is not avalaible in our bakery");
// }

//8. Write a program to identify the largest number in the given array.
//A = [24, 53, 78, 91, 12].

// var arr = [24, 53, 78, 91, 12];
// var largestNum = arr[0];
// console.log(arr[0]);
// for (var i=0; i<arr.length; i++){
//    if(arr[i]>largestNum){
//       largestNum=arr[i] 
//      }
// }

// document.write('Array items : '+arr+'<br>');
// document.write('The largest number is '+largestNum)

//9. Write a program to identify the smallest number in the given array.
//A = [24, 53, 78, 91, 12]

// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];
// console.log(arr[0]);
 
// for (var i=0; i<arr.length; i++){
//     if(arr[i]<smallest){
//    smallest=arr[i]      
//      }
// }

//  document.write('Array items : '+arr+'<br>');
//  document.write('The smallest number is: '+ smallest);

//10. Write a program to print multiples of 5 ranging 1 to 100

// for(var i=5;i<=100;i=i+5){
//         document.write(i+',')
//  }




           // -----------------completed chapter n0#17 TO 20----------------------------