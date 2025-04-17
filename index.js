


// this function calculate tax.
function calculateTax(amount) {
    const tax = amount * 0.10
    return tax;
}


// this function helping to convert to uppercase.
function convertToUpperCase(text) {
    return text.toUpperCase();
 }


 // this function show larger parameter.
 function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
 }


 //palindrome
 function isPalindrome(word) {
   const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
   const reversed = clean.split('').reverse().join('');
   return clean === reversed;
 }
 
 //Calculating discounted price.
 function calculateDiscountedPrice(originalPrice,discountedPercentage){
    const discountAmount = (originalPrice * discountedPercentage) /100;
    const finalPrice = originalPrice - discountAmount;
    return finalPrice;
 }




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };