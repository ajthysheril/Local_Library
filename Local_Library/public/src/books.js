function findAuthorById(authors, id) {
   return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);
  const sortedBooks =[checkedOutBooks, returnedBooks];
  return sortedBooks;
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowers = borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id);
    return {
      id: account.id,
      returned: borrow.returned,
      picture: account.picture,
      age: account.age,
      name: account.name,
      company: account.company,
      email: account.email,
      registered: account.registered,
    };
  });
  const topBorrowers = borrowers.slice(0, 10);
  return topBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
