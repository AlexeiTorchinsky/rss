import './index.html';
import './sass/main.scss';

import { burger } from './modules/burger';
import { moveLeft, arrowLeft, moveRight, arrowRight, paginationButtons } from './modules/carusel';
import { changeBookCard, radioButtons } from './modules/favorites';
import { profileIcon, autorizationMenu} from './modules/autorization';
import { setUserData } from './modules/registration';





burger();

arrowLeft.addEventListener('click',  moveLeft);
arrowRight.addEventListener('click', moveRight);





window.addEventListener('load',  () => {
  arrowRight.removeEventListener('click', moveRight);
  arrowRight.classList.add('_not-active');
})

if (autorizationMenu.classList.contains('_authorised')) {
  registerButton.textContent = 'My profile';
  loginButton.textContent = 'Log out';
}
