export const GST_RATE = 0.18;

export function calculateTax(price) {
  return price * GST_RATE;
}

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}



