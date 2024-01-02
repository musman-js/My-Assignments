

// Chapter 9 USER INPUT & CONDITIONAL  STATEMENT //

//  ======= Q1 ========

// var cityName = prompt("Write your city name");
// if(cityName === "karachi" ){
//     console.log("Welcome to the city if lights");
// }


// //  ======= Q2 ========

// var gender = prompt("Write your gender");
// if(gender === "male"){
//     console.log(" Good Morning Sir")
// }
// else if(gender === "female"){
//     console.log(" Good Morning Ma'am.")
// }


// //  ======= Q3 ========
// var color = prompt("Write color");
// if(color === "red"){
//     console.log("Must Stop");
// }
// else if(color === "yellow"){
//     console.log("ready to move");
// }

// else if(color === "green"){
//     console.log("Move now")
// }

//  ======= Q4 ========

// var fuel = prompt("Write fuel in litres");
// if(fuel < "0.25 litres"){
//     console.log("Please refill the fuel in your car")
// }


//  ======= Q5 ========
// (a)
//  var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }

// Alert message is displayed

// (b)
//  var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); } 

// (c)
//  var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 

// Condition 2 is true

// // (d)
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); 
// }

// Alert is displayed

// (e)
//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }

// Alert is displayed


// ===========Q6==========


// var subject1 = +prompt("Enter First Subject marks");
// var subject2 = +prompt("Enter Second Subject marks");
// var subject3 = +prompt("Enter Third Subject marks");
// var total = +prompt("Enter total marks");


// var obt = subject1 + subject2 + subject3;
// var percent = obt / total * 100;

// if(percent >= 80 && percent <= 100){
//     document.write(`Total Marks : ${total} <br> Marks Obtained : ${obt} <br> Percetage : ${percent} <br> Grade : A-One <br> Remarks : Excellent`);
// }
// else if(percent >= 70 && percent <= 80){
//     document.write(`Total Marks : ${total} <br> Marks Obtained : ${obt} <br> Percetage : ${percent} <br> Grade : A <br> Remarks : Good`);
// }
// else if(percent>=60 && percent<=70){
//         document.write(`Total Marks : ${total} <br>
//       Marks Obtained : ${obt} <br>  Percentage : ${percent} <br> Grade : B <br>
//      Remarks : You need to improve`);
//     }
//     else if(percent>=0 && percent<=60){
//         document.write(`Total Marks : ${total} <br>
//         Marks Obtained : ${obt} <br>
//      Percentage : ${percent} <br>
//       Grade : Fail <br>
//    Remarks : Sorry`);
//     }
//     else{
//       alert("Please enter a correct Values");
//     }

//        ======Q7=========
// var secret = 5;
// var uservalue = +prompt("Guess the secret number");
// if(uservalue === secret){
//     document.write("Bingo! Correct answer");
// } else if(++uservalue === secret){
//     document.write("Close enough to the correct answer");
// }
// else{
//     document.write("Please enter a correct number");
// }


    //  ========Q8=========
// var num = +prompt("enter number");
// var divisible = num % 3;
// if(divisible === 0){
//     document.write("number is divisible by 3");
// }
// else{
//     document.write("pls enter correct number");
// }


// ======= Q9 ========
// var num = +prompt("Enter number");
// var even = num % 2;
// if(even === 0){
//     document.write("Your number is even");
// }
// else{
//     document.write("Your number is odd");
// }


// ======= Q10 ========

// var temp = prompt("Enter Temprature");
// if(temp > 40){
//     document.write("It is too hot outside.")
// }
// else if(temp > 30){
//     document.write("The weather today is Normal.")
// }
// else if(temp > 20){
//     document.write("Today's weather is cool today")
// }
// else if(temp > 10){
//     document.write("Today's weather is so cool")
// }
// else{
//     document.write("Enter correct temperature");
// }


// ======= Q11 ========

// not understand



// ==================Chapter 12-13=====================


// ======= Q1 ========

// var string = "A"
// var code = string;
// if(code === 65){
//     alert("VARIABLE A AND ASCII CODE IS 65")
// }
// else{
//     alert("no")
// }






// ======= Q2 ========

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// if(num1 > num2){
//     document.write("Number 1 is greatr than Number 2");
// }
// else if(num1 < num2){
//     document.write("Number 2 is greater than Number 1");
// }
// else if(num1 = num2){
//     document.write("Number 1 = Number 2");
// }
// else{
//     document.write("Pls enter number");
// }




// ======= Q3 ========
// var num = prompt("Enter a number");
// if(num > 0){
//     document.write("positive number");
// }
// else if(num < 0){
//     document.write("negative number");
// }
// else if(num == 0){
//     document.write("zero");
// }
// else{
//     document.write("Enter correct number")
// }

// ======= Q4 ========
// var vowel = prompt("Enter any character");

// if(vowel == "a"| vowel =="e" | vowel == "i" |
// vowel == "o"  | vowel == "u"){
//     document.write("true");
// }
// else{
//    document.write("False")
// }


// ======= Q5 ========
 
//  var userpas = prompt("Enter your password");
//  var JS = "usman";

//  if(userpas === JS){
//     document.write("Correct! The password you entered matches the original password")
//  }
//  else if(userpas != JS){
//     document.write("Incorrect password");
//  }
//  else{
//     document.write("Please enter your password");
//  }


// ======= Q6 ========
// Error correction
// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting ="Good day";
// }
// else{
//     greeting = "Good evening";
// }


// ======= Q7 ========
// var time = +prompt("Enter time in Format like 1900");
// if(time >= 0000 && time < 1200){
//     document.write("Good morning");
// }
// else if(time >= 1200 && time < 1700){
//     document.write("Good Afternoon");
// }
// else if(time >= 1700 && time < 2100){
//     document.write("Good morning");
// }
// else if(time >= 2100 && time <= 2359){
//     document.write("Good night");
// }
// else{
//     document.write("Enter corect time");
// }






