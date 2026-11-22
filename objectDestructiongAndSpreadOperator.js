// Defination : Object destructuring and the spread operator are two powerful features in JavaScript that allow you to extract values from objects and arrays, as well as create new objects or arrays by combining existing ones.
//object ({}) = // Object destructuring is a syntax that allows you to extract values from an object and assign them to variables in a concise way. It uses curly braces {} to specify the properties you want to extract.
//syntax 
{KeyboardEvent,value};
// Destructuring Example = // destructuring allows you to extract values from an object and assign them to variables in a concise way. It uses curly braces {} to specify the properties you want to extract.
//Spread Operator Example = // The spread operator (...) allows you to create new objects or arrays by spreading the properties or elements of existing ones. It can be used to merge objects, copy arrays, or pass elements as function arguments.
const person = {name: "John", age: 30, city: "New York"};
const {name, age, city} = person; // Destructuring
const newPerson = {...person, country: "USA"}; // Spread Operator
console.log("Destructured Values:", name, age, city); // Output: Destructured Values: John 30 New York
console.log("New Person Object:", newPerson); // Output: New Person Object: { name: 'John', age: 30, city: 'New York', country: 'USA' }


// Dom Manipulation = // DOM manipulation refers to the process of using JavaScript to interact with and modify the Document Object Model (DOM) of a web page. The DOM is a representation of the HTML structure of a web page, and it allows developers to access and manipulate elements, attributes, and content dynamically.
document.getElementById("myElement").innerHTML = "Hello, World!"; // Changes the content of the element with id "myElement" to "Hello, World!"
// Event Listeners = // Event listeners are functions that are attached to HTML elements and are executed when a specific event occurs, such as a click, mouseover, or keypress. They allow developers to create interactive web pages by responding to user actions.
addEventListener("click", function() {
    alert("Element clicked!");
});

// Asynchronous JavaScript (async /await & fetch )= // Asynchronous JavaScript allows you to perform tasks that may take some time to complete, such as fetching data from a server, without blocking the execution of other code. This is typically done using callbacks, promises, or async/await syntax.
fetch("https://api.example.com/data") // Sends a request to the specified URL to retrieve data.
    .then(response => response.json()) // Converts the response to JSON format.
    .then(data => {
        console.log("Fetched Data:", data); // Logs the fetched data to the console.
    })
    .catch(error => {
        console.error("Error fetching data:", error); // Logs any errors that occur during the fetch operation.
    });
async function fetchData() { // Defines an asynchronous function named fetchData.
    try {
        const response = await fetch("https://api.example.com/data"); // Waits for the fetch request to complete.
        const data = await response.json(); // Waits for the response to be converted to JSON format.
        console.log("Fetched Data:", data); // Logs the fetched data to the console.
    } catch (error) {
        console.error("Error fetching data:", error); // Logs any errors that occur during the fetch operation.
    }
}
await fetchData(); // Calls the fetchData function and waits for it to complete.
