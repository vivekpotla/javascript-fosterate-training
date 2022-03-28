let a=[5,6,8];
console.log(a)


let cities = ['Hyderabad', 'Warangal', 'Mumbai', 'Delhi'];
console.log(cities);
cities[0]='Dubai';
console.log(cities);
cities =['Vizag', 'Agra','Chennai'];
console.log(cities);


const utensils = ['Fork', 'Knife', 'pan', 'Spork'];
utensils[3]='Spoon';
console.log(utensils);


// array methods *******************************************

// .length property in arrays 
// length of array is given by variable_name.length
console.log(utensils.length);


// .push() method in array  (adds element to last index )
cities.push('Kolkata');
console.log(cities);


//pop method ( pops out the last element of the array )
// .pop() returns the last element i.e removed element
let removed= cities.pop()
console.log ("The removed element is ", removed );
console.log("Array is ",cities);

// .shift() method 
//removes the first element and returns the removed element
//If the length property is 0, undefined is returned
let shifted = cities.shift()
console.log( cities)
console.log(shifted)

//   .unshift() method 
//The unshift() method adds one or more elements to the beginning 
//returns the new length of the array.
console.log(cities.unshift('Kolkata', 'Delhi'));
console.log(cities)

//The .slice() method returns a shallow copy of a portion of an array into a new array object
// selected from start to end (range of indices given as arguments)
//The original array will not be modified.
let topCities= cities.slice(1,3);
console.log(topCities);


// .splice() method 
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

cities.splice(1, 0, 'Ooty');
// inserts at index 1
console.log(cities);

cities.splice(3,1 , 'Kashmir')
console.log(cities)



//.find() method 
//returns the first element in the provided array that satisfies the provided testing function
//return undefined if no element is found 
const arr = [5, 12, 8, 130, 44];

const found = arr.find(element => element < 10);
console.log(found);


// .forEach() method 
//executes a provided function once for each array element
arr.forEach(element => console.log(element));




// .map() method 
// The map() method creates a new array populated with the results of calling a provided function 
//on every element in the calling array

const arr2 = arr.map(x => x * 2);
console.log(arr2);



//.join() method ******************

const elements = ['Car', 'Bus', 'Auto'];
console.log(elements.join()); //joins with ','
// expected output: "Car,Bus,Auto"
console.log(elements.join(''));
// expected output: "CarBusAuto"
console.log(elements.join('-'));
// expected output: "Car-Bus-Auto"



//.filter() method 
// creates a new array with all elements that pass the test 
//implemented by the provided function

const result = cities.filter(word => word.length >= 5); //returns elements satisfying length>=5
console.log(result) 












