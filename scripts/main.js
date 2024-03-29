let myLibrary = new Library()
let isModalOpen = false

const listBooks = document.querySelector('.card-list')
const addBookForm = document.querySelector('.form')

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
const harrySorcerySchool = new Book('Harry Potter', 'J.K. Rowling', 304, true)

addBookToLibrary(theHobbit)
addBookToLibrary(harrySorcerySchool)

function addBookToLibrary(book) {
  myLibrary.insert(book)
}

function displayBooks(library) {
  listBooks.innerHTML = ``
  for (let i = 0; i < library.length; i++) {
    let book = library[i]
    console.log(book)
    const card = buildCardComponent(
      book.id,
      book.title,
      book.author,
      book.pages,
      book.read
    )
    listBooks.appendChild(card)
  }
}

function onSubmitForm(e) {
  e.preventDefault()
  const title = addBookForm.title.value
  const author = addBookForm.author.value
  const pages = addBookForm.pages.value
  const read = addBookForm.read.checked

  if (title && author && pages) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.insert(newBook)
    addBookForm.reset()
    toggleModal()
    displayBooks(myLibrary.library)
  }
}

function handleClickOnList(e) {
  const element = e.target

  if (element.matches('input#read_check')) {
    const bookId = element.dataset.id

    const book = myLibrary.library.find((b) => b.id === +bookId)
    if (book) {
      const isRead = book.toggleRead()
      element.nextElementSibling.innerText = isRead ? 'Read' : 'Not Read Yet'
    }
  }

  if (element.matches('button#delete-book')) {
    const bookId = element.dataset.id
    const book = myLibrary.library.find((b) => b.id === +bookId)
    if (book) {
      myLibrary.delete(book.id)
      displayBooks(myLibrary.library)
    }
  }
}

addBookForm.addEventListener('submit', onSubmitForm)
listBooks.addEventListener('click', handleClickOnList)
displayBooks(myLibrary.library)
