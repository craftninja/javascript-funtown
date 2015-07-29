// Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

function discountPercentage (originalAmt, discountPercent) {
  if (discountPercent > 100) {
    return "Discount cannot be greater than 100%";
  } else if (discountPercent < 0) {
    return "Discount cannot be less than 0%";
  } else {
    return "$" + originalAmt * (100 - discountPercent) / 100;
  };
};

console.log("expected: $50");
console.log("actual:  ", discountPercentage(100, 50));

console.log("expected: Discount cannot be greater than 100%");
console.log("actual:  ", discountPercentage(100, 101));

console.log("expected: Discount cannot be less than 0%");
console.log("actual:  ", discountPercentage(100, -3));
