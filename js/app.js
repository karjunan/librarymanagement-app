"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
function GetAllBooks() {
    let books = [
        { id: 1, name: "MyBook-krishna", author: "krishna", available: true, category: enum_1.Categories.Biography },
        { id: 2, name: "MyBook-kumar", author: "kumar", available: false, category: enum_1.Categories.Childrem },
        { id: 3, name: "MyBook-Arjun", author: "Arjun", available: true, category: enum_1.Categories.Poetry },
        { id: 4, name: "MyBook-Mark", author: "Mark", available: true, category: enum_1.Categories.Poetry },
    ];
    return books;
}
function LogFirstAvailableBook(books = GetAllBooks()) {
    let numberOfBooks = books.length;
    let firstAvailableBook = '';
    for (const book of books) {
        if (book.available) {
            firstAvailableBook = book.name;
            break;
        }
    }
    console.log('Total Books', numberOfBooks);
    console.log('First Available', firstAvailableBook);
}
function GetBookTitlesByCategory(category) {
    console.log('Getting all categories ', enum_1.Categories[category]);
    const books = GetAllBooks();
    const bookTitle = [];
    for (const book of books) {
        if (book.category === category) {
            bookTitle.push(book.name);
        }
    }
    return bookTitle;
}
function GetBookByID(id) {
    const allBooks = GetAllBooks();
    const book = allBooks.filter(v => v.id === id)[0];
    return book;
}
function CreateCustomerID(name, id) {
    return name + '  ' + id;
}
// let IDGenerator: (chars: string, id: number) => string;
let sg = CreateCustomerID;
const generatedId = sg('krishna', 1);
console.log('Genereate ID is => ', generatedId);
const allBooks = GetAllBooks();
LogFirstAvailableBook();
const title = GetBookTitlesByCategory(enum_1.Categories.Poetry);
console.log(title);
title.forEach((v) => console.log('Result is => ', v));
const result = GetBookByID(2);
console.log("Returned book based on ID =>", result[0]);
function CreateCustomer(name, age, city) {
    console.log("customer details => ", name, age, city);
}
CreateCustomer('Tension', 12, 'ooty');
function GetTitles(property) {
    if (typeof property === 'string') {
        console.log(property);
        // GetBookTitlesByCategory()
    }
    else if (typeof property === 'number') {
        console.log("Overloaded functions ");
        const ID = GetBookByID(property);
        console.log(ID[0]);
    }
}
// GetTitles(Categories.Biography);
function printBook(book) {
    console.log(book.name + " = " + book.author);
}
let myBook = {
    id: 5,
    name: 'Life of Ram',
    author: 'Ram Aujha',
    available: true,
    category: enum_1.Categories.Biography,
    year: '2019',
    copies: 100,
    markDamaged: (reason) => {
        console.log("damaged book is because of ", reason);
        return reason;
    }
};
printBook(myBook);
myBook.markDamaged("rain");
//# sourceMappingURL=app.js.map