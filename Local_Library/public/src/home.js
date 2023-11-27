function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((totalCount, account) => totalCount + 1, 0);
}


function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  books.filter(book => {
    if (!book.borrows[0].returned) {
      borrowedBooks += 1;
    }
  });
  return borrowedBooks;
}

function getMostCommonGenres(books) {
 const genreCount = {};
  books.forEach(book => {
    const { genre } = book;
    if (genreCount[genre]) {
      genreCount[genre] += 1;
    } else {
      genreCount[genre] = 1;
    }
  });
  const genreArray = Object.keys(genreCount).map(name => ({
    name,
    count: genreCount[name]
  }));
  genreArray.sort((a, b) => b.count - a.count);
  const topGenres = genreArray.slice(0, 5);
  return topGenres;
}

function getMostPopularBooks(books) {
  const booksBorrowed = [];
  books.forEach(book => {
    const {title, borrows} = book
    const borrowCount = borrows.length;
    booksBorrowed.push({name: title, count: borrowCount});
     });
  booksBorrowed.sort((a,b)=>b.count-a.count);
  const topBooks = booksBorrowed.slice(0,5);
  return topBooks;
}

function getTotalAuthorBorrows(author, books) {
  const authorBooks = books.filter(book => book.authorId === author.id);
  return authorBooks.reduce((total, book) => total + book.borrows.length, 0);
}

function getMostPopularAuthors(books, authors) {
  const authorBorrowCounts = [];
  authors.forEach(author => {
    const borrowCount = getTotalAuthorBorrows(author, books);
    authorBorrowCounts.push({ name: `${author.name.first} ${author.name.last}`, count: borrowCount });
  });
  authorBorrowCounts.sort((a, b) => b.count - a.count);
  const topAuthors = authorBorrowCounts.slice(0, 5);
  return topAuthors;
}
  
  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
