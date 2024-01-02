

// ==========CHAPTER 14-16=============
// ========Q1========  

// var Student name = [];

// ========Q2========
// var StudentName = [];


// ========Q3========
// var arr = ["Tiger"];

// ========Q4========
// var arr = [10];

// ========Q5========
// var arr = [true];

// ========Q6========
// var arr = ["tiger", 15, false, "Lion"];

// ========Q7========
// var arr = ["SSC", "HSC", "BCS",  "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// document.write(  "Qualifications :",  "<br>" , "<br>" , arr[1], "<br>"  ,arr[2] , "<br>", arr[3], "<br>",  arr[4], "<br>", arr[5], "<br>" ,arr[6] , "<br>" ,arr[7], );


// ========Q8========
// var student = ["usman", "faizan", "haseeb"];
// var score = [320,230,480];
// var Percentage = [score[0]/500*100, score [1]/500*100, score[2]/500*100];

// for(var i=0; i<score.length; i++){
//     document.write("Score of " + student[i]+ " "+ "is " + score[i] +  " Percentage : " + Percentage[i] + "%" + "<br>"   )
// }



// ========Q9========

// var colorname = ["red", "Green", "Brown"];
// document.write("color name =>" + " " + colorname + "<br>") ;
 

// // Part A
// var userask = prompt("What color you want to add");

// colorname.unshift(userask)
// document.write("Add Color =>" + " " + colorname);


 // Part B
//  var userask = prompt("What color you want to add?");

//  colorname.push(userask);
//  document.write("Add Color =>" + " " + colorname);

 // Part C
 // var color1 = prompt("Enter first color ");
// var color2 = prompt("Enter second color");
// colorname.unshift(color1,color2);
// document.write("Color name => " + " " + colorname)


 // Part D
 // colorname.shift(0);
// document.write("Color name =>" + " " + colorname);


// Part E
// colorname.pop(0);
// document.write("Color name =>" + " " + colorname);



// Part F
// var userask = +prompt("In which index you want to add color");

// var color1 = prompt("Enter color to add");

// colorname.splice(userask, 0, color1);
// document.write(colorname);


// Part G
// var question = prompt("You want to delete a colors (yes/no)")
// if(question === "yes"){
//     var question2 = +prompt("how many color s you want to delete")
// }
// else{
//     alert("as your wish")
// }
// colorname.splice(question , question2);
// document.write( "Color name => " + " "+ colorname);



// ========Q10========

// var studentscore = [230,230,480,120];
// document.write("Scores of Students :"+ " "+ studentscore+ "<br>");
// studentscore.sort()
// document.write("Ordered Scores of students :" + " " + studentscore );


// ========Q11========
// var city = ["Karachi" , "lahore" , "Peshawar" , "Islamabad"];
// document.write("Cities List:" + "<br>" + city + "<br>");

//  var selectedcity = city.slice(2);
//  document.write("Selected Citites List:" + "<br>" + selectedcity);






