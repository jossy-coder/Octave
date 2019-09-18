const welcome = document.querySelector("#welcome");
let logOut = document.querySelector("#logout");
logOut.addEventListener("click", (e)=> {
    e.preventDefault();
    auth.signOut().then(()=>{
        window.location = "/login.html";
    });
});
