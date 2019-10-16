'use strict'

function onInit(){
    console.log('init', gBooks );
    doTrans();
    renderBooks();
   }

function renderBooks(){
    var books = getBooks();
    var strHTMLs = books.map(function(book){
        return `<tr>
            <td class="book-item">${book.name}</td>
            <td class="book-item">${book.price}$</td>
            <td> <button data-trans= "about"  onclick="onDetailBook(${book.id})">  About   </button>  </td>
            <td> <button data-trans = "edit" onclick="onEditBook(${book.id})">    Edit    </button>  </td>
            <td> <button data-trans = "remove"  onclick="onRemoveBook(${book.id})">  Remove  </button>  </td>
                </tr>`
           
    })
    document.querySelector('.book-list').innerHTML=strHTMLs.join('');
}

function onRemoveBook(bookId){
    var isSure = confirm(getTrans('sure'))
    if (!isSure) return;
    
    removeBook(bookId);
    renderBooks();
}

function onEditBook(bookId){
    var price = +prompt('Edit Price?')
    editBook(bookId, price);
    renderBooks();
}

function onAddBook() {
    var elBookName = document.querySelector('.book-name');
    var book = elBookName.value;
    if (!book) return;
    addBook(book);
    
    elBookName.value = '';
    renderBooks();
}


function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') {
        document.body.classList.add('rtl')
    } else {
        document.body.classList.remove('rtl')
    }
    // renderBooks();
    doTrans();
}