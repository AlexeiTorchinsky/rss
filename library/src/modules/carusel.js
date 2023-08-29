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
 
  paginationButtons[activePageIndex].classList.add('_active')



  export const moveLeft = () => {
    
    if (!isAnimating) {
      isAnimating = true;
      position += step;
      console.log(position)

    if (position >= 0) {

      arrowRight.addEventListener('click',  moveRight);
      arrowRight.classList.remove('_not-active')
      sliderImages.style.transform = `translateX(-${position}px)`;
      paginationButtons[activePageIndex].classList.remove('_active');
      activePageIndex++;
      paginationButtons[activePageIndex].classList.add('_active');
    }

    if (position >= (sliderImagesAll.length - 1) * step) {
      arrowLeft.removeEventListener('click', moveLeft);
      arrowLeft.classList.add('_not-active');
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
        arrowLeft.classList.remove('_not-active')
      }

      paginationButtons[activePageIndex].classList.remove('_active');
      activePageIndex--;
      paginationButtons[activePageIndex].classList.add('_active');

      position -= step;
      sliderImages.style.transform = `translateX(-${position}px)` ;
      
        if (position <= 0) {
          arrowRight.removeEventListener('click',  moveRight);
          arrowRight.classList.add('_not-active');
        }
        
      console.log(position)
    }
    
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
    
  }

  function handlePaginationButtonClick(event) {
    if (!isAnimating) {
      isAnimating = true;
      const buttonIndex = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    
    if (paginationButtons[buttonIndex].classList.contains('_active')) {
      return; 
    }
  
    paginationButtons[activePageIndex].classList.remove('_active');
    console.log('activePageIndex ==' , activePageIndex)
    console.log('button-index==', buttonIndex)
    activePageIndex = buttonIndex;
  
    paginationButtons[activePageIndex].classList.add('_active');
  
    
    position = activePageIndex * step;
  
    sliderImages.style.transform = `translateX(-${position}px)`;
    console.log(position)
    
    if (position === 0) {
      arrowLeft.removeEventListener('click', moveLeft);
      arrowRight.addEventListener('click', moveRight);
    } else if (position === (sliderImagesAll.length - 1) * step) {
      arrowRight.removeEventListener('click', moveRight);
      arrowLeft.addEventListener('click', moveLeft);
    } else {
      arrowLeft.addEventListener('click', moveLeft);
      arrowRight.addEventListener('click', moveRight);
    }

    }
      
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
    
    
  }
  
  
  paginationButtons.forEach((button) => {
    button.addEventListener('click', handlePaginationButtonClick);
  });


  

  window.addEventListener(`resize`, () => {
    
    if (window.innerWidth < 1431) {
      
      paginationButtons[1].classList.remove('_active');
    } else {
      
      paginationButtons[1].classList.remove('_active');
      paginationButtons[3].classList.remove('_active');
    }
    
  }
  );