import { 
  removeClassName,
  burgerIcon
 } from "./burger";

import {
  registerModal,
  profileIcon,
  registerButton,
  loginButton,
  profileIconContainer,
  autorizationMenu, 
  closeBurger
} from './autorization';

const signIn = document.querySelector('.register-button')
const emailInput = document.querySelector('.register-input__email');
const passwordInput = document.querySelector('.register-input__password');
const userName = document.querySelector('.register-input__user-name');
const userLastName = document.querySelector('.register-input__user-last-name');

const removeMistake = () => {

  userName.classList.remove('mistake');
  emailInput.classList.remove('mistake');
  passwordInput.classList.remove('mistake');
  userLastName.classList.remove('mistake');
}

export const setUserData = () => {
  const firstName = document.getElementById("register-name").value;
  const lastName = document.getElementById("register-last-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;



  removeMistake();

  if (!firstName) {
    userName.classList.add('mistake');
    userName.placeholder = 'please enter name';
    return;
  }

  if (!lastName) {
    userLastName.classList.add('mistake');
    userLastName.placeholder = 'please enter last name';
    return;
  }

  const emailRegex = /^[^\s@]+[-.\w]*@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || !email) {
    emailInput.placeholder = 'please enter valid e-mail';
    emailInput.classList.add('mistake');
    return;
  }

  if (!password || password.length < 8) {
    passwordInput.placeholder = 'not less 8 symbols';
    passwordInput.classList.add('mistake');
    return;
  }




  if (firstName && lastName && email && password) {
    removeMistake();
    const userData = {
      firstName,
      lastName,
      email,
      password
    };



    registerModal.classList.remove("modal-register_opened");

    localStorage.setItem("userData", JSON.stringify(userData));



    document.getElementById("register-name").value = "";
    document.getElementById("register-last-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";

    removeClassName();

    profileIcon.classList.add('_hidden');
    profileIconContainer.classList.add('_logged');
    profileIconContainer.textContent = `${userData.firstName[0]}${userData.lastName[0]}`;
    autorizationMenu.classList.add('_authorised');

  }
}

signIn.addEventListener('click', setUserData);

if (autorizationMenu.classList.contains('_authorised')) {
  registerButton.textContent = 'My profile';
  loginButton.textContent = 'Log out';
}