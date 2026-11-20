// Age Check Conditional Statement Example
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}
else    {
    console.log("You are a minor.");
}

// Credit card eligibility check conditional statement example
if (age >= 21 && age <= 65 && limit >= 5000) {
    console.log("You are eligible for a credit card.");
}
else {
    console.log("You are not eligible for a credit card.");
}

//ternary operator example
let accessLevel = (age >= 18) ? "Adult" : "Minor";
console.log("Access Level:", accessLevel); // Output: Access Level: Adult
let creditCardEligibility = (age >= 21 && age <= 65 && limit >= 5000) ? "Eligible for a credit card." : "Not eligible for a credit card.";