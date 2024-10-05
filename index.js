// btn2 = document.querySelector('.btn-2')
// veiled = document.querySelector('.veiled')

// btn2.addEventListener('click', ()=>{
//     veiled.classList.toggle('half');
// })

// var counter = 1;
// setInterval(function(){
//     document.getElementById('radio'+counter).checked = true;
//     counter++;

//     if(counter>2){
//         counter = 1;
//     }

// },5000)

// for(var i = 0; i < 10; i++) {
//     document.body.innerHTML += '<div class="slides"><div class="slide first"><img src="img/52608C9C-9917-4661-8BF9-AC23EB40FCA6.jpg" </div><div class="slide second"><img src="img/A44200E5-8F86-4A05-B497-A24973C75F3D.jpg"></div>'
//  }

Bharosa = document.querySelector('.TuHiBharosa')
overlay2 = document.querySelector('.login-body')
Wrapper2 = document.querySelector('.wrapper')
// ham3 = document.querySelector('.ham3')


// ham3.addEventListener("click", ()=>{
//     ham3.classList.toggle("no-display");
// })

let VeiledNav = document.querySelector(".veiled");
function veil() {
    // open.classList.toggle('overlay');
    // open.classList.toggle('h-overlay');
    VeiledNav.classList.toggle("veiled");
    VeiledNav.classList.toggle("h-veiled");
    Bharosa.classList.toggle("ZindagiKa");
    // overlay2.classList.toggle('display-on-2');
    overlay2.classList.toggle('login-body');
    overlay2.classList.toggle('h-login-body');
    overlay2.classList.toggle('fade-in');
    Wrapper2.classList.toggle('popup');

    // ham3.classList.toggle('display-on');
    //     ham3.classList.toggle("active");
    //     hamMenu.classList.toggle('no-display');
    //     navlogo.classList.toggle('v-class-resp');
    //     navicons.classList.toggle('no-display');
    //     mpopular.classList.toggle('chhupja');
    //     categories.classList.toggle('chhupja');
    
}

const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');

RegisterLink.addEventListener('click', ()=> {
    wrapper.classList.add('active-2');
})

LoginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active-2');
})