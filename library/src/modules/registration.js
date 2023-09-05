import { 
  removeClassName,
  burgerIcon
 } from "./burger";

import {
  registerModal,
  // profileIcon,
  registerButton,
  loginButton,
  profileIconContainer,
  autorizationMenu, 
  closeBurger, 
  openRegisterModal,
  openAuthorizationMenu
} from './autorization';

const signIn = document.querySelector('.register-button');
const emailInput = document.querySelector('.register-input__email');
const passwordInput = document.querySelector('.register-input__password');
const userName = document.querySelector('.register-input__user-name');
const userLastName = document.querySelector('.register-input__user-last-name');
const autorizationMenuTitle = document.querySelector('.autorisation-menu__title');

const removeMistake = () => {

  userName.classList.remove('mistake');
  emailInput.classList.remove('mistake');
  passwordInput.classList.remove('mistake');
  userLastName.classList.remove('mistake');
}

const generateCardNumb = () => {

  const minNum = 100000000;
  const maxNum = 999999999;
  
  const nineDigit = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  function fromDecimal(decimal, alphabet) {
    const base = alphabet.length;
    let result = '';

    while (decimal) {
      result = alphabet[decimal % base] + result;
      decimal = Math.floor(decimal / base);
    }

    return result; 
  }
  return fromDecimal(nineDigit, '0123456789ABCDEF')
} 


export const setUserData = () => {
  const firstName = document.getElementById("register-name").value;
  const lastName = document.getElementById("register-last-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const cardNumb = generateCardNumb();



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
      password,
      cardNumb
    };



    registerModal.classList.remove("modal-register_opened");

    localStorage.setItem("userData", JSON.stringify(userData));



    document.getElementById("register-name").value = "";
    document.getElementById("register-last-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";

    removeClassName();

    // profileIcon.classList.add('_hidden');
    profileIconContainer.classList.add('_logged');
    profileIconContainer.textContent = `${userData.firstName[0]}${userData.lastName[0]}`;
    profileIconContainer.setAttribute('title', `${userData.firstName} ${userData.lastName}`)
    autorizationMenu.classList.add('_authorized');
    autorizationMenuTitle.textContent = userData.cardNumb;
    registerButton.textContent = 'Log out';
    loginButton.textContent = 'My profile';


    const logOut = () => {
        autorizationMenu.classList.remove('_authorized');
        profileIconContainer.classList.remove('_logged');
        profileIconContainer.textContent = null;
        profileIconContainer.removeAttribute('title')
        autorizationMenu.classList.toggle('_opened');
        registerButton.textContent = 'Register';
        loginButton.textContent = 'Log in';
        autorizationMenuTitle.textContent = 'Profile';
    }

    registerButton.removeEventListener('click',  openRegisterModal);
   
    registerButton.addEventListener('click', () => {

      if (autorizationMenu.classList.contains('_authorized')) {
        logOut();
        registerButton.addEventListener('click',  openRegisterModal);
      }
    })
    
    
    

  }




}

signIn.addEventListener('click', setUserData);

