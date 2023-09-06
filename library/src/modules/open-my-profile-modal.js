import { 
  loginButton,
  openLoginModal,
  autorizationMenu
 } from "./autorization";

 import { 
  bodyCover,
  body, 
  removeClassName } from "./burger";

export const myProfileModal = document.querySelector('.modal-my-profile');
const closeMyProfileModal = document.querySelector('.my-profile-close-btn');

export const openMyProfileModal = () => {
    autorizationMenu.classList.remove("_opened");
    bodyCover.classList.add("_active", "_modal-opened");
    myProfileModal.classList.add("modal-my-profile_opened");
    body.classList.add("_locked");
    window.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("body__cover")) {
        removeClassName();
        myProfileModal.classList.remove("modal-my-profile_opened");
      }
    });
  };

  closeMyProfileModal.addEventListener("click", () => {
    removeClassName();
    myProfileModal.classList.remove("modal-my-profile_opened");
  });


 

  
