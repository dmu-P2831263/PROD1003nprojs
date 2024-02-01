console.log('asd')
const menu = document.querySelector('#mobile-menu')
console.log(menu)
const menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener('click',function(){
    console.log('y rsh')
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
})