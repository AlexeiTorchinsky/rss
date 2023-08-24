const sliderImages = document.querySelector('.slider__images');
const sliderImagesAll = document.querySelectorAll('.slider__img');
export const paginationButtons = document.querySelectorAll('.pagination__button');
export const arrowLeft = document.querySelector('.arrows-btn_left');
export const arrowRight = document.querySelector('.arrows-btn_right');
  
console.log( 'sliderImagesAll.length=', sliderImagesAll.length)
  let position = 0;
  let step = 475;
  let isAnimating = false;

  export const moveLeft = () => {
    
    if (!isAnimating) {
      isAnimating = true;
      position += step;
      console.log(position)

    if (position >= 0) {
      arrowRight.addEventListener('click',  moveRight);
      sliderImages.style.transform = `translateX(-${position}px)`;

    }

    if (position >= (sliderImagesAll.length - 1) * step) {
      arrowLeft.removeEventListener('click', moveLeft)
    } 
    }


    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  
  }
  
  export const  moveRight = () => {

    if (!isAnimating) {

      isAnimating = true; 

      if (position >= 0 || position < (sliderImagesAll.length - 1) * step) {
        arrowLeft.addEventListener('click',  moveLeft);
      }
     
      position -= step;
      sliderImages.style.transform = `translateX(-${position}px)` ;
      
        if (position <= 0) {
          arrowRight.removeEventListener('click',  moveRight);
        }
        
     
  
      console.log(position)
    }
    
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
    
  }
