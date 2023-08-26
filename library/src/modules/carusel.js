const sliderImages = document.querySelector('.slider__images');
const sliderImagesAll = document.querySelectorAll('.slider__img');
export const paginationButtons = document.querySelectorAll('.pagination__button');
export const arrowLeft = document.querySelector('.arrows-btn_left');
export const arrowRight = document.querySelector('.arrows-btn_right');
  
console.log( 'sliderImagesAll.length=', sliderImagesAll.length)
  let position = 0;
  let step = 475;
  let isAnimating = false;
  let activePageIndex = 0;

  if (window.screen.width < 1431) {
    paginationButtons[activePageIndex].classList.add('_active')
  } else {
    paginationButtons[activePageIndex + 1].classList.add('_active')
  }

  // paginationButtons[activePageIndex].classList.add('_active')

  export const moveLeft = () => {
    
    if (!isAnimating) {
      isAnimating = true;
      position += step;
      console.log(position)

    if (position >= 0) {

      arrowRight.addEventListener('click',  moveRight);
      sliderImages.style.transform = `translateX(-${position}px)`;
      paginationButtons[activePageIndex].classList.remove('_active');
      activePageIndex++;
      paginationButtons[activePageIndex].classList.add('_active');
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

      paginationButtons[activePageIndex].classList.remove('_active');
      activePageIndex--;
      paginationButtons[activePageIndex].classList.add('_active');

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

  // paginationButtons.forEach((button) => {

  //     button.addEventListener('click', moveLeft)

  // })