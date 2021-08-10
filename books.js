const bookSection = document.querySelector('.books');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const form = document.getElementById('form');

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
function showBooks(book) {
  const bookList = `
  <div id="book-info">
  <p>${book.title}</p>
  <p>${book.author}</p>
  <button type="submit" class="remove-book">Remove</button>
  <hr>
  </div>
  `;

  bookSection.innerHTML += bookList;
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
  showBooks(newBook);
  clearInput();
  setLocalStorage(newBook);
}

form.addEventListener('submit', addBookToList);

// Remove books from Local Storage

function removeFromLocalStorage() {
  const myBooks = JSON.parse(localStorage.getItem('newBooks'));
  myBooks.forEach((index) => {
    myBooks.splice(index, 1);
    return myBooks;
  });
  localStorage.setItem('newBooks', JSON.stringify(myBooks));
}

// Remove Books
function deleteBook(book) {
  if (book.classList.contains('remove-book')) {
    book.parentElement.remove();
  }
}
bookSection.addEventListener('click', (e) => {
  deleteBook(e.target);
  removeFromLocalStorage(e.target);
});
