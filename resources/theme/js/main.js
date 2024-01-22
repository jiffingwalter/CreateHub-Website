import { getModal } from './modals.js';
// PAGE DISPLAY LOGIC

// modal control --------------------------------------------------------------------------------
function openModal(modalName){
    console.log("modal opened");
    const modal = document.createElement("div");
    document.body.prepend(modal);
    modal.innerHTML = getModal(modalName);

    const modalElement = document.getElementById("modal");
    const closeModalButton = document.getElementById("button-close-modal");

    closeModalButton.addEventListener("click", event=>{
        event.preventDefault();
        closeModal();
    });

    function closeModal(){
        console.log("modal closed");
        modalElement.remove();
    }
}

// sign in modal -------------------------------------------------------------------------------
const openSigninModalNav = document.getElementById("nav-signin");
openSigninModalNav.addEventListener('click',event=>{
    event.preventDefault();
    openModal('signinSignup');
})