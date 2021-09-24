const addBtn = document.querySelector('.add-btn')
const modalContainer = document.querySelector('.modal-container')
const cancelBtnModal = document.querySelector('#cancelModal')

function toggleModal(e) {
  if (isModalOpen) {
    modalContainer.style.display = 'none'
  } else {
    modalContainer.style.display = 'flex'
  }
  isModalOpen = !isModalOpen
}

addBtn.addEventListener('click', toggleModal)
cancelBtnModal.addEventListener('click', toggleModal)
