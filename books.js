/* eslint-disable max-classes-per-file */
const bookSection = document.querySelector('.books');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const form = document.getElementById('form');

class AwesomeBooks {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Page {
  // Check if books are in LocalStorage
  static getBooks() {
    let myBooks;
    if (localStorage.getItem('newBooks') === null) {
      myBooks = [];
    } else {
      myBooks = JSON.parse(localStorage.getItem('newBooks'));
    }
    return myBooks;
  }

  // Div that contains book HTML
  static showBooks() {
    bookSection.innerHTML = '';
    const myBooks = this.getBooks();
    for (let i = 0; i < myBooks.length; i += 1) {
      const book = myBooks[i];
      const bookList = `
    <div id="book-info">
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button id=${i} type="submit" class="remove-book" onclick="removeBook(this.id)">Remove</button>
    <hr> 
    </div>
    `;
      bookSection.innerHTML += bookList;
    }
  }

  // This code clears the input field after books have been submitted
  static clearInput() {
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  // Add books to local storage
  static setLocalStorage(item) {
    const books = this.getBooks();
    books.push(item);

    localStorage.setItem('newBooks', JSON.stringify(books));
  }
}

// Add New Book To List
function addBookToList(e) {
  e.preventDefault();
  if (bookTitle.value === '' && bookAuthor.value === '') {
    return;
  }
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const newBook = new AwesomeBooks(title, author);
  Page.clearInput();
  Page.setLocalStorage(newBook);
  Page.showBooks();
}

form.addEventListener('submit', addBookToList);

// Remove book from localStorage
/* eslint-disable no-unused-vars */
function removeBook(id) {
  const myBooks = Page.getBooks();
  myBooks.splice(id, 1);
  localStorage.setItem('newBooks', JSON.stringify(myBooks));
  Page.showBooks();
}

Page.showBooks();