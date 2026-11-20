// Coffee shop Receipt 

const coffeeName = "Cappuccino";
const coffeePrice = 5;
const quantity = 2;
const totalPrice = coffeePrice * quantity;
if (totalPrice >= 10) {
    console.log(`Your total for ${quantity} ${coffeeName}s is $${totalPrice.toFixed(2)}. You qualify for a discount!`);
}
else { 
    console.log(`Your total for ${quantity} ${coffeeName}s is $${totalPrice.toFixed(2)}.`);
}