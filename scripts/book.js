class Book {
  constructor(title, author, pages, read) {
    this.id = Date.now() + Math.floor(Math.random() * 10000)
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'already read' : 'not read yet'
    }.`
  }

  toggleRead() {
    console.log('click')
    this.read = !this.read
    return this.read
  }
}
