import { burgerIcon, body, headerNavMenu, bodyCover, headerNavList, removeClassName } from './burger';

const profileIcon = document.querySelector('.header__profile-icon');
const registerButton = document.querySelector('.autorisation-menu__register');
const loginButton = document.querySelector('.autorisation-menu__login');
const registerModal = document.querySelector('.modal-register');
const loginModal = document.querySelector('.modal-login');
export const autorizationMenu = document.querySelector('.autorisation-menu');
export const  closeRegister = document.querySelector('.modal__close-btn');

const closeBurger = () => {
    burgerIcon.classList.remove('_active');
    headerNavMenu.classList.remove('_active');
    headerNavList.classList.remove('_active');
    body.classList.remove('_locked');
    bodyCover.classList.remove('_active');
}


profileIcon.addEventListener('click', () => {
    if (burgerIcon.classList.contains('_active')) {
        closeBurger(); 
    }
    autorizationMenu.classList.toggle('_opened');
})

window.addEventListener('click', (e) => {
    if (autorizationMenu.classList.contains('_opened') && e.target !== profileIcon && !autorizationMenu.contains(e.target)) {
        autorizationMenu.classList.remove('_opened');
    }
});

const openRegisterModal = () => {
    autorizationMenu.classList.remove('_opened');
    bodyCover.classList.add('_active', 'body__cover_modal-opened');
    registerModal.classList.add('modal-register_opened')
    body.classList.add('_locked');
    window.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains('body__cover') ) {
          removeClassName();
          registerModal.classList.remove('modal-register_opened')
        }
      
      })
}

const openLoginModal = () => {
    autorizationMenu.classList.remove('_opened');
    bodyCover.classList.add('_active', 'body__cover_modal-opened');
    loginModal.classList.add('modal-login_opened')
    body.classList.add('_locked');
    window.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains('body__cover') ) {
          removeClassName();
          loginModal.classList.remove('modal-login_opened');
        }
      
      })
}

registerButton.addEventListener('click', () => {
    openRegisterModal();
})

closeRegister.addEventListener('click', () => {
    removeClassName();
    registerModal.classList.remove('modal-register_opened');
    loginModal.classList.remove('modal-login_opened');
})

loginButton.addEventListener('click',  openLoginModal)