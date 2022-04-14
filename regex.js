/*********Regular Expressions in JavaScript ***********/

let str = "Hi, how Are you doing? Hello! are you fine?"
console.log(str.match(/are/gi)) //all the matching case-insensitive
console.log(str.match(/are/g)) //all the matching case-sensitive
console.log(str.match(/are/))   //only first match - case sensitive
console.log(str.match(/are/i))  //only first match - case insensitive



let arr=str.match(/are/);

console.log(arr.index)
console.log(arr.input)


let matches = "no match"
console.log(matches.match(/are/gi));


//use $& symbol before the replacing string not to remove the previous one and concatenate
console.log("I am coming".replace(/coming/, "$& to Hyderabad"));


/*The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
 The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match */
 const p = 'He is on way and he left us very soon';

 console.log(p.replaceAll('he', 'She'));
 
 
 // global flag required when calling replaceAll with regex
 const regex = /he/gi;
 console.log(p.replaceAll(regex, 'she'));


 //at() return character at that index  of the string
 console.log(p.at(3))

 const s1 = 'Hello';
 const s2 = 'World';
 

 //concat()
 console.log(s1.concat(' ', s2)); //using " " between 
 console.log(s1.concat(',',s2));  //using  "," between

 //endsWith()
 const str1 = 'Cats are the best!';
console.log(str1.endsWith('best', 17)); //last index of the given search

const str2 = 'Is this a question';
console.log(str2.endsWith('?'));


//repeat()
const greet = 'Thank you ';
console.log(`I loved it : ${greet.repeat(5)}`);

//slice()
//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
const strin1 = 'I am very happy today!';
console.log(strin1.slice(0,15));
// expected output: "I am very happy"
console.log(strin1.slice(4));
// expected output: "very happy today!"
console.log(strin1.slice(-6));
// expected output: "today!"
console.log(strin1.slice(-12, -7));
// expected output: "happy"


//split()
const string1 = 'John was very happy today';

const words = string1.split(' ');
console.log(words);
// expected output: "[ 'John', 'was', 'very', 'happy', 'today' ]"

const chars = string1.split('');
console.log(chars[6]);
// expected output: "a"

const string1Copy = string1.split();
console.log(string1Copy);

//search()
let sentence = "Hello there! How are you?"; 
let n = sentence.search(/are you/i);
console.log(n)

//trim()
const greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   "
console.log(greeting.trim());
// expected output: "Hello world!"


//startsWith()
let str3 = 'He will come';
console.log(str3.startsWith('He'));
// expected output: true
console.log(str3.startsWith('Sat', 3));
// expected output: false

//toLoweCase() and toUpperCase()
console.log(str3.toLowerCase());
console.log(str3.toUpperCase());
//he will come
//HE WILL COME












