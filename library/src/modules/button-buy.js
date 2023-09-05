import { openLoginModal } from './autorization';

export const buttonsBuy = document.querySelectorAll('.button-buy-book');

buttonsBuy.forEach(button => button.addEventListener('click', openLoginModal));