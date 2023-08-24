import './index.html';
import './sass/main.scss';

import { burger } from './modules/burger';
import { moveLeft, arrowLeft, moveRight, arrowRight, paginationButtons } from './modules/carusel';






burger();

arrowLeft.addEventListener('click',  moveLeft);
arrowRight.addEventListener('click', moveRight)


 


window.addEventListener('load',  () => {
  arrowRight.removeEventListener('click', moveRight);
  if (window.screen.width < 1431) {
    paginationButtons[0].classList.toggle('_active');
  } else {
    paginationButtons[1].classList.toggle('_active');
  }
 
})

