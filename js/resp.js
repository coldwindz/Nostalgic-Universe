burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
navRight = document.querySelector('.navRight')
navlogo = document.querySelector('.logo-resp')

burger.addEventListener('click', ()=>{
    navRight.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    navlogo.classList.toggle('v-class-resp');

})