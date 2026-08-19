/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

const productCode: string = `KBR-001`
const productName: string = `Mechanical Keyboard RGB`

type ProductInfo = {
    originalPrice: number
    discountPercentage: number
    quantity: number
    stockAvailable: number
}

const productData: ProductInfo = {
    originalPrice: 850000,
    discountPercentage: 25,
    quantity: 2,
    stockAvailable: 18,
}

const isPremiumMember: boolean = true
const freeShipping: boolean = true

console.log(`Product Code: ${productCode}`)
console.log(`Product Name: ${productName}`)
console.log(`Original Price: ${productData.originalPrice}`)
console.log(`Discount: ${productData.discountPercentage}%`)
console.log(`Quantity: ${productData.quantity}`)
console.log(`Premium Member: ${isPremiumMember}`)
console.log(`Free Shipping: ${freeShipping}`)
console.log(`Stock Available: ${productData.stockAvailable}`)

