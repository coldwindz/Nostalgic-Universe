burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
navRight = document.querySelector('.navRight')
navlogo = document.querySelector('.logo-resp')
// over = document.querySelector('.overlay')
// clickburger = document.querySelector('.clickburger')

burger.addEventListener('click', ()=>{
    navRight.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    navlogo.classList.toggle('v-class-resp');
    // clickburger.classList.toggle('v-class-resp');
    // over.classList.toggle('h-overlay');
})

    let hamMenu = document.querySelector(".ham");

    hamMenu.addEventListener("click", ()=>{
        hamMenu.classList.toggle("active");
    })

    let open = document.querySelector('.overlay');
    function third() {
        open.classList.toggle('overlay');
        open.classList.toggle('h-overlay');
    }

    // let close = document.querySelector('.contact');
    // function kuchToofani() {
    //     document.getElementById("myNav").style.height = "0%";
        
    // }
     // let content = document.querySelector('.overlay-content');

   // content.classList.toggle('overlay-content');
        // content.classList.toggle('h-overlay-content');
        
   
    

    // function openNav() {
    //     document.getElementById("myNav").style.height = "100%";
    // }
    // function closeNav() {
    //     document.getElementById("myNav").style.height = "0%";
    // }

//     ham = document.querySelector('.burger')
//     over = document.querySelector('.overlay')
// ham.addEventListener('click', ()=>{
//     over.classList.toggle('h-overlay');
// })



// navToggle = document.querySelector('.nav-toggle')
// bars = document.querySelector('.bar')

// function toggleHamburger(e) {
//     bars.forEach(bar => bar.classList.toggle('x'))
// }
// navToggle.addEventListener('click', toggleHamburger)