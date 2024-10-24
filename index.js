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


let Pshow = document.querySelector(".p-show");
Phide = document.querySelector('.p-hide');

var a;
function pass2() {
    Pshow.classList.toggle("p-show");
    Pshow.classList.toggle("display-no");
    Pshow.classList.toggle("p-hide");
    // document.getElementById('password').type='text';
    Phide.classList.toggle('display-on');

    if(a==1)
            {
                document.getElementById('p2').type='password';
                a=0;
            }
            else
            {
                document.getElementById('p2').type='text';
                a=1;
            }
    
}

let Pshow2 = document.querySelector(".p-show1");
let Phide2 = document.querySelector(".p-hide1");

var b;
function pass3() {
    Pshow2.classList.toggle("p-show1");
    Pshow2.classList.toggle("display-no1");
    Pshow2.classList.toggle("p-hide1");
    Phide2.classList.toggle('display-on1');

    if(b==1)
            {
                document.getElementById('password').type='password';
                b=0;
            }
            else
            {
                document.getElementById('password').type='text';
                b=1;
            }
    
}




// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAFBBQEsdJXEEyWig3Vl1xm0pkLywMpQCI",
//     authDomain: "login-with-firebase-data-27f12.firebaseapp.com",
//     projectId: "login-with-firebase-data-27f12",
//     storageBucket: "login-with-firebase-data-27f12.appspot.com",
//     messagingSenderId: "528404007876",
//     appId: "1:528404007876:web:067e07792904dd577f3291"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   // Initialize variables
//   const auth = firebase.auth()
//   const database = firebase.database()

//   // Set up our register function
//   function register () {
//     // Get all our input fields
//     username = document.getElementById('username').value
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value

//     // Validate input fields
//     if (validate_email(email) == false || validate_password(password) == false) {
//         alert('Email or Password is Outta Line')
//         return
//         // Don't continue running the code
//     }
//     if (validate_field(username) == false) {
//         alert('Username is Outta Line!')
//         return
//     }

//     // Move on with Auth
//     auth.createUserWithEmailAndPassword(email, password)
//     .then (function() {
//         // Declare user variable
//         var user = auth.currentUser

//         // Add this user to Firebase Database
//         var database_ref = database.ref()

//         // Create user data
//         var user_data = {
//             email : email,
//             username : username,
//             last_login : Date.now()
//         }

//         database_ref.child('users/' + user.uid).set(user_data)

//         alert('User Created!')

//     })
//     .catch(function(error) {
//         // Firebase will use this to alert of its errors
//         var error_code = error.code
//         var error_message = error.message

//         alert(error_message)
//     })

//   }

//   // Set up our login function
  

//   // Validate Functions
//   function validate_email(email) {
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if (expression.test(email) == true) {
//         // Email is good
//         return true
//     } else {
//         // Email is not good
//         return false
//     }
//   }

//   function validate_password(password) {
//     // Firebase only accepts lengths greater than 6
//     if (password < 6) {
//         return false
//     } else {
//         return true
//     }
//   }

//   function validate_field(field) {
//     if (field == null) {
//         return false
//     }

//     if (field.length <= 0) {
//         return false
//     } else {
//         return true
//     }
//   }
