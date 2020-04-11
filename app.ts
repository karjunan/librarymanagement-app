function GetAllBooks() {
    let books = [
        {id:1 ,name: "MyBook-krishna", author: "krishna", available: true,category: Categories.Biography},
        {id:2 ,name: "MyBook-kumar", author: "kumar", available: false,category: Categories.Childrem},
        {id:3 ,name: "MyBook-Arjun", author: "Arjun", available: true,category: Categories.Poetry},
        {id:4 ,name: "MyBook-Mark", author: "Mark", available: true,category: Categories.Poetry},

    ]

    return books;
}

function LogFirstAvailableBook(books: any): void {

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

enum Categories {Biography, Poetry, History, Childrem}

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

function GetBookByID(id: number): Array<any> {
    const allBooks = GetAllBooks();
    const result: Array<any> = allBooks.filter(v => v.id === id)
    return result;
}


function CreateCustomerID(name: string, id: number ) : string {

    return name + '  ' + id;
}

let IDGenerator: (chars: string, id: number) => string;

IDGenerator = CreateCustomerID;

const generatedId = IDGenerator('krishna',1);
console.log('Genereate ID is => ', generatedId)

const allBooks = GetAllBooks();
LogFirstAvailableBook(allBooks);
const title: Array<string> = GetBookTitlesByCategory(Categories.Poetry)
console.log(title);
title.forEach((v) => console.log('Result is => ',v));

const result = GetBookByID(2);
console.log("Returned book based on ID =>", result[0]);