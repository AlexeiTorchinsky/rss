import { burgerIcon, body, headerNavMenu, bodyCover, headerNavList, removeClassName } from './burger';

const profileIcon = document.querySelector('.header__profile-icon');
const registerButton = document.querySelector('.autorisation-menu__register');
const registerModal = document.querySelector('.modal-register');
export const autorizationMenu = document.querySelector('.autorisation-menu');
export const  closeRegister = document.querySelector('.modal-register__close-btn');

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
    
    // bodyCover.style.background = 'rgba(142, 142, 142, 0.5)';
    // bodyCover.style.zIndex = '20';
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

registerButton.addEventListener('click', () => {
    openRegisterModal();
})

closeRegister.addEventListener('click', () => {
    removeClassName();
    registerModal.classList.remove('modal-register_opened');
})