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

function showMyBooks() {
  const myBooks = Object.keys(awesomeBooks);
  const myBooksLength = Object.keys(awesomeBooks).length;
  for (let i = 0; i < myBooksLength; i += 1) {
    bookSection.innerHTML += showBooks(awesomeBooks[myBooks[i]], i);
  }
}

window.onload = showMyBooks;