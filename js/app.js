function GetAllBooks() {
    var books = [
        { id: 1, name: "MyBook-krishna", author: "krishna", available: true, category: Categories.Biography },
        { id: 2, name: "MyBook-kumar", author: "kumar", available: false, category: Categories.Childrem },
        { id: 3, name: "MyBook-Arjun", author: "Arjun", available: true, category: Categories.Poetry },
        { id: 4, name: "MyBook-Mark", author: "Mark", available: true, category: Categories.Poetry },
    ];
    return books;
}
function LogFirstAvailableBook(books) {
    var numberOfBooks = books.length;
    var firstAvailableBook = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.available) {
            firstAvailableBook = book.name;
            break;
        }
    }
    console.log('Total Books', numberOfBooks);
    console.log('First Available', firstAvailableBook);
}
var Categories;
(function (Categories) {
    Categories[Categories["Biography"] = 0] = "Biography";
    Categories[Categories["Poetry"] = 1] = "Poetry";
    Categories[Categories["History"] = 2] = "History";
    Categories[Categories["Childrem"] = 3] = "Childrem";
})(Categories || (Categories = {}));
function GetBookTitlesByCategory(category) {
    console.log('Getting all categories ', Categories[category]);
    var books = GetAllBooks();
    var bookTitle = [];
    for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
        var book = books_2[_i];
        if (book.category === category) {
            bookTitle.push(book.name);
        }
    }
    return bookTitle;
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    var result = allBooks.filter(function (v) { return v.id === id; });
    return result;
}
function CreateCustomerID(name, id) {
    return name + '  ' + id;
}
var IDGenerator;
IDGenerator = CreateCustomerID;
var generatedId = IDGenerator('krishna', 1);
console.log('Genereate ID is => ', generatedId);
var allBooks = GetAllBooks();
LogFirstAvailableBook(allBooks);
var title = GetBookTitlesByCategory(Categories.Poetry);
console.log(title);
title.forEach(function (v) { return console.log('Result is => ', v); });
var result = GetBookByID(2);
console.log("Returned book based on ID =>", result[0]);
//# sourceMappingURL=app.js.map