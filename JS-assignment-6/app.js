
// ===============CHAPTER 35-38===================
// =========Q1=========
// function time(){
//     var usman = new Date();
//     console.log(usman);
// }

// time()





// =========Q2=========
// function greet(first,last)
// {
//     var greetings = first + " "+last;
//     console.log(" Welcome! " + greetings + " How are you?")
// }

// var firstname = prompt("Enter tour First name");
// var Secondname = prompt("Enter tour Second name");
// greet(firstname, Secondname)





// =========Q3=========
// function sum(value1 , value2)
// {
//     var addition = value1 + value2;
//     console.log(addition)
// }


// var num1 = parseInt(prompt("Enter first number you want to add"));
// var num2 = parseInt(prompt("Enter second number you want to add"));

// sum(num1, num2)





// =========Q4=========
// function calclator(num1 , opr , num2)
// {
//    if(opr === "+")
//    {
//     console.log(num1 + num2);
//    }

//    else if(opr === "-")
//    {
//     console.log(num1 - num2);
//    }
//    else if(opr === "*")
//    {
//     console.log(num1 * num2);
//    }
//    else if(opr === "/")
//    {
//     console.log(num1 / num2);
//    }
// }

// var userInput1 = +prompt("enter first number");
// var operator = prompt("Enter operator ")
// var userInput2 = +prompt("enter second number");

// calclator(userInput1 , operator, userInput2)



// =========Q5=========
// function sqr(number)
// {
//    var square = number * number;
//    console.log(square)
// }

// var userInput = prompt("Enter number ");
// sqr(userInput)




// =========Q6=========
// function factorial()
// {
//     if(n === 0 || n ===1){
//         return 1;

//     } 
//     else{
//         return n * factorial(n-1);
//     }
// }


// var num = 5;
// var result = factorial(Number);
// console.log("The factiorial of ${number } is : ${result}" )

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// var number = prompt("Enter number") 
// var result = factorial(number);
// console.log("The factorial of " + result + "is:" + result);




// =========Q7=========
// function count()
// {
//     var first = +prompt("Enter first number");
//     var second = +prompt("Enter second number");
//     var countingresult = "";
//     for(var i = first ; i<= second; i++){
//     countingresult += i + " " ;
//   }
//      console.log(countingresult)  
// }


// count()




// =========Q8=========
//  not understand




// =========Q9=========
// function areaofRectangle(width,height)
// { 
//    var area = width * height;
//    console.log("Area of Rectangle :" + area)
// }
// var userwidth = prompt("Enter width to calculate area of Rectangle");
// var userheight = prompt("Enter height to calculate area of Rectangle");

// areaofRectangle(userwidth, userheight)







// =========Q10=========
// function palindrome(input)
// {
//    var check = "";
//    for(var i = input.length -1  ; i>= 0 ; i--){
//     // console.log(input[i])
//     check += input[i]
//    }
//    if(input === check){
//     console.log(input + " is a palindrome")
//    }
//    else{
//     console.log(input + " is not a palindrome")
//    }
// }


// var userInput = prompt("Enter any word");
// palindrome(userInput)




// =========Q12========= 
// function findlongestword(input)
// {
//     var words = input.split(' ')
//   var longestword = "";
//   for(let i = 0; i<words.length; i++ ){
//     if(words[i].length > longestword.length){
//         longestword = words[i]
//     }
//   }
//   return longestword;
// }


// var string  = "Web Development Tutorial";
// var longestword = findlongestword(string)
// console.log(longestword)




// =========Q14========= 
// function calcCircumference(radius)
// {
//    var calculate = 2*3.142*radius;
//    return calculate
// } 
// function calcArea(radiusofarea)
// {
//     var calculatearea = 3.142 * (radiusofarea*radiusofarea);
//      return calculatearea
// }


// var userradius = prompt("Enter radius to calculate Circumference of a circle");
// var userradiusforarea = prompt("Enter radius to calculate Area of circle")

// var resultofCircumference = calcCircumference(userradius);
// console.log("The Circumference of circle is :" +resultofCircumference);

// var resultOfArea = calcArea(userradiusforarea)
// console.log("The Area of circle is :" + resultOfArea)