// Paymnet service seperate princing rules into small ,reusable pure function so checkout screens ,invoice and mobile apps all calculates discount and gst identicllay.
// Reusable Arrow Finction  1 : Validating promo code and return discount discount amount
const applyPromoCode = (totalAmount, promoCode) => {
    if(promoCode === "SAVE10")  return totalAmount * 0.10; // 10% discount
    if(promoCode === "FLAT500"   &&  totalAmount >= 2000)return  500; // Flat $500 discount for orders above $2000
    return 0; // No discount for invalid promo codes  
}
// Reusable Arrow Function 2 : Calculate 18% GST on discounted price
const calculateTax = (netAmount)=> netAmount * 0.18

const genrateInvoice = (cartTotal, couponcode) => {
    const discountAmount = applyPromoCode(cartTotal, couponcode);
    const netAmount = cartTotal - discountAmount;
    const taxAmount = calculateTax(netAmount);
    const finalAmount = netAmount + taxAmount;
    return {
        cartTotal,
        discountAmount,
        netAmount,
        taxAmount,
        finalAmount
    }
}

console.log(genrateInvoice(2500, "SAVE10")); // Example usage
console.log(genrateInvoice(3000, "FLAT500")); // Example usage