class Library {
  constructor() {
    this.library = []
  }

  insert(book) {
    this.library.push(book)
  }

  delete(bookId) {
    this.library = [
      ...this.library.filter((b) => {
        b.id !== bookId
      }),
    ]
  }
}

function addBookToLibrary(book) {
  myLibrary.insert(book)
}
