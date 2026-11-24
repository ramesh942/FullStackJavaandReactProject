//Defensive Operator (?. and ??) = // The optional chaining operator (?.) allows you to safely access nested properties of an object without causing an error if a property is undefined or null. The nullish coalescing operator (??) provides a default value when the left-hand side is null or undefined.//
// Optinal Changing Operator (?.) = // The optional chaining operator (?.) allows you to safely access nested properties of an object without causing an error if a property is undefined or null. It short-circuits and returns undefined if the property does not exist, preventing runtime errors.
//(user?.address?.street) // Safely accesses the street property of the address object, returning undefined if address is null or undefined.
// TypeError // = // A TypeError is a specific type of error that occurs in JavaScript when an operation is performed on a value of an inappropriate type. It indicates that the code is trying to use a value in a way that is not allowed for its type, such as calling a method on a non-function or accessing a property on an undefined variable.//
// TypeError:cannot read properties of undefined (reading 'street') // This error message indicates that the code attempted to access the 'street' property of an object that is undefined, leading to a TypeError. It suggests that the object being accessed does not exist or has not been properly initialized.

// Nullish Coalescing Operator (??) = // The nullish coalescing operator (??) provides a default value when the left-hand side is null or undefined. It allows you to specify a fallback value in case the primary value is not available, ensuring that your code can handle cases where a variable may be null or undefined without causing errors.//

// Simulate an API user object where 'adress' is missing (undefined) and 'credit ' is 0
const apiUser
    = {
        name: "Alice",
        credits:0 
    };
  // without '?', apiUser.address.city would throw a TypeError because 'address' is undefined. Using the optional chaining operator (?.) allows us to safely access 'city' without causing an error, and the nullish coalescing operator (??) provides a default value if 'city' is undefined.
    const city = apiUser?.address?.city ?? "City Not Provided"; // Safely access the city property, providing a default value if address is undefined
    
    const userCredits = apiUser?.credits ?? 100; // Safely access the credits property, providing a default value if credits is undefined


    console.log("User City:", city); // Output: User City: City Not Provided
    console.log("User Credits:", userCredits); // Output: User Credits: 0