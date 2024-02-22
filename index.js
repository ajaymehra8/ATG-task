const signupPage=document.querySelector(".signup");
const body=document.querySelector("body");
const loginPage=document.querySelector(".login");
const options=document.querySelectorAll(".optionOpen");


//showing sign up page
const showSignUp=()=>{
body.style.overflowY="hidden";
body.style.background="linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.5))";
signupPage.classList.add("showPage");
loginPage.classList.remove("showPage");

}
//showing log in page
const showLogin=()=>{
    body.style.overflowY="hidden";
    body.style.background="linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.5))";

    signupPage.classList.remove("showPage");

    loginPage.classList.add("showPage");
    }
 //hiding pages   
const hidePage=()=>{
    body.style.background="none"
    body.style.overflowY="visible";
signupPage.classList.remove("showPage");
loginPage.classList.remove("showPage");

}

//show options
function showOption(e){
    const option = e.target.parentElement.parentElement.nextElementSibling;
option.classList.toggle("showOption")
}
