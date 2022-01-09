/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
 function sayHello(name){
   alert(`Hello ${name}`);

 }




/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

function getFullName(firstName,lastName){
  let fullName=(`${firstName} ${lastName}`);
  return fullName;
}

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/


function addTwoNumbers(firstNum,seconNum){
   if(typeof(firstNum)=== typeof(seconNum)){
   return firstNum+seconNum;
   }else{
     alert("Enter valid Input");
   }
}
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function cal(numA,numB,operation){
 if(operation===add){
   if(typeof(numA)===typeof(numB)){
     return numA+numB;
   }else{
     alert(`Enter Valid Input`);
   }
 }else if(operation===div){
  if(typeof(numA)===typeof(numB)){
    return numA-numB;
  }else{
    alert(`Enter Valid Input`);
  }
}else if(operation===mul){
  if(typeof(numA)===typeof(numB)){
    return numA*numB;
  }else{
    alert(`Enter Valid Input`);
  }
}else if(operation===div){
  if(typeof(numA)===typeof(numB)){
    return numA%numB;
  }else{
    alert(`Enter Valid Input`);
  }
}else{
  alert(`Invalid Input`);
}


}



function calc(first,second,oper){
  if( typeof first!="number" || typeof second !="number"){
alert (`Enter valid `)
}else{
switch(oper){
   case "add":
return first+second;
   case "sub":
return first-second;
   case "mul":
return first*second;
   case "div":
return first%second;
   default:
return `Invalid`;
}
}
}

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

function isLeapYear(){
  let year=+prompt("Enter a year");
  if(year%400===0){
    alert(`true`);
  }else if(year%100===0){
    alert(`false`);
  }else if(year %4=== 0){
    alert(`true`);
  }else{
    alert(`false`);
  }
}
 


function isLeapYear(year){
  typeof(year)===typeof(5);
  if(year%400===0){
    alert(`true`);
  }else if(year%100===0){
    alert(`false`);
  }else if(year %4=== 0){
    alert(`true`);
  }else{
    alert(`false`);
  }
}

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(number){
  let fact=1;
  for(i=1;i<=number;i++){
    fact =fact*i
  }
    return fact;
}
