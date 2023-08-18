// const paginationButton = document.querySelector('.pagination__button-container');
// const imageFirst = document.querySelector('.slider__img_first');
// const slider = document.querySelector('.about__slider');


const sliderImages = document.querySelector('.slider__images');
export const arrowLeft = document.querySelector('.arrows-btn_left');
export const arrowRight = document.querySelector('.arrows-btn_right');
  
  let position = 1;
  let step = 475;
  export const moveLeft = () => {
    sliderImages.style.transform = `translateX(-${step * position}px)` ;
    position += 1;
    if (position === 5) {
      arrowLeft.removeEventListener('click', moveLeft)
    }
    console.log(position)

  }

  export const  moveRight = () => {
    sliderImages.style.transform = `translateX(${step * position}px)` ;
    position -= 1;
    if (position === -4) {
      arrowLeft.removeEventListener('click', moveRight)
    }
  }