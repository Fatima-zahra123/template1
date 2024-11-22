var scrollToTopButton = document.querySelector('.scroll')
window.onscroll = function () {
  console.log(window.scrollY)
  if (window.scrollY >= 600) {
    scrollToTopButton.style.right = '20px'
  } else {
    scrollToTopButton.style.right = '-60px'
  }
}

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
