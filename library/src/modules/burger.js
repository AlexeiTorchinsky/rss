const body = document.body;
const burgerIcon = document.querySelector('.header__burger-menu-icon');
const headerNavMenu = document.querySelector('.header__nav');
const bodyCover = document.querySelector('.body__cover');
const profileIcon = document.querySelector('.header__profile-icon');
const headerNavList = document.querySelector('.nav__items');
const navItems = document.querySelectorAll('.nav__item');


export function burger() {
  const toggleClassName = () => {
    burgerIcon.classList.toggle('_active');
    headerNavMenu.classList.toggle('_active');
    headerNavList.classList.toggle('_active');
    body.classList.toggle('_locked');
    profileIcon.classList.toggle('_active');
    bodyCover.classList.toggle('_active');
  }
  
  burgerIcon.addEventListener('click', toggleClassName);
  
  navItems.forEach(el => el.addEventListener('click', () => {
    if (headerNavList.classList.contains('_active')) {
      toggleClassName();
    };
  }));
  
  window.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('body__cover') || target.classList.contains('header__profile-icon')) {
      toggleClassName();
    }
  
  });

  // if (window.screen.width > 1025) {
  //   toggleClassName();
  // }
}
