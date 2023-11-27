function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
 const { id: accountId } = account;
  const totalBorrows = books.reduce((total, book) => {
    const { borrows } = book;
    const accountBorrows = borrows.filter(borrow => borrow.id === accountId);
    return total + accountBorrows.length;
  }, 0);
  return totalBorrows;
}



  function getBooksPossessedByAccount(account, books, authors) {
  const { id: accountId } = account;
  const possessedBooks = books.filter(book => {
    const lastBorrow = book.borrows[0];
    return !lastBorrow.returned && lastBorrow.id === accountId;
  });
  const booksWithAuthors = possessedBooks.map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return {
      ...book,
      author,
    };
  });
  return booksWithAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
