// const myTableLibrary = document.querySelector('table#myLibrary')
// let myLibrary = []

// function Book(title, author, pages, read) {
//   // constructor
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = read
//   this.info = function () {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${
//       this.read ? 'already read' : 'not read yet'
//     }.`
//   }
// }

// function addBookToLibrary(book) {
//   myLibrary.push(book)
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

// addBookToLibrary(theHobbit)

// function displayBooks() {
//   let tr = document.createElement('tr')
//   myLibrary.forEach((book) => {
//     for (let k in book) {
//       if (k === 'title' || k === 'author' || k === 'pages' || k === 'read') {
//         let td = document.createElement('td')
//         td.textContent = book[k]
//         tr.appendChild(td)
//       }
//     }
//   })
//   // myTableLibrary.appendChild(tr)
// }

// displayBooks()

// {
//   /* <div class="custom-control custom-switch">
//   <input type="checkbox" class="custom-control-input" id="customSwitch1">
//   <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
// </div> */
// }

// // const cat = {
// //   init: function (sound) {
// //     this.sound = sound
// //     // we can chain
// //     return this
// //   },
// //   makeSound: function () {
// //     console.log(this.sound)
// //   },
// // }
// // const mark = Object.create(cat).init('mewuFF')
// // mark.makeSound()

// // const waffles = Object.create(cat).init('mrrOff')
// // waffles.makeSound()
