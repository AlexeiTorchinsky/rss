import './index.html';
import './sass/main.scss';

import { burger } from './modules/burger';
import { moveLeft, arrowLeft, moveRight, arrowRight } from './modules/carusel';






burger();

arrowLeft.addEventListener('click',  moveLeft);
arrowRight.addEventListener('click', moveRight)


 
document.addEventListener("DOMContentLoaded", () => {
    arrowRight.removeEventListener('click', moveRight);
  })

