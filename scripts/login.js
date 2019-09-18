
const logIn = document.querySelector("#login");
logIn.addEventListener("submit", (e)=> {
    e.preventDefault();
    // get user info
    const password = logIn["password"].value;
    const email = logIn["email"].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
    
    });
})

auth.onAuthStateChanged(user => {
if (!user) {
    alert("Sign in or create an account");
} else{
    window.location = "/welcome.html";
}
})



