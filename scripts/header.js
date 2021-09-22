const header = document.querySelector('.header')
const topOfHeader = header.offsetTop
const cardList = document.querySelector('.card-list')

function fixHeader() {
  // console.log(topOfNav, window.scrollY)
  if (window.scrollY >= topOfHeader) {
    // when the element become fixed dont take space in document we have to compensate
    document.body.style.paddingTop = header.offsetHeight + 'px'
    document.body.classList.add('fixed')
  } else {
    document.body.style.paddingTop = 0
    document.body.classList.remove('fixed')
  }
}

window.addEventListener('scroll', fixHeader)
