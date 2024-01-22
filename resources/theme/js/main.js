import { getModal } from './modals.js';
// PAGE DISPLAY LOGIC

// modal control --------------------------------------------------------------------------------
function openModal(modalName){
    console.log("modal opened");
    const modal = document.createElement("modal");
    document.body.prepend(modal);
    modal.innerHTML = getModal(modalName);

    const closeModalButton = document.getElementById("button-close-modal");
    const closeModalBackground = document.getElementById("modal-background-close");
    closeModalButton.addEventListener("click", event=>{
        event.preventDefault();
        closeModal();
    });
    closeModalBackground.addEventListener("click",event=>{
        closeModal();
    });

    function closeModal(){
        console.log("modal closed");
        modal.remove();
    }
}

// sign in modal -------------------------------------------------------------------------------
const openSigninModalNav = document.getElementById("nav-signin");
openSigninModalNav.addEventListener('click',event=>{
    event.preventDefault();
    openModal('signinSignup');
})