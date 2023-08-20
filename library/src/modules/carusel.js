// const paginationButton = document.querySelector('.pagination__button-container');
// const imageFirst = document.querySelector('.slider__img_first');
// const slider = document.querySelector('.about__slider');


const sliderImages = document.querySelector('.slider__images');
const sliderImagesAll = document.querySelectorAll('.slider__img');
export const arrowLeft = document.querySelector('.arrows-btn_left');
export const arrowRight = document.querySelector('.arrows-btn_right');
  
console.log( 'sliderImagesAll.length=', sliderImagesAll.length)
  let position = 0;
  let step = 475;
  let counter = 0;
  export const moveLeft = () => {
    position += step;
    console.log(position)

    sliderImages.style.transform = `translateX(-${position}px)` ;
    if (position >= (sliderImagesAll.length - 1) * step) {
      arrowLeft.removeEventListener('click', moveLeft)
    }

  }

  export const  moveRight = () => {
    position = 0;
    position += step;
    sliderImages.style.transform = `translateX(${ position}px)` ;
    // position -= 1;

  }