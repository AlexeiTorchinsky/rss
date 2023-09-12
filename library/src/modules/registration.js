import { 
  removeClassName,
  burgerIcon
 } from "./burger";

import {
  registerModal,
  registerButton,
  loginButton,
  profileIconContainer,
  autorizationMenu, 
  openRegisterModal,
  openLoginModal,
  loginModal
} from './autorization';

import { 
  openMyProfileModal,
  myProfileModal,
  cardNumber
} from './open-my-profile-modal';


import { generateCardNumb } from "./generate0card-number";

import { changeCheckTheCardButton, changeCheckTheCardButtonBack, checkCardButtonListener } from "./change-chech-the-card-btn";

const signInButton = document.querySelector('.register-button');
const emailInput = document.querySelector('.register-input__email');
const passwordInput = document.querySelector('.register-input__password');
const userName = document.querySelector('.register-input__user-name');
const userLastName = document.querySelector('.register-input__user-last-name');
const autorizationMenuTitle = document.querySelector('.autorisation-menu__title');
const profileInitials = document.querySelector('.profile-picture');
const profileName = document.querySelector('.profile-name');
const loginEmailInput = document.getElementById('login-email-or-card');
const loginPassword = document.getElementById('login-password');
const logInButton = document.getElementById('login-button');
const visitCounter = document.querySelector('.profile-data__counter');
// let checkCardButton = document.querySelector('.check-the-card');
const booksCounter = document.querySelector('.books-counter');
// const profileDataColumns = document.querySelector('.profile-data-columns');
// const digitalCardsInputs = document.querySelector('.digital-library-cards-input-forms_inputs');
const digitCardButtonCheck = document.getElementById('check-thecard-button');







export const userDataSaved = localStorage.getItem("userData");

let counter = 0;
let books = 0;

let hasRegistered = false;
let hasLogged = false;



export const removeMistake = () => {

  userName.classList.remove('mistake');
  emailInput.classList.remove('mistake');
  passwordInput.classList.remove('mistake');
  userLastName.classList.remove('mistake');
}

// const changeCheckTheCardButton = () => {
//   checkCardButton.classList.add('_logged-in');
//   checkCardButton.innerHTML = profileDataColumns.innerHTML;
//   digitalCardsInputs.style.marginBottom = '5px';
// } 



// const changeCheckTheCardButtonBack = () => {

//   checkCardButton.classList.remove('_logged-in');
//   checkCardButton.innerHTML = '<button class="button input-button" id="check-thecard-button">Check the card</button>';
//   digitalCardsInputs.style.marginBottom = '20px';
//   document.getElementById('check-thecard-button').addEventListener('click', checkCardButtonListener)

// }

// const checkCardButtonListener = () => {
//   changeCheckTheCardButton();
//   setTimeout(
//   changeCheckTheCardButtonBack, 10000);
// }

export const logOut = () => {
        
  autorizationMenu.classList.remove('_authorized');
  profileIconContainer.classList.remove('_logged');
  profileIconContainer.textContent = null;
  profileIconContainer.removeAttribute('title')
  autorizationMenu.classList.toggle('_opened');
  registerButton.textContent = 'Register';
  loginButton.textContent = 'Log in';
  autorizationMenuTitle.textContent = 'Profile';
  loginButton.removeEventListener('click', openMyProfileModal);
  loginButton.addEventListener('click', openLoginModal);

  changeCheckTheCardButtonBack(); 
 

}

export const registered = () => {

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
      let userData = {
      firstName,
      lastName,
      email,
      password,
      cardNumb,
      books
    };



    registerModal.classList.remove("modal-register_opened");

    localStorage.setItem("userData", JSON.stringify(userData));


    userName.value = '';
    userLastName.value = '';
    emailInput.value = '';
    passwordInput.value = '';


    removeClassName();

    const getIn = () => {
      

      profileIconContainer.classList.add('_logged');
      profileIconContainer.textContent = `${userData.firstName[0]}${userData.lastName[0]}`;
      profileIconContainer.setAttribute('title', `${userData.firstName} ${userData.lastName}`)
      autorizationMenu.classList.add('_authorized');
      autorizationMenuTitle.textContent = userData.cardNumb;
      registerButton.textContent = 'Log out';
      loginButton.textContent = 'My profile';
      loginButton.removeEventListener('click', openLoginModal);
      loginButton.addEventListener('click', openMyProfileModal);
      cardNumber.textContent = userData.cardNumb;
      profileInitials.textContent = profileIconContainer.textContent;
      profileName.textContent = `${userData.firstName} ${userData.lastName}`;
      counter += 1;
      console.log(counter);
      visitCounter.textContent = counter;
      booksCounter.textContent = books;
      

    }

    getIn();



    registerButton.addEventListener('click', () => {
      if (autorizationMenu.classList.contains('_authorized')) {
        logOut();
        registerButton.addEventListener('click',  openRegisterModal);
      }
    }) 
    
  
      
 
    console.log(userDataSaved)

  


    }

    hasRegistered = true;
    console.log('hasRegistered: ', hasRegistered)
    
  }

signInButton.addEventListener('click', registered);
passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
     registered();
  }
});


logInButton.addEventListener('click', () => {
  let userData;
  if (userDataSaved) {
    userData =  userData = JSON.parse(userDataSaved);
  }

 

  if ((loginEmailInput.value === userData.email || loginEmailInput.value === userData.cardNumb) && loginPassword.value === userData.password) {
      
      profileIconContainer.classList.add('_logged');
      profileIconContainer.textContent = `${userData.firstName[0]}${userData.lastName[0]}`;
      profileIconContainer.setAttribute('title', `${userData.firstName} ${userData.lastName}`)
      autorizationMenu.classList.add('_authorized');
      autorizationMenuTitle.textContent = userData.cardNumb;
      registerButton.textContent = 'Log out';
      loginButton.textContent = 'My profile';
      loginButton.removeEventListener('click', openLoginModal);
      loginButton.addEventListener('click', openMyProfileModal);
      cardNumber.textContent = userData.cardNumb;
      profileInitials.textContent = profileIconContainer.textContent;
      profileName.textContent = `${userData.firstName} ${userData.lastName}`;
      counter += 1;
      visitCounter.textContent = counter;
      console.log(counter);

    removeClassName();
    loginModal.classList.remove("modal-login_opened");
    
    changeCheckTheCardButton();


    hasLogged = true;
    console.log('hasLogged: ', hasLogged)
  }
})



digitCardButtonCheck.addEventListener('click', () => {
  checkCardButtonListener();
})



