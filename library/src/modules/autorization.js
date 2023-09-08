import {
  burgerIcon,
  body,
  headerNavMenu,
  bodyCover,
  headerNavList,
  removeClassName,
} from "./burger";

import { logOut } from './registration';


export const profileIconContainer = document.querySelector('.header__profile-icon-container');
export const registerButton = document.querySelector(".autorisation-menu__register");
export const loginButton = document.querySelector(".autorisation-menu__login");
export const registerModal = document.querySelector(".modal-register");
export const loginModal = document.querySelector(".modal-login");
export const autorizationMenu = document.querySelector(".autorisation-menu");
export const closeRegister = document.querySelector(".modal__close-btn");
export const closeLogin = document.querySelector('.login-close-btn');
export const registerButton2 = document.querySelector('.register-footer__span2');
export const loginButton2 = document.querySelector('.login-footer__span2');
const registerButton3 = document.querySelector('.digital-library-cards__button');
const loginButton3 = document.querySelector('.digital-library-cards__button2');

export const closeBurger = () => {
  burgerIcon.classList.remove("_active");
  headerNavMenu.classList.remove("_active");
  headerNavList.classList.remove("_active");
  body.classList.remove("_locked");
  bodyCover.classList.remove("_active");
};

export const openAuthorizationMenu = () => {
  if (burgerIcon.classList.contains("_active")) {
    closeBurger();
  }
  autorizationMenu.classList.toggle("_opened");
  
}
profileIconContainer.addEventListener("click", openAuthorizationMenu);

window.addEventListener("click", (e) => {
  if (
    autorizationMenu.classList.contains("_opened") &&
    // e.target !== profileIcon && 
    e.target !== profileIconContainer &&
    !autorizationMenu.contains(e.target)) 
  {
    autorizationMenu.classList.remove("_opened");
  }
});

export const openRegisterModal = () => {
  if (!autorizationMenu.classList.contains('_authorized')) {
    autorizationMenu.classList.remove("_opened");
  bodyCover.classList.add("_active", "_modal-opened");
  registerModal.classList.add("modal-register_opened");
  body.classList.add("_locked");
  console.log('openRegisterModal !')
  window.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("body__cover")) {
      removeClassName();
      registerModal.classList.remove("modal-register_opened");
    }
  });
  }
  

  registerButton.addEventListener('click', () => {
    if (autorizationMenu.classList.contains('_authorized')) {
      logOut();
      registerButton.addEventListener('click',  openRegisterModal);
    }
  }) 

};

export const openLoginModal = () => {
  autorizationMenu.classList.remove("_opened");
  bodyCover.classList.add("_active", "_modal-opened");
  loginModal.classList.add("modal-login_opened");
  body.classList.add("_locked");
  window.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("body__cover")) {
      removeClassName();
      loginModal.classList.remove("modal-login_opened");
    }
  });
};

registerButton.addEventListener('click',  openRegisterModal);

registerButton3.addEventListener('click',  openRegisterModal);

closeRegister.addEventListener("click", () => {
  removeClassName();
  registerModal.classList.remove("modal-register_opened");
});

closeLogin.addEventListener("click", () => {
  removeClassName();
  loginModal.classList.remove("modal-login_opened");
});

loginButton.addEventListener("click", openLoginModal);

loginButton3.addEventListener("click", openLoginModal);

registerButton2.addEventListener('click', () => {
  removeClassName();
  registerModal.classList.remove("modal-register_opened");
  openLoginModal();
})

loginButton2.addEventListener('click', () => {
  removeClassName();
  loginModal.classList.remove("modal-login_opened");
  openRegisterModal();
})

