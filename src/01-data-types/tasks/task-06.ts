/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    productCode: string
    productName: string
    sellingPrice: number
    stockQuantity: number
    productWeight: string
    averagecustomerRating: string
    isDiscounted: boolean
}

const product1: Product = {
    productCode: `AT345678`,
    productName: `Colorful Raincoats`,
    sellingPrice: 15.00,
    stockQuantity: 20,
    productWeight: `450g`,
    averagecustomerRating: `Good`,
    isDiscounted: false,
}

const product2: Product = {
    productCode: `AT345679`,
    productName: `Hairbrush for oily hair`,
    sellingPrice: 2000,
    stockQuantity: 20,
    productWeight: `130g`,
    averagecustomerRating: `Good`,
    isDiscounted: true,
}

const product3: Product = {
    productCode: `AT345680`,
    productName: `ROG Laptop`,
    sellingPrice: 180000,
    stockQuantity: 40,
    productWeight: `2.7g`,
    averagecustomerRating: `Very Good`,
    isDiscounted: true,
}

console.log(`Product Code: ${product1.productCode}`)
console.log(`Product Name: ${product1.productName}`)
console.log(`Selling Price Of the Product: ${product1.sellingPrice}`)
console.log(`Stock Quantity of the Product: ${product1.stockQuantity}`)
console.log(`Weight of the Product: ${product1.productWeight}`)
console.log(`Average Customr Rating of the Product: ${product1.averagecustomerRating}`)
console.log(`Discount: ${product1.isDiscounted}`)
console.log(product1)

console.log(`Product Code: ${product2.productCode}`)
console.log(`Product Name: ${product2.productName}`)
console.log(`Selling Price Of the Product: ${product2.sellingPrice}`)
console.log(`Stock Quantity of the Product: ${product2.stockQuantity}`)
console.log(`Weight of the Product: ${product2.productWeight}`)
console.log(`Average Customr Rating of the Product: ${product2.averagecustomerRating}`)
console.log(`Discount: ${product2.isDiscounted}`)
console.log('')

console.log(`Product Code: ${product3.productCode}`)
console.log(`Product Name: ${product3.productName}`)
console.log(`Selling Price Of the Product: ${product3.sellingPrice}`)
console.log(`Stock Quantity of the Product: ${product3.stockQuantity}`)
console.log(`Weight of the Product: ${product3.productWeight}`)
console.log(`Average Customr Rating of the Product: ${product3.averagecustomerRating}`)
console.log(`Discount: ${product3.isDiscounted}`)

