/* eslint-disable max-classes-per-file */
// Global variables
const bookSection = document.getElementById('books');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const form = document.getElementById('form');
const formSection = document.getElementById('form-section');
const contactSection = document.getElementById('contact');
const theBooksList = document.getElementById('my-books');
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contactUs = document.getElementById('contact-us');
const mobileMenu = document.getElementById('menu');
const closeIcon = document.getElementById('close-menu');
const openIcon = document.getElementById('hamburger-icon');

function menuClose() {
  mobileMenu.style.top = '-110%';
}

function menuOpen() {
  mobileMenu.style.top = '0';
}

document.querySelectorAll('.classList').forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.top = '-110%';
  });
});

closeIcon.addEventListener('click', menuClose);
openIcon.addEventListener('click', menuOpen);


// Set Current Date and Time with Luxon.js Library
const time = document.getElementById('current-time');
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function reloadTime() {
  const theTime = luxon.DateTime.now();
  time.innerHTML = theTime.toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
}
const myTime = setInterval(reloadTime, 1000);

/* eslint-disable no-undef */

// Navigation Bar EventListeners

list.addEventListener('click', () => {
  formSection.classList.add('hide');
  contactSection.classList.add('hide');
  theBooksList.classList.remove('hide');
});

addNew.addEventListener('click', () => {
  formSection.classList.remove('hide');
  contactSection.classList.add('hide');
  theBooksList.classList.add('hide');
});

contactUs.addEventListener('click', () => {
  formSection.classList.add('hide');
  contactSection.classList.remove('hide');
  theBooksList.classList.add('hide');
});

// JavaScript Class
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
    <p>"${book.title}" by ${book.author}</p>
    <button id=${i} type="submit" class="remove-book" onclick="removeBook(this.id)">Remove</button> 
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
  formSection.classList.add('hide');
  theBooksList.classList.remove('hide');
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
window.onload = () => {
  formSection.classList.add('hide');
  contactSection.classList.add('hide');
};