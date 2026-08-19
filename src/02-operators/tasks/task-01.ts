/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

let friedRiceQty = 3;
let friedRicePrice = 18000;
let waterQty = 2;
let waterPrice = 5000;
let discount = 10000;

let totalFood = friedRiceQty * friedRicePrice;  
let totalDrink = waterQty * waterPrice;         
let grandTotal = totalFood + totalDrink;         
let finalPayment = grandTotal - discount;        


console.log("Total Fried Rice: Rp" + totalFood);
console.log("Total Drinks: Rp" + totalDrink);
console.log("Grand Total: Rp" + grandTotal);
console.log("Final Payment: Rp" + finalPayment);