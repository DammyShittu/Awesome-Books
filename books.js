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

function showBooks(book) {
  const bookList = `<div>
  <p>${book.title}</p>
  <p>${book.author}</p>
  <button type="submit" id="remove-book">Remove</button>
  <hr>
  </div>
  `;

  return bookList;
}

const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');
const form = document.getElementById('form');

// Add New Book To List
function addBookToList(e) {
  e.preventDefault();
  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
  };
  bookSection.innerHTML += showBooks(newBook);
}
form.addEventListener('submit', addBookToList)

function showMyBooks() {
  const myBooks = Object.keys(awesomeBooks);
  const myBooksLength = Object.keys(awesomeBooks).length;
  for (let i = 0; i < myBooksLength; i += 1) {
    bookSection.innerHTML += showBooks(awesomeBooks[myBooks[i]], i);
  }
}

window.onload = showMyBooks;