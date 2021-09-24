const listBooks = document.querySelector('.card-list')
const addBtn = document.querySelector('.add-btn')
const deleteBookBtn = document.querySelector('#delete-book')
const modalContainer = document.querySelector('.modal-container')
const cancelBtnModal = document.querySelector('#cancelModal')
const addBookForm = document.querySelector('.form')
const checkBox = document.querySelector('input[type="checkbox"]')

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
  // console.log(read)
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  card.setAttribute('data-id', generateId(title, author))

  card.innerHTML = `
  <div class="card-title" >
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
    <button class="btn btn-delete" id="delete-book">
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

function onSubmitForm(e) {
  e.preventDefault()
  const title = addBookForm.title.value
  const author = addBookForm.author.value
  const pages = addBookForm.pages.value
  const read = addBookForm.read.checked

  if (title && author && pages) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    toggleModal()
    displayBooks()
  }
}

function toggleCheckBox(e) {
  console.log('Click Checked')
  console.log(e)
}

function deleteBook(e) {
  console.log(e)
}

addBtn.addEventListener('click', toggleModal)
deleteBookBtn.addEventListener('click', deleteBook)
cancelBtnModal.addEventListener('click', toggleModal)
addBookForm.addEventListener('submit', onSubmitForm)
// checkBox.addEventListener('click', toggleCheckBox)
