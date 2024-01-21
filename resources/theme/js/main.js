// PAGE DISPLAY LOGIC

// Sign In/ Sign Up modal control --------------------------------------------------------------------------------
const signInModal = document.getElementById("signin-modal");
const openSigninModalNav = document.getElementById("nav-signin");
const closeSigninModalButton = document.getElementById("button-close-modal");

openSigninModalNav.addEventListener('click',event=>{
    event.preventDefault();
    openSigninModal();
})

function openSigninModal(){
    console.log("sign in modal opened");
}

function closeSigninModal(){
    signInModal.remove();
}