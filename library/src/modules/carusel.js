const paginationButton = document.querySelector('.pagination__button-container');
const imageFirst = document.querySelector('.slider__img_first');
const slider = document.querySelector('.about__slider')

export const move = () => {
    paginationButton.addEventListener('click', ()=> {
        slider.classList.add('move-left');
        imageFirst.classList.add('move-left'); 
    })

}