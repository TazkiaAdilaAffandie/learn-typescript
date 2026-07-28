/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    isbn: string
    title: string
    author: string
    totalPages: number
    category: string
    isAvailable: boolean
}

const book1: Book = {
    isbn: `978-602-291-000-1`,
    title: `Atomic Habits`,
    author: `James Clear`,
    totalPages: 529,
    category: `Self Help Book`,
    isAvailable: true,
}

const book2: Book = {
    isbn: `978-979-22-0123-4`,
    title: `Bumi Manusia`,
    author: `Pramoedya Ananta Toer`,
    totalPages: 535,
    category: `Historical Fiction`,
    isAvailable: false,
}

const book3: Book = {
    isbn: `978-602-03-1234-5`,
    title: `Laut Bercirita`,
    author: `Leila Chudori`,
    totalPages: 318,
    category: `Historical Fiction`,
    isAvailable: true,
}

console.log(`ISBN: ${book1.isbn}`)
console.log(`Title: ${book1.title}`)
console.log(`Author: ${book1.author}`)
console.log(`Total Pages: ${book1.totalPages}`)
console.log(`Category: ${book1.category}`)
console.log(`Available: ${book1.isAvailable ? "Yes" : "No"}`)

console.log(`ISBN: ${book2.isbn}`)
console.log(`Title: ${book2.title}`)
console.log(`Author: ${book2.author}`)
console.log(`Total Pages: ${book2.totalPages}`)
console.log(`Category: ${book2.category}`)
console.log(`Available: ${book2.isAvailable ? "Yes" : "No"}`)

console.log(`ISBN: ${book3.isbn}`)
console.log(`Title: ${book3.title}`)
console.log(`Author: ${book3.author}`)
console.log(`Total Pages: ${book3.totalPages}`)
console.log(`Category: ${book3.category}`)
console.log(`Available: ${book3.isAvailable ? "Yes" : "No"}`)
