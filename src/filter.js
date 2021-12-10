module.exports = {
  filterByName: (books, name) => {
    if (name) {
      return books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
    }
    return books;
  },
  filterByReading: (books, reading) => {
    if (reading) {
      return books.filter((book) => book.reading === !!Number(reading));
    }
    return books;
  },
  filterByFinished: (books, finished) => {
    if (finished) {
      return books.filter((book) => book.finished === !!Number(finished));
    }
    return books;
  },
};
