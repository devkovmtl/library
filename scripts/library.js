class Library {
  constructor() {
    this.library = []
  }

  insert(book) {
    this.library.push(book)
  }

  delete(bookId) {
    const newLibrary = this.library.filter((b) => b.id !== bookId)
    this.library = [...newLibrary]
  }
}
