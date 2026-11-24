import { formatCurrency, GST_RATE, calculateTax } from "./mathUtils.js";

const price = 1000;
const taxAmount = calculateTax(price);
console.log(`Price: ${formatCurrency(price)}, Tax: ${formatCurrency(taxAmount)}, Total: ${formatCurrency(price + taxAmount)}`);