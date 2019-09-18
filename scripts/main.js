let currentUser;
const signUpForm = document.querySelector("#sign-up"); 
signUpForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    //get user info

    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;

    console.log(email, password);

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(creds => {
       window.location ="/welcome.html";
    });
})
