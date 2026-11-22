// In real e-commerce apps(like Amazon, Flipkart, Myntra, etc.), a card holds an array of item objects ( price * qty), and a loop
// calculate the grand total and applies free shipping rules Similarly, login screens use a while loop to look an acoount after 3 failed OTP attempts.
// Real card data for an e-commerce application Array of objects representing items in a shopping cart. Each object contains the name, price, and quantity of an item. The total cost is calculated by multiplying the price by the quantity for each item and summing these values. If the total cost exceeds a certain threshold (e.g., $100), free shipping is applied.
const cartItems = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Mouse", price: 350, quantity: 2 },
    { name: "Keyboard", price: 1880, quantity: 1 },
]
let subTotal = 0;

for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    // Calculate the subtotal by multiplying the price and quantity of each item and adding it to the running total
    subTotal += item.price * item.quantity;
}

const deliverFree = subTotal >= 2000 ?0:99;
const grandTotal = subTotal + deliverFree;
console.log(`Subtotal: $${subTotal.toFixed(2)}, Delivery Fee: $${deliverFree.toFixed(2)}, Grand Total: $${grandTotal.toFixed(2)}`);