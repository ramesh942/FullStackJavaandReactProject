// Arry of items to be stored in localStorage
const cart = [
    {id: 1, name: "Laptop", price: 1200, quantity: 1},
    {id: 2, name: "Mouse", price: 350, quantity: 2},
    {id: 3, name: "Keyboard", price: 1880, quantity: 1},
];
// Convert the cart array to a JSON string and store it in localStorage 
localStorage.setItem("cart", JSON.stringify(cart));
  // Read save string back from lovcalStorage and parse it back into an array of objects
const rawCart = localStorage.getItem("cart");
// convert  json string back to array of objects
const restoredCart = rawCart ? JSON.parse(rawCart) : [];

console.log("Restored Item Count:", restoredCart.length);
console.log("Restored Cart:", restoredCart[0].name);
