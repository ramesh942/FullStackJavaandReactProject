// Array // Array is a built-in JavaScript object that is used to store multiple values in a single variable. It is a special type of object that allows you to create a list-like structure to hold data. Arrays can hold elements of any type, including numbers, strings, objects, and even other arrays;
//  why used // if you want to store multiple values in a single variable, such as a list of items, a collection of data, or a series of related values. Arrays provide a convenient way to organize and manipulate data in JavaScript. They are commonly used in programming for tasks like iterating through lists, storing user inputs, managing collections of objects, and more. Arrays also come with built-in methods that make it easy to perform operations like adding, removing, sorting, and filtering elements.
 let car1 = "Toyota";
 let car2 = "Honda";
 let car3 = "Ford";

//  syntax = // Arrays are defined using square brackets [] and can contain elements separated by commas. Each element in an array has an index, starting from 0 for the first element, 1 for the second, and so on. You can access elements in an array using their index.
//  const array = ["item1", "item2", "item3"];

// Basic Array Mehodes = // JavaScript provides several built-in methods to work with arrays. Some common array methods include:
//1.Array Length = // The length property returns the number of elements in an array. It can be used to determine the size of the array or to iterate through its elements.
const fruits = ["apple", "banana", "orange"];
let numberOfFruits = fruits.length; // numberOfFruits will be 3
console.log("Number of fruits:", numberOfFruits);
//2.toString() = // The toString() method converts an array to a string representation, with elements separated by commas. It is useful for displaying the contents of an array as a string.
const colors = ["red", "green", "blue"];
let colorsString = colors.toString(); // colorsString will be "red,green,blue"
console.log("Colors as string:", colorsString);
//3.at() = // The at() method allows you to access elements in an array using a positive or negative index. A positive index counts from the beginning of the array (0-based), while a negative index counts from the end of the array (-1 for the last element, -2 for the second-to-last, and so on).
const numbers = [10, 20, 30, 40, 50];
let firstNumber = numbers.at(0); // firstNumber will be 10
let lastNumber = numbers.at(-1); // lastNumber will be 50
console.log("First number:", firstNumber,lastNumber);
//4.concat() = // The concat() method is used to merge two or more arrays into a new array. It does not modify the original arrays but returns a new array containing the combined elements.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2); // combinedArray will be [1, 2, 3, 4, 5, 6]
console.log("Combined array:", combinedArray);

//5.join() = // The join() method is used to create a string by concatenating all the elements of an array, separated by a specified delimiter. If no delimiter is provided, it defaults to a comma.
const words = ["Hello", "World"];
let joinedString = words.join(" "); // joinedString will be "Hello World"
console.log("Joined string:", joinedString);
//6.pop() = // The pop() method is used to remove the last element from an array and return that element. It modifies the original array by reducing its length by one.
const animals = ["cat", "dog", "rabbit"];
let lastAnimal = animals.pop(); // lastAnimal will be "rabbit", and animals will now be ["cat", "dog"]
console.log("Last animal removed:", lastAnimal);
// 7.push() = // The push() method is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.
const numbersArray = [1, 2, 3];
let newLength = numbersArray.push(4, 5); // numbersArray will now be [1, 2, 3, 4, 5], and newLength will be 5
console.log("New length after push:", newLength);
//Array() Constructor = // The Array constructor is a built-in function in JavaScript that allows you to create new array instances. It can be used to create arrays with a specified length or to create arrays with initial elements. The Array constructor can be called with or without the new keyword, but using new is the recommended approach for clarity and consistency.
//  syntax = // The syntax for using the Array constructor is as follows:
    // new Array(); // Creates an empty array
    // new Array(length); // Creates an array with the specified length (number of elements)
    // new Array(element0, element1,elementN); // Creates an array with the specified elements
    // Array search methods = // JavaScript provides several built-in methods to search for elements in an array. Some common array search methods include:
    // Array.prototype.indexOf() = // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It performs a strict equality comparison (===) to determine if the element exists in the array.
    // e.g
    const fruitsArray = ["apple", "banana", "orange"];
    let indexOfBanana = fruitsArray.indexOf("banana"); // indexOfBanana will be 1
    console.log("Index of banana:", indexOfBanana);
    // Array.prototype.last() = // The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. It also performs a strict equality comparison (===) to determine if the element exists in the array.
    let lastIndexOfFruit = fruitsArray.lastIndexOf("orange"); // lastIndexOfFruit will be 2
    console.log("Last index of orange:", lastIndexOfFruit);
    // Array.prototype.include() = // The include () return true if the array contains a certain element, and false otherwise. It performs a strict equality comparison (===) to determine if the element exists in the array.
    let includesApple = fruitsArray.includes("apple"); // includesApple will be true
    let includesGrapes = fruitsArray.includes("grapes"); // includesGrapes will be false
    console.log("Includes apple:", includesApple);
    console.log(includesGrapes)
    // Array.prototype.find() = // The find() method returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined.
    const numbersArray2 = [1, 2, 3, 4, 5];
    let foundNumber = numbersArray2.find((num) => num > 3); // foundNumber will be 4
    console.log("Found number greater than 3:", foundNumber);
    // Array.prototype.findIndex() = // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns -1.
    let foundIndex = numbersArray2.findIndex((num) => num > 3); // foundIndex will be 3
    console.log(foundIndex)
    //Array.prototype.findLast() = // The findLast() method returns the value of the last element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined.
    let foundLastNumber = numbersArray2.findLast((num) => num < 4); // foundLastNumber will be 3
    console.log("Found last number less than 4:", foundLastNumber);
    // Array.prototype.findLastIndex() = // The findLastIndex() method returns the index of the last element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns -1.

    let foundLastIndex = numbersArray2.findLastIndex((num) => num < 4); // foundLastIndex will be 2
    console.log("Found last index of number less than 4:", foundLastIndex);

    //Array sort = // Sorting is ued to sort

    // Array sort () = // The sort() method is used to sort the elements of an array in place and returns the sorted array. By default, the sort() method sorts the elements as strings in ascending order. However, you can provide a custom comparison function to define the sorting order.
const  car = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
car.sort(); // Sorts the array in ascending order (alphabetical order)
console.log("Sorted car array:", car); // Output: Sorted car array: [ 'Audi', 'BMW', 'Ford', 'Honda', 'Toyota' ]
// Array.prototype.reverse() = // The reverse() method is used to reverse the order of the elements in an array in place. It modifies the original array and returns the reversed array.
const numbersArray3 = [1, 2, 3, 4, 5];
numbersArray3.reverse(); // Reverses the order of elements in the array
console.log("Reversed numbers array:", numbersArray3); // Output: Reversed numbers array: [ 5, 4, 3, 2, 1 ]
//Array.prototype.toSorted() = // The toSorted() method is used to create a new array with the elements sorted in ascending order. It does not modify the original array but returns a new sorted array.
const unsortedArray = [5, 2, 8, 1, 4];
const sortedArray = unsortedArray.toSorted(); // Creates a new sorted array
console.log("Original unsorted array:", unsortedArray); // Output: Original unsorted array: [ 5, 2, 8, 1, 4 ]
console.log("New sorted array:", sortedArray); // Output: New sorted array: [ 1, 2, 4, 5, 8 ]

// Array.prototype.toReversed() = // The toReversed() method is used to create a new array with the elements in reverse order. It does not modify the original array but returns a new reversed array.
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.toReversed(); // Creates a new reversed array
console.log("Original array:", originalArray); // Output: Original array: [ 1, 2, 3, 4, 5 ]
console.log("New reversed array:", reversedArray); // Output: New reversed array: [ 5, 4, 3, 2, 1 ]

// Array.prototype.toSpliced() = // The toSpliced() method is used to create a new array by removing or replacing elements from the original array. It does not modify the original array but returns a new array with the specified changes.
const originalArray2 = [1, 2, 3, 4, 5];
const splicedArray = originalArray2.toSpliced(1, 2, 10, 20); // Removes 2 elements starting from index 1 and adds 10 and 20
console.log("Original array:", originalArray2); // Output: Original array: [ 1, 2, 3, 4, 5 ]

// Array Itration Methode = // Array itration methode operate in each element of the array and perform a specific action or transformation. Some common array iteration methods include:
// Array forEach() = // The forEach() method is used to execute a provided function once for each array element. It does not return a new array but allows you to perform actions on each element.
// e.g 
const numbers1 = [1, 2, 3, 4, 5];
let text = "";
function myFunction(value, index, array) {
  text += value + " ";
}
numbers1.forEach(myFunction)

console.log("forEach output:", text); // Output: forEach output: 1 2 3 4 5

// Array map() = // The map() method is used to create a new array by applying a provided function to each element of the original array. It returns a new array containing the results of the function applied to each element.
// Array filter() = // The filter() method is used to create a new array containing only the elements that satisfy a specified condition. It returns a new array with the filtered elements.
// Array reduce() = // The reduce() method is used to apply a function to an accumulator and each element of the array (from left to right) to reduce it to a single value. It returns the final accumulated value.
// Array some() = // The some() method is used to check if at least one element in the array satisfies a specified condition. It returns true if at least one element meets the condition, and false otherwise.
// Array every() = // The every() method is used to check if all elements in the array satisfy a specified condition. It returns true if all elements meet the condition, and false otherwise.
// Array from() = //     The from() method is used to create a new array from an array-like or iterable object. It allows you to convert objects such as strings, sets, or maps into arrays.
// Array keys ( ) = // The keys() method is used to create a new array iterator object that contains the keys (indices) of the array. It allows you to iterate over the indices of the array elements.
// Array entries() = // The entries() method is used to create a new array iterator object that contains key-value pairs for each index in the array. It allows you to iterate over both the indices and values of the array elements.
// Array with() = // The with() method is used to create a new array by replacing an element at a specified index with a new value. It does not modify the original array but returns a new array with the updated value.
// Array Spread() = // The spread operator (...) is used to expand the elements of an array into individual elements. It can be used to create a new array by combining existing arrays or adding new elements.
// Array Rest = // The rest parameter syntax (...) allows you to represent an indefinite number of elements as an array. It is used in function parameters to collect all remaining arguments into a single array.


// Map  // The map() method is used to create a new array by applying a provided function to each element of the original array. 
//It returns a new array containing the results of the function applied to each element.
const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers2.map(square);
 // Creates a new array with squared values
console.log("Squared numbers:", squaredNumbers); // Output: Squared numbers: [ 1, 4, 9, 16, 25 ]

// Define the square function for map
function square(num) {
    return num * num;
}

//forEach = // The forEach() method is used to execute a provided function once for each array element. It does not return a new array but allows you to perform actions on each element.
const numbers3 = [1, 2, 3, 4, 5];
let txt = "";
numbers3.forEach(myFunction2); // Calls myFunction2 for each element in the array
console.log("forEach output:", txt); // Output: forEach output: 1 2 3 4 5
function myFunction2(value, index, array) {
    txt += value + " ";
}

// filter = // The filter() method is used to create a new array containing only the elements that satisfy a specified condition. It returns a new array with the filtered elements.
const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers4.filter(isEven); // Creates a new array with even numbers
console.log("Even numbers:", evenNumbers); // Output: Even numbers: [ 2, 4 ]
function isEven(num) {
    return num % 2 === 0;
}



