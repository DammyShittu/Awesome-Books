const bookSection = document.querySelector('.books');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const form = document.getElementById('form');

// Check if books are in LocalStorage
function getBooks() {
  let myBooks;
  if (localStorage.getItem('newBooks') === null) {
    myBooks = [];
  } else {
    myBooks = JSON.parse(localStorage.getItem('newBooks'));
  }
  return myBooks;
}

// Div that contains book HTML
function showBooks() {
  bookSection.innerHTML = '';
  const myBooks = getBooks();
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
function clearInput() {
  bookTitle.value = '';
  bookAuthor.value = '';
}

// Add books to local storage
function setLocalStorage(item) {
  const books = getBooks();
  books.push(item);

  localStorage.setItem('newBooks', JSON.stringify(books));
}

// Add New Book To List

function addBookToList(e) {
  e.preventDefault();
  if (bookTitle.value === '' && bookAuthor.value === '') {
    return;
  }
  const newBook = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  clearInput();
  setLocalStorage(newBook);
  showBooks();
}

// Remove book from localStorage
/* eslint-disable no-unused-vars */
function removeBook(id) {
  const myBooks = getBooks();
  myBooks.splice(id, 1);
  localStorage.setItem('newBooks', JSON.stringify(myBooks));
  showBooks();
}

form.addEventListener('submit', addBookToList);

showBooks();