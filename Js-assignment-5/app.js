

// ==========CHAPTER 21===============


// ========Q1========
// var userInput = prompt("enter any thing..")
// var allLower = userInput.toLowerCase();




// ========Q2========
// var x = "USMAN";
// x = x.toLowerCase();





// ========Q3========
// var y = "usman";
// y = y.toUpperCase();





// ========Q4========
// var first = "USMAN";
// first = first.toLowerCase();
// var result = console.log(first);





// ========Q5========
// var arr = ["USMAN"];
// for(var i =0 ;i < arr.length ; i++){
// var dynamic= arr[i].toLowerCase();
    
// }
// console.log(dynamic);





// ========Q6========
// var string = "usman";
// string = string.toUpperCase();
// alert(string);





// ========Q7========
// var cityname = "kaRacHi";
// var first = cityname.charAt(0).toUpperCase();
// var remain = cityname.slice(1).toLowerCase();
// var result = first+remain;
// console.log(result)





// ==========CHAPTER 22-25===============


// ========Q1========
// var sameWords = "captain";
// var nikal = sameWords.slice(1,3);
// console.log(nikal);




// ========Q2========
// var word = "captain";
// var charcount = word.length
// console.log(charcount)



// ========Q3========
// var animal = "elephant";
// var seg = animal.slice(2,4+2);
// console.log(seg);



// ========Q4========
// var first = "usman";
// first = first.length;
// var result = console.log(first)



// ========Q5========
// var first = "examplestatement";
// charcount = first.length;
// console.log(charcount);

// var slicestring  = first.charAt(0) + first.slice(1,2+11)
// console.log(slicestring)




// ========Q6========
// var text = "To be or not to be."; 
// var indx = text.indexOf("be");

// // Answer is 3//





// ========Q7========
// var text = "To be or not to be."; 
// var indx = text.lastIndexOf("be");
// console.log(indx) 


// // Answer is 16//




// ========Q8========
// var text = " Its match time lets go babby ";
// var indx = text.indexOf("go");
// console.log(indx)





// ========Q10========
// var string = "abcde";
// var index = string.charAt(2);
//  //  answer is c



// ========Q11========
// var string = "abcdefghijkl";
// var cha = string.charAt(10);
//  console.log(cha);


// ========Q12========
// var str = "abcdefghijh";
// var x = str.charAt(7);
// console.log(x)




// ========Q13========
// var str = "usmankhan";
// var cha = str.charAt(4);
// console.log(cha);


// ========Q15========
// var arr = [];
// var str = "usman"
// for(var i =0;i<str.length;i++){
//      arr.push(str.charAt(i));
// }
// console.log(arr)





// ==========CHAPTER 26===============


// ========Q1========
// var num = 2.6;
// console.log(Math.round(num));



// ========Q2========
// var origNum = 1.4;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum)



// ========Q3========
// var origNum = 3.5;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);



// ========Q4========
// var num = 7.6;
// var round = Math.round(num);
// var result = round;
// console.log(result)



// ========Q5========

// var num = .5;
// var round = Math.floor(num);
// console.log(round);










// ========Q1========
// var random = Math.random();
// var range = Math.floor(random*50);
// console.log(range)



// ========Q2========
// var random = Math.random();
// var result = console.log(random);


// ========Q4========
// var headUser = prompt("Enter head username");

// var tailUser = prompt("Enter tail username");

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// if (floor === 0) {
//   alert(headUser + " win the toss");
// } else {
//   alert(tailUser + "win the toss");
// }






// ==========CHAPTER 28 & 29===============


// ========Q1=======
// Ans by using "+", parseInt,



// ========Q2=======
// var str = "123";
// var conv = parseInt(str);
// console.log(conv)




// ========Q3=======
// var str = "2.5";
// var conv = parseFloat(str);
// console.log(conv)




// ========Q5=======
// Ans: BY using toString*+();



// ========Q6=======
// var num = 42;
// var convert = num.toString();
// console.log(convert);



// ========Q7=======
// Ans: Yes we can convert a string representing a decimal number (e.g: "3.14") to an integar. by using parseInt(), + sign before the var. 







// ==========CHAPTER 30===============




// ========Q1=======
// var num = 32.73274234
// var newNum = num.toFixed(4).toString();
// console.log(newNum);



// ========Q2=======
// var num = 23.34324;
// var roundNum = +num.toFixed(3);
// console.log(roundNum);




// ========Q3=======
// var num = 2.3345446;
// var convert = num.toFixed(2).toString();
// if(convert > 4){
//     console.log("true");
// }
// else{
//     console.log("false")
// }





// ========Q4=======
// var num = 13.6438726493264;
// var convert = num.toFixed(2).toString();
// alert("The number rounded to 2 decimal " + convert);
