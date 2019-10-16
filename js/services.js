'use strict'
const BOOKS_KEY = 'books';

var gNextId = 101
var gBooks;


var gBooks;
createBooks();
console.log('gbook', gBooks);

 
function createBooks(){

    var books = loadBooksFromStorage();
    if (!books || books.length === 0) {
        books= [
             createBook('history', 90, '<img src="../img/history.jpg">' ),
             createBook('love', 120, '<img src="../img/love.jpg">' ),
             createBook('war', 50, '<img src="../img/war.jpg">' ),
             ]
    }
    gBooks = books;
    saveBooksToStorage();
}
  

function createBook (name, price, image){
    return {
    id: gNextId++,
    name: name,
    price: price,
    image: image
    }
}

function getBooks(){
    return gBooks;
}

function removeBook(bookId){
    var bookIdx = gBooks.findIndex(function(book){
        return book.id === bookId 
     })
     if( bookIdx === -1) return;
     gBooks.splice(bookIdx,1)
     saveBooksToStorage();
}

function editBook(bookId,price){
    var book = gBooks.find(function(book){
        return book.id === bookId
    })
    if (!book) return;
    book.price = price;
    saveBooksToStorage();
}
function addBook(name, price) {
    var book = createBook(name, price);
    gBooks.unshift(book);
    saveBooksToStorage();
}





function saveBooksToStorage() {
    saveToStorage(BOOKS_KEY, gBooks)
}
function loadBooksFromStorage() {
    return loadFromStorage(BOOKS_KEY);
}