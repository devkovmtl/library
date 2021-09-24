function buildCardComponent(id, title, author, pages, read) {
  // console.log(read)
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  card.setAttribute('data-id', id)

  card.innerHTML = `
    <div class="card-title" >
      <h2>${title}</h2>
      <h3>${author}</h3>
    </div>
    <div class="card-body">
      <p>${pages} pages</p>
      <div class="read">
        <input type="checkbox" id="read_check" ${
          read ? 'checked' : ''
        } data-id=${id} /> <span>${read ? 'Read' : 'Not Read Yet'}</span>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-delete" id="delete-book" data-id=${id}>
        <span class="material-icons material-icons-two-tone">
          delete_forever
        </span>
        Delete
      </button>
    </div>
    `

  return card
}
