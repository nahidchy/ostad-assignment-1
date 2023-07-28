function calculateDiscountedAmount(totalPurchaseAmount) {
    let discountPercentage = 0;
    
    if (totalPurchaseAmount >= 50 && totalPurchaseAmount <= 100) {
      discountPercentage = 0.05; // 5% discount
    } else if (totalPurchaseAmount > 100 && totalPurchaseAmount <= 200) {
      discountPercentage = 0.1; // 10% discount
    } else if (totalPurchaseAmount > 200) {
      discountPercentage = 0.15; // 15% discount
    }
    
    const discountAmount = totalPurchaseAmount * discountPercentage;
    const discountedAmount = totalPurchaseAmount - discountAmount;
    
    console.log("Discounted Amount: $" + discountedAmount.toFixed(2));
    console.log("Total Amount + Discount Amount: $" + (totalPurchaseAmount - discountAmount).toFixed(2));
  }
  
  // Test the function with different total purchase amounts:
  calculateDiscountedAmount(30); // No discount applied
  calculateDiscountedAmount(70); // 5% discount applied
  calculateDiscountedAmount(120); // 10% discount applied
  calculateDiscountedAmount(250); // 15% discount applied