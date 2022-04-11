//MATH in JavaScript
//Math works only for numbers
/* 
Math.abs()
Math.cbrt()
Math.ceil()
Math.clz32()
Math.floor()
Math.log10()
Math.log2()
Math.max()
Math.min()
Math.pow()
Math.random()
Math.round()
Math.sign()
Math.trunc()
*/


//Math.abs() returns the absolute value of given number
console.log(Math.abs(-10));

//Math.cbrt() returns the cube root of the given value 
console.log(Math.cbrt(27));
console.log(Math.cbrt(21));

//Math.ceil() returns the nearest integer greater than the given number
console.log(Math.ceil(2.4467))

//Math.clz32() //returns the number os leading zeroes of a number in 32 bit binary representation
console.log(Math.clz32(1)) // 1 in 32-bit binary 0000000000000000000000000000001

//Math.floor() return the nearest integer lesser than the given number
console.log(Math.floor(4.8)) //4

//Math.log10() returns the logarithmic value of given number under base 10
console.log(Math.log10(10))
console.log(Math.log10(100))
console.log(Math.log10(5))

//Math.log2() returns the logarithmic value of given number under base 2
console.log(Math.log2(4))
console.log(Math.log2(100))
console.log(Math.log2(5))

//Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one
console.log(Math.max(25,-1,45,88))
console.log(Math.max('4',5,6))

//The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
console.log(Math.min(-2, -3, -1));







// Math.pow() parameters (base, exponent), returns base**exponent.
console.log(Math.pow(3,4))




// Math.random() generates a random number between 0 and 1 
console.log(Math.random()) //lies between 0 and 1 (1 exclusive)

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(getRandom(1,10))




// Math.round() returns the nearest integer value
console.log(Math.round(4.8))
console.log(Math.round(4.2))



//Math.sign() returns 1 for +ve and -1 for -ve numbers and +/-0 for 0
console.log(Math.sign(-45))
console.log(Math.sign(45)) 
console.log(Math.sign(0))
console.log(Math.sign(-0))

// Math.trunc() returns the integral part removing the decimal part of given number 

console.log(Math.trunc(4.39399))
console.log(Math.trunc(4.9999))




