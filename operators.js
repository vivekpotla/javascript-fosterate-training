/* 
Assignment Operators
Arithmetic Operators
Logical  Operators
Bitwise Operators
*/


var a ,b;

//Assignment operators *************
a=25;
b=40;
console.log("a = ",a," b = " , b);




//Arithmetic Operators***********************

//addition
console.log(a+b);
//subtraction
console.log(a-b);
//product
console.log(a*b);
//division
console.log(a/b);
//remainder
console.log(a%b); 
 //post-increment
console.log(a++); 
//after incrementing 
console.log(a);  

console.log(++a);  //pre-increment

console.log(b++);  //post-decrement
console.log(++b);  //pre-decrement

console.log("a POWER b",a**b); 
let z= Math.pow(a,b); // this is inbuilt function
console.log(z);



//combining assignment with arithmetic*****

a+=40; //adds and assigns RHS to LHS
// console.log(a)
a-=30;
a*=2;
a/=2;


//Comparison Operators******************
//return true if correct ,else false .

console.log(a==b);  //  == checks only value and return true if correct else false

console.log(a===b); // === checks datatypes too 

console.log(a!=b);
console.log(a!==b); 

console.log(a>=b);
console.log(a<=b);

//Logical Operators****************
console.log(a>5 && b>5);
console.log(a<5 || b<5);
console.log(!true);

//Bitwise Operators****************
console.log(a|b); //or 
console.log(a&b); //and
console.log(a^b);  //xor
console.log(a>>b); //right shift
console.log(a<<b); //left shift
console.log(~a);   //not



