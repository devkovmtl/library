const listBooks = document.querySelector('.card-list')
const addBtn = document.querySelector('.add-btn')
const modalContainer = document.querySelector('.modal-container')

let myLibrary = []
let isModalOpen = false

class Book {
  constructor(title, author, pages, read) {
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
    this.read = !this.read
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
const harrySorcerySchool = new Book('Harry Potter', 'J.K. Rowling', 304, true)

addBookToLibrary(theHobbit)
addBookToLibrary(harrySorcerySchool)

function generateId() {
  return `${Date.now() + Math.floor(Math.random() * 10000)}`
}

function buildCardComponent(title, author, pages, read) {
  console.log(read)
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  card.innerHTML = `
  <div class="card-title" data-id=${generateId(title, author)}>
    <h2>${title}</h2>
    <h3>${author}</h3>
  </div>
  <div class="card-body">
    <p>${pages} pages</p>
    <div class="read">
      <input type="checkbox" id="read_check" ${read ? 'checked' : ''} /> ${
    read ? 'Read' : 'Not Read Yet'
  }
    </div>
  </div>
  <div class="card-footer">
    <button class="btn btn-delete">
      <span class="material-icons material-icons-two-tone">
        delete_forever
      </span>
      Delete
    </button>
  </div>
  `

  return card
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]
    const card = buildCardComponent(
      book.title,
      book.author,
      book.pages,
      book.read
    )
    listBooks.appendChild(card)
  }
}

displayBooks()

function toggleModal(e) {
  if (isModalOpen) {
    modalContainer.style.display = 'none'
  } else {
    modalContainer.style.display = 'flex'
  }
  isModalOpen = !isModalOpen
}

addBtn.addEventListener('click', toggleModal)
modalContainer.addEventListener('click', toggleModal)
