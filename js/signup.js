// var a;
// function pass()
// {
//     if(a==1)
//     {
//         document.getElementById('password').type='password';
//         document.getElementById('pass-icon').src='../img/passshow.png';
//         a=0;
//     }
//     else
//     {
//         document.getElementById('password').type='text';
//         document.getElementById('pass-icon').src='../img/passhide.png';
//         a=1;
//     }
// }

    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFBBQEsdJXEEyWig3Vl1xm0pkLywMpQCI",
    authDomain: "login-with-firebase-data-27f12.firebaseapp.com",
    projectId: "login-with-firebase-data-27f12",
    storageBucket: "login-with-firebase-data-27f12.appspot.com",
    messagingSenderId: "528404007876",
    appId: "1:528404007876:web:067e07792904dd577f3291"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize variables
    //   const auth = firebase.auth()
    //   const database = firebase.database()
    const auth = getAuth();
    const database = getDatabase(app);

  
  register.addEventListener('click',(e) => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  

  // Set up our register function
//   function register () {
//     // Get all our input fields
//     user_name = document.getElementById('user_name').value
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value

    // Validate input fields
    // if (validate_email(email) == false || validate_password(password) == false) {
    //     alert('Email or Password is Outta Line')
    //     return
    //     // Don't continue running the code
    // }
    // if (validate_field(user_name) == false) {
    //     alert('Username is Outta Line!')
    //     return
    // }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    set(ref(database, 'users/' + user.uid),{
        username: username,
        email: email,
        password: password,
    })

    alert('user created');
    // ...
  })

    // Move on with Auth
    // auth.createUserWithEmailAndPassword(email, password)
    // .then(function() {
    //     // Declare user variable
    //     var user = auth.currentUser

    //     // Add this user to Firebase Database
    //     var database_ref = database.ref()

    //     // Create user data
    //     var user_data = {
    //         email : email,
    //         user_name : user_name,
    //         last_login : Date.now()
    //     }

    //     database_ref.child('users/' + user.uid).set(user_data)

    //     alert('User Created!')

    // })
    .catch((error) => {
        // Firebase will use this to alert of its errors
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    });
});


    login.addEventListener('click',(e)=>{

        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('p2').value;
        
        var SignUp = document.getElementById('SignUp');

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                const dt = new Date();
                update(ref(database, 'users/' + user.uid),{
                    last_login: dt,
                })

                alert('User logged in!');
                // ...

                
                        SignUp.classList.toggle('display-no');
                        
                    
               

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
            });

    });

    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

      logout.addEventListener('click',(e)=>{

        signOut(auth).then(() => {
            // Sign-out successful.
            alert('user logged out');

            
                    SignUp.classList.toggle("display-on");
                    
               

          }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                
          });

      })

  // Set up our login function
  

  // Validate Functions
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
