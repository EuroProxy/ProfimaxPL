const publicDate = document.querySelectorAll('.publicDate')
const dateSpan = document.querySelectorAll('.currentDate')
const leftPlace = document.querySelectorAll('.leftPlace')

publicDate.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
})
dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})
const left = Math.floor(Math.random() * (15 - 5) + 5)
leftPlace.forEach(item => {
  item.innerHTML = left
})


//popup
setTimeout(() => {
  $('.popupForm').fadeIn()
}, 3000)
$('.modal').click(function () {
  if (event.target === $('.modal')[0]) {
    $('.modal').fadeOut()
  }
})
$('.popupForm').click(function () {
  if (event.target === $('.popupForm')[0] || event.target === $('.modal--wrapper')[0]) {
    $('.modal').fadeOut()
  }
})
