

//**********************IMPLICIT TYPE CONVERSIONS ****************** */



let ans;

// numeric string used with + gives string type 
//When a number is added to a string, JavaScript converts the number to a string before concatenation.

ans = '25' + 2; //2 is first converted to string and concatenated
console.log(ans)// "32" returned as string
console.log(typeof ans) 

ans = '25' + true; 
console.log(ans); // "3true"

ans = '25' + undefined; 
console.log(ans); // "3undefined"

ans = '25' + null; 
console.log(ans); // "3null"



// numeric string used with - , / , * results number type
ans = '6' - '2'; 
console.log(ans); // 2

ans = '6' - 2;
console.log(ans); // 2

ans = '6' * 2;
console.log(ans); // 8

ans = '6' / 2;
console.log(ans); // 2


// non-numeric string used with - , / , * results to NaN
ans = 'hello' - 'world';
console.log(ans); // NaN
ans = '6' - 'hello';
console.log(ans); // NaN

// if boolean is used, true is 1, false is 0
ans = '6' - true;
console.log(ans); // 3
ans = 4 + true;
console.log(ans); // 5
ans = 4 + false;
console.log(ans); // 4

// null is 0 when used with number
ans = 4 + null;
console.log(ans);  // 4
ans = 4 - null;
console.log(ans);  // 4


// Arithmetic operation of undefined with number, boolean or null gives NaN
ans = 20 + undefined;
console.log(ans);  // NaN

ans = 55 - undefined;
console.log(ans);  // NaN

ans = true + undefined;
console.log(ans);  // NaN

ans = null + undefined;
console.log(ans);  // NaN


//******************************************************************* */
//**********************EXPLICIT TYPE CONVERSIONS ****************** */

// string to number
ans = Number('324');
console.log(ans); // 324
ans = Number('324e-1')  
console.log(ans); // 32.4
// boolean to number
ans = Number(true);
console.log(ans); // 1
ans = Number(false);
console.log(ans); // 0

ans = Number(null);
console.log(ans);  // 0
ans = Number(' ')
console.log(ans);  // 0

ans = Number('hello');
console.log(ans); // NaN

ans = Number(undefined);
console.log(ans); // NaN

ans = Number(NaN);
console.log(ans); // NaN


ans = parseInt('20.01');
console.log(ans); // 20

ans = parseFloat('20.01');
console.log(ans); // 20.01

ans = +'20.01'; //+ converts string into numeric value if it is proper number or else NaN
console.log(ans); // 20.01

ans = Math.floor('20.01');
console.log(ans); // 20



//number to string

ans = String(324);
console.log(ans);  // "324"

ans = String(2 + 4);
console.log(ans); // "6"

//other data types to string
ans = String(null);
console.log(ans); // "null"

ans = String(undefined);
console.log(ans); // "undefined"

ans = String(NaN);
console.log(ans); // "NaN"

ans = String(true);
console.log(ans); // "true"

ans = String(false);
console.log(ans); // "false"

// using toString()
ans = (324).toString();
console.log(ans); // "324"

ans = true.toString();
console.log(ans); // "true"




// To convert other data types to a boolean, you can use Boolean().
// In JavaScript, undefined, null, 0, NaN, '' converts to false.


ans = Boolean('');
console.log(ans); // false

ans = Boolean(0);
console.log(ans); // false

ans = Boolean(undefined);
console.log(ans); // false

ans = Boolean(null);
console.log(ans); // false

ans = Boolean(NaN);
console.log(ans); // false


ans = Boolean(324);
console.log(ans); // true

ans = Boolean('hello');
console.log(ans); // true

ans = Boolean(' ');
console.log(ans); // true


