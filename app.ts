import {Categories} from './enum';
import {Book} from './interfaces';
import {StringGenerator} from './stringGenerator';

function GetAllBooks(): Book[] {
    let books = [
        {id:1 ,name: "MyBook-krishna", author: "krishna", available: true,category: Categories.Biography},
        {id:2 ,name: "MyBook-kumar", author: "kumar", available: false,category: Categories.Childrem},
        {id:3 ,name: "MyBook-Arjun", author: "Arjun", available: true,category: Categories.Poetry},
        {id:4 ,name: "MyBook-Mark", author: "Mark", available: true,category: Categories.Poetry},
    ]
    return books;
}

function LogFirstAvailableBook(books = GetAllBooks()): void {

    let numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';
    for (const book of books) {
        if(book.available) {
            firstAvailableBook = book.name;
            break;
        }
    }
    console.log('Total Books', numberOfBooks);
    console.log('First Available', firstAvailableBook);
}


function GetBookTitlesByCategory(category: Categories) : Array<string> {
    console.log('Getting all categories ', Categories[category])
    const books = GetAllBooks();
    const bookTitle: Array<string> = [];
    for (const book of books) {
        if(book.category === category) {
            bookTitle.push(book.name);
        }
    }
    return bookTitle;
}

function GetBookByID(id: number): Book {
    const allBooks = GetAllBooks();
    const book: Book = allBooks.filter(v => v.id === id)[0];
    return book;
}


function CreateCustomerID(name: string, id: number ) : string {

    return name + '  ' + id;
}

// let IDGenerator: (chars: string, id: number) => string;


let sg:StringGenerator = CreateCustomerID;

const generatedId = sg('krishna',1);
console.log('Genereate ID is => ', generatedId)

const allBooks = GetAllBooks();
LogFirstAvailableBook();
const title: Array<string> = GetBookTitlesByCategory(Categories.Poetry)
console.log(title);
title.forEach((v) => console.log('Result is => ',v));

const result = GetBookByID(2);
console.log("Returned book based on ID =>", result[0]);

function CreateCustomer(name: string, age?:number, city?: string) : void {

    console.log("customer details => " , name , age, city);
}


CreateCustomer('Tension', 12, 'ooty');

function GetTitles( id: number): any;
function GetTitles( name: Categories): any;

function GetTitles(property: any) {
    if(typeof property === 'string') {
            console.log(property);
            // GetBookTitlesByCategory()
        
    } else if(typeof property === 'number') {
        console.log("Overloaded functions ");
        const ID = GetBookByID(property);
        console.log(ID[0]);
    }
}

// GetTitles(Categories.Biography);

function printBook(book: Book) {

    console.log(book.name + " = " + book.author)
}

let myBook = {
    id: 5,
    name: 'Life of Ram',
    author: 'Ram Aujha',
    available: true,
    category : Categories.Biography,
    year: '2019',
    copies: 100,
    markDamaged: (reason: string) => {
        console.log("damaged book is because of ", reason);
        return reason
    }
}

printBook(myBook);
myBook.markDamaged("rain")