// Books Array
const awesomeBooks = [
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
  },

  {
    title: 'Understanding Faith',
    author: 'Gbeminiyi Eboda',
  },
];

const bookSection = document.getElementById('awesome-books');

// Div that contains book HTML
function showBooks(book) {
  const bookList = `
  <div id="book-info">
  <p>${book.title}</p>
  <p>${book.author}</p>
  <button type="submit" id="remove-book" onclick="removeItem()">Remove</button>
  <hr>
  </div>
  `;

  return bookList;
}

// Add New Book To List

const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const form = document.getElementById('form');

function addBookToList(e) {
  e.preventDefault();
  const newBook = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  bookSection.innerHTML += showBooks(newBook);
}
form.addEventListener('submit', addBookToList);

// Display Books in UI
function showMyBooks() {
  const myBooks = Object.keys(awesomeBooks);
  const myBooksLength = Object.keys(awesomeBooks).length;
  for (let i = 0; i < myBooksLength; i += 1) {
    bookSection.innerHTML += showBooks(awesomeBooks[myBooks[i]], i);
  }
}

// Remove Books
/* eslint-disable no-unused-vars */
function removeItem() {
  const removeBook = document.getElementById('book-info');
  removeBook.parentElement.remove(removeBook);
}

window.onload = showMyBooks;

// Local Storage

// Check If Books Are In Local Storage

const getBookInfo = JSON.parse(localStorage.getItem('MyBooks')) || [];

if (getBookInfo) {
  for (let i = 0; i < getBookInfo.length; i += 1) {
    bookTitle.value = getBookInfo[i].title;
    bookAuthor.value = getBookInfo[i].author;
  }
}

// Set Items in Local Storage
const allBooks = [];

function bookInfo() {
  const titleInput = bookTitle.value;
  const authorInput = bookAuthor.value;

  const bookStorage = {
    title: titleInput,
    author: authorInput,
  };

  allBooks.push(bookStorage);

  localStorage.setItem('MyBooks', JSON.stringify(allBooks));
}

// Add Books To Local Storage On Form Submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookInfo();
});