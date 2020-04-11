function GetAllBooks() {
    let books = [
        {name: "MyBook-krishna", author: "krishna", available: true,category: Categories.Biography},
        {name: "MyBook-kumar", author: "kumar", available: false,category: Categories.Childrem},
        {name: "MyBook-Arjun", author: "Arjun", available: true,category: Categories.Poetry},
        {name: "MyBook-Mark", author: "Mark", available: true,category: Categories.Poetry},

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

const allBooks = GetAllBooks();
LogFirstAvailableBook(allBooks);
const title = GetBookTitlesByCategory(Categories.Poetry)
console.log(title);