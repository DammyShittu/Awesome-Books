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
  const bookList = `<div id="book-info">
  <p>${book.title}</p>
  <p>${book.author}</p>
  <button type="submit" id="remove-book" onclick="removeItem()">Remove</button>
  <hr>
  </div>
  `;

  return bookList;
}

// Add New Book To List

const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');
const form = document.getElementById('form');

function addBookToList(e) {
  e.preventDefault();
  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
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
  removeBook.parentNode.removeChild(removeBook);
}

window.onload = showMyBooks;