import './index.html';
import './sass/main.scss';

import { burger } from './modules/burger';
import { moveLeft, arrowLeft, moveRight, arrowRight, paginationButtons } from './modules/carusel';






burger();

arrowLeft.addEventListener('click',  moveLeft);
arrowRight.addEventListener('click', moveRight)
;


window.addEventListener(`resize`, () => {
  if (window.screen.width < 1431) {
    paginationButtons[0].classList.add('_active');
    paginationButtons[1].classList.remove('_active')
  } else {
    paginationButtons[1].classList.add('_active');
    paginationButtons[0].classList.remove('_active');
  }
}, false);



window.addEventListener('load',  () => {
  arrowRight.removeEventListener('click', moveRight);
})

