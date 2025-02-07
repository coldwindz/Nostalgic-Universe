burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
navRight = document.querySelector('.navRight')
navlogo = document.querySelector('.logo-resp')
navicons = document.querySelector('.icons-resp')
mpopular = document.querySelector('.mostPopular')
swiper = document.querySelector('.nonuSlider')
categories = document.querySelector('.categories')
mpopular2 = document.querySelector('.mostPopular2')
mpopular3 = document.querySelector('.mostPopular3')
mpopular4 = document.querySelector('.mostPopular4')
mpopular5 = document.querySelector('.mostPopular5')


// over = document.querySelector('.overlay')
// clickburger = document.querySelector('.clickburger')

burger.addEventListener('click', ()=>{
    // navRight.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    navlogo.classList.toggle('v-class-resp');
    navicons.classList.toggle('v-class-resp');
    
    // clickburger.classList.toggle('v-class-resp');
    // over.classList.toggle('h-overlay');
})

    let hamMenu = document.querySelector(".ham");

    hamMenu.addEventListener("click", ()=>{
        hamMenu.classList.toggle("active");
    })

    // let hamMenu2 = document.querySelector(".ham2");

    // hamMenu2.addEventListener("click", ()=>{
    //     hamMenu2.classList.toggle("active");
    // })

    let open = document.querySelector('.overlay');
    function third() {
        open.classList.toggle('overlay');
        open.classList.toggle('h-overlay');
        overlay1.classList.toggle('display-on');
        // open.classList.toggle('chhupja');
        mpopular.classList.toggle('chhupja');
        categories.classList.toggle('chhupja');
        // swiper.classList.toggle('chhupja');
        mpopular2.classList.toggle('dnone');
        mpopular3.classList.toggle('dnone');
        mpopular4.classList.toggle('dnone');
        mpopular5.classList.toggle('dnone');
    }

    // let open2 = document.querySelector('.overlay2');
    // function search() {
    //     open2.classList.toggle('overlay2');
    //     open2.classList.toggle('h-overlay2');
    //     hamMenu2.classList.toggle("active");
    // }

    let ham2 = document.querySelector(".ham2");

    ham2.addEventListener("click", ()=>{
        // navlogo.classList.toggle('v-class-resp');
        // navicons.classList.toggle('display-on');
        
        ham2.classList.toggle("no-display");
    })

overlay1 = document.querySelector('.overlay-content')
ham2 = document.querySelector('.ham2')

    searchicon.addEventListener('click', ()=>{
        // navlogo.classList.toggle('v-class-resp');
        // navicons.classList.toggle('v-class-resp');

        // hamMenu.classList.toggle('no-display');
        // overlay.classList.toggle('no-display');
        // hamMenu.classList.toggle("active");
        // open.classList.toggle('over-the-top');
    })

    overlay2 = document.querySelector('.login-body')

    let ham3 = document.querySelector(".ham3");


ham3.addEventListener("click", ()=>{
    ham3.classList.toggle("no-display");
})

ham3 = document.querySelector('.ham3')

    
    function fourth() {
      

        open.classList.toggle('overlay');
        open.classList.toggle('h-overlay');
        ham3.classList.toggle('display-on');
        ham3.classList.toggle("active");
        
        hamMenu.classList.toggle('no-display');
        navlogo.classList.toggle('v-class-resp');
        navicons.classList.toggle('no-display');

        mpopular.classList.toggle('chhupja');
        categories.classList.toggle('chhupja');
        // mpopular.classList.toggle('chhupja');
        // categories.classList.toggle('chhupja');
        // hamMenu.classList.toggle('display-on');

        
        // VeiledNav.classList.toggle("veiled");
        // VeiledNav.classList.toggle("h-veiled");
        // Bharosa.classList.toggle("ZindagiKa");
        // overlay2.classList.toggle('display-on-2');

        overlay2.classList.toggle('login-body');
        overlay2.classList.toggle('h-login-body');
        // overlay2.classList.toggle('fade-in');
        // Wrapper2.classList.toggle('popup');

        mpopular2.classList.toggle('dnone');
        mpopular3.classList.toggle('dnone');
        mpopular4.classList.toggle('dnone');
        mpopular5.classList.toggle('dnone');
    }

    // function crazy() {
        
    // }

    function fifth() {
        open.classList.toggle('overlay');
        open.classList.toggle('h-overlay');
        ham2.classList.toggle('display-on');
        ham2.classList.toggle("active");
        hamMenu.classList.toggle('no-display');
        navlogo.classList.toggle('v-class-resp');
        navicons.classList.toggle('no-display');
        mpopular.classList.toggle('chhupja');
        categories.classList.toggle('chhupja');
        mpopular2.classList.toggle('dnone');
        mpopular3.classList.toggle('dnone');
        mpopular4.classList.toggle('dnone');
        mpopular5.classList.toggle('dnone');
    }

    // let open2 = document.querySelector('.overlay');
    // function search() {
    //     open2.classList.toggle('overlay');
    //     open2.classList.toggle('h-overlay');
    // }

    // overlay = document.querySelector('.overlay-content')
    // searchicon.addEventListener('click', ()=>{
    //     overlay.classList.toggle('v-class-resp');
    // })

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