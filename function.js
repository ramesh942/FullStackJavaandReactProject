// function // function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it). Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript can be defined using the function keyword, followed by a name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.
// Arrow Functions = // Arrow functions are a more concise syntax for writing functions in JavaScript. They are defined using the arrow (=>) syntax and do not have their own this context. Arrow functions are often used for short, single-expression functions. 



const calculateGst = (amount, gstRate) => {
    const gstAmount = (amount * gstRate) / 100;
    return gstAmount;
}

console.log("GST Amount for $100 at 5% GST:", calculateGst(100, 5)); // Output: GST Amount for $100 at 5% GST: 5

// Arrow function
const doubleNumber = (num) => num * 2;
console.log("Double of 4 is:", doubleNumber(4)); // Output: Double of 4 is: 8
 
convertToMinutes = (hours) => hours * 60;
console.log("Convert 2 hours to minutes:", convertToMinutes(2)); // Output: Convert 2 hours to minutes: 120