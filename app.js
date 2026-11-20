
// Variables - //Variables are used to store data values. In JavaScript, there are three ways to declare variables: using var, let, and const. Each has its own characteristics and scope rules.

const companyName = "Tech Innovators Inc."; // Constants cannot be reassigned  redecleration also not allow, scope  block scoped 
let bugCount = 5; // let can be reassigned but not redeclared in the same scope, block scoped
bugCount = 3; // allow redeclaration in the same scope, block scoped
companyName = "Tech Innovators LLC"; // This will cause an error because companyName is a constant
var employeeName = "John Doe";  // can be reassigned and redeclared, function scoped
var employeeName = "Jane Smith"; // This is allowed because var allows redeclaration in the same scope
console.log("Company Name:", companyName,"bugCount:", bugCount, "Employee Name:", employeeName);

 //Data Types = // JavaScript has dynamic types, meaning you don't have to declare the type of a variable. The type is determined automatically based on the value assigned to the variable.
  // A sequence of characters used to represent text. Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
   var greeting = "Hello, World!"; // String using double quotes
   const farewell = 'Goodbye!'; // String using single quotes
   let message = `Welcome to ${companyName}`; // String using backticks for template literals
   Number = // Represents both integer and floating-point numbers. JavaScript uses the IEEE 754 standard for representing numbers.
   var age = 30; // Integer;
   var price = 19.99; // Floating-point number
    Boolean = true // false // Represents a logical entity and can have two values: true or false. Booleans are often used in conditional statements and loops.
    var isAvailable = true; // Boolean value true
    var isCompleted = false; // Boolean value false
    if (isAvailable) {
        console.log("The item is available.");
    }
    else {
        console.log("The item is not available.");
    }
undefined = // A variable that has been declared but has not yet been assigned a value is of type undefined. It indicates the absence of a value.
var uninitializedVar; // This variable is declared but not assigned a value, so it is undefined
Null = // Represents the intentional absence of any object value. It is often used to indicate that a variable should not point to any object.
let emptyValue = null; // This variable is explicitly set to null, indicating it has no value


Operators = // Operators are special symbols that perform operations on operands (values and variables). JavaScript has various types of operators, including arithmetic, assignment, comparison, logical, and more.
Arthmetic Operators =// Used to perform mathematical operations on numbers. They include addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
Strict Equality Operator (===) = // Compares both value and type, returning true only if both are the same. For example, 5 === 5 returns true, while 5 === '5' returns false.
Equality Operator (==) = // Compares only the value, allowing type coercion. For example, 5 == '5' returns true, while 5 == 5 returns true as well.

e.g 
if (5 === '5') {
    console.log("Strict equality: true");
}
else {
    console.log("Strict equality: false");
}

e.g
if (5 == '5') {
    console.log("Equality: true");
}
else {
    console.log("Equality: false");
}
Logical Operators = // Used to combine or invert boolean values. They include AND (&&), OR (||), and NOT (!).
AND (&&) = // Returns true if both operands are true. For example, true && true returns true, while true && false returns false.
Logical OR (||) = // Returns true if at least one of the operands is true. For example, true || false returns true, while false || false returns false.

Temlpate Literals = // Template literals are a way to create strings in JavaScript that allow for embedded expressions and multi-line strings. They are enclosed in backticks (` `) instead of single or double quotes.
 const name = "Alice";
 const age = 25;
   console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Alice and I am 25 years old.
Conditional Statements = // Conditional statements allow you to execute different blocks of code based on certain conditions. The most common conditional statements in JavaScript are if, else if, and else.

if (age >= 18) {
    console.log("You are an adult.");
 }
 else
 {
    console.log("You are a minor.");
 }
Ternary Operator = // The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
let accessLevel = (age >= 18) ? "Adult" : "Minor";
console.log("Access Level:", accessLevel); // Output: Access Level: Adult