// ////////refrence //////////////////////////////////
let userlink = document.getElementById('user');
let signoutlink = document.getElementById('signOut');
let header = document.getElementById('hh');
var currentUser = null;

//  ////////functions /////////////////////////
function getUsername() {

    currentUser = sessionStorage.getItem("user");
    return currentUser;
}

function Signout() {
    // console.log("hoja")
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    localStorage.removeItem("keepLoggedIn");
    window.location = "index.html";
}
// /////////window //////////////////////////////////

window.onload = function() {
    getUsername(); //.then((username) => {


    if (currentUser == null) {
        userlink.innerText = "Create Account"
        userlink.classList.replace("rd-nav-link", "btn");
        userlink.classList.add("btn-primary");
        userlink.href = "../LoginOverView/index.html";

        signoutlink.hidden = true
        signoutlink.innerText = "Login";
        signoutlink.classList.replace("rd-nav-link", "btn");
        signoutlink.classList.add("btn-success");
        signoutlink.href = "./pages/LoginOverView/index.html";

    } else {
        userlink.innerText = currentUser;
        header.innerText = "sign In successfully";
        userlink.classList.replace("btn", "rd-nav-link");
        userlink.classList.add("btn-primary");
        userlink.href = "../loginOverview/index.html";

        signoutlink.hidden = false
        signoutlink.innerText = "sign Out";
        signoutlink.classList.replace("btn", "rd-nav-link");
        signoutlink.classList.add("btn-success");
        signoutlink.addEventListener("click", Signout);
    }

}