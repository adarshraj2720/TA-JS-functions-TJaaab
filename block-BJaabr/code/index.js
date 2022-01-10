// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
`string`
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n){
 return n+1;
}

// - Write a Function Expression

let addOne =  function(n){
  return n+1;
}
// - Write an Arrow Function without curly brackets(if possible)
let addOne = n => n+1;

// - Write an Arrow Function with curly brackets
let addOne = n => {
  return n+1;
}

// - Execute the function

addOne(5)

// - Execute the function and store the return value in a variable.
let result=addOne(5);

// - What is the typeof returnValue

`number`;
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(n){
  return n-1;
 }
// - Write a Function Expression
let substractOne = function (n){
  return n-1;
 }
// - Write an Arrow Function without curly brackets(if possible)
 let substractOne  = n => n-1;
// - Write an Arrow Function with curly brackets
let substractOne  = n =>{
     return n-1;
} 
// - Execute the function
 substractOne(10)
// - Execute the function and store the return value in a variable.

let result= substractOne(10);

// - What is the typeof returnValue
 `number`
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a,b){
  return a+b;
}

// - Write a Function Expression
let sum= function (a,b){
  return a+b;
}

// - Write an Arrow Function without curly brackets(if possible)
let sum = (a,b) => a+b;

// - Write an Arrow Function with curly brackets
let sum = (a,b) => { 
  return a+b;
}

// - Execute the function
sum(5,54);

// - Execute the function and store the return value in a variable
let result = sum(45,5);

// - What is the typeof returnValue
 `number`
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
 function square(number){
  return number*number;

 }
// - Write a Function Expression
let square = function double(number){
  return n*n;
}
// - Write an Arrow Function without curly brackets(if possible)
 let square = (number) => number*number;

// - Write an Arrow Function with curly brackets
let square = (number) => {
  return number*number;
}
// - Execute the function
square(552);


// - Execute the function and store the return value in a variable

let result = square(55);

// - What is the typeof returnValue
 `number`;
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
 function isGreater(x,y){
    if(x>y){
      return `true`;
    }else{
      return `false`;
    }
 }
// - Write a Function Expression
let isGreater= function greater(x,y){
  if(x>y){
    return `true`;
  }else{
    return `false`;
  }
}

// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x,y) => x>y ? `true` :`false`

// - Write an Arrow Function with curly brackets
let isGreater = (x,y) =>{

  if(x>y) {
  
  return `true` ;
  }else{
    return `false`;
  }
}
// - Execute the function
 isGreater(20,10);
// - Execute the function and store the return value in a variable
let result = isGreater(20,10)
// - What is the typeof returnValue
`string`
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
 function oddOrEven(number){
   if(number%2===0){
     return `${number} is even number`;
   }else{
     return `${number} is odd number`;
   }
 }

// - Write an anonymous Function Expression
let oddOrEven=function (number){
  if(number%2===0){
    return `${number} is even number`;
  }else{
    return `${number} is odd number`;
  }
}
// - Write an named Function Expression
let oddOrEven=function oddEven(number){
  if(number%2===0){
    return `${number} is even number`;
  }else{
    return `${number} is odd number`;
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven= (number) =>
  number%2===0 ?  `${number} is even number` :   `${number} is odd number`;



// - Write an Arrow Function with curly brackets
let oddOrEven= (number) =>{


  if(number%2===0) {
     return `${number} is even number` 
    }else{

     return `${number} is odd number`
    }
}
// - Execute the function
oddOrEven(89);

// - Execute the function and store the return value in a variable
let result= oddOrEven(89);
// - What is the typeof returnValue

`string`
