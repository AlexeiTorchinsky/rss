import { autorizationMenu } from './autorization';

export const body = document.body;
export const burgerIcon = document.querySelector('.header__burger-menu-icon');
export const headerNavMenu = document.querySelector('.header__nav');
export const bodyCover = document.querySelector('.body__cover');
const profileIcon = document.querySelector('.header__profile-icon');
export const headerNavList = document.querySelector('.nav__items');
export const navItems = document.querySelectorAll('.nav__item');

export const removeClassName = () => {
  burgerIcon.classList.remove('_active');
  headerNavMenu.classList.remove('_active');
  headerNavList.classList.remove('_active');
  body.classList.remove('_locked');
  bodyCover.classList.remove('_active', 'body__cover_modal-opened');
  autorizationMenu.classList.remove('_opened');
}

export const toggleClassName = () => {
  burgerIcon.classList.toggle('_active');
  headerNavMenu.classList.toggle('_active');
  headerNavList.classList.toggle('_active');
  body.classList.toggle('_locked');
  bodyCover.classList.toggle('_active');
  autorizationMenu.classList.remove('_opened');
}
export function burger() {
  
  
  
  burgerIcon.addEventListener('click', toggleClassName);
  
  navItems.forEach(el => el.addEventListener('click', () => {
    if (headerNavList.classList.contains('_active')) {
      toggleClassName();
    };
  }));
  
  window.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('body__cover') /*|| target.classList.contains('header__profile-icon')*/) {
      toggleClassName();
    }
  
  });

  
}
