const menuBtn = document.querySelector('.dropbtn')
const list = document.querySelector('.dropdown-content')

menuBtn.addEventListener('click', (e)=> {
if (list.style.display === 'none') {
  list.style.display = 'block'
} else {
  list.style.display = 'none'
}
})







