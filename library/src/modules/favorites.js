
import { winterData, springData, summerData, autumnData} from  './seasons-data';


const labelForRadio = document.querySelectorAll('.label-for-radio');
export const radioButtons = document.querySelectorAll ('.radio-button');
const bookCards = document.querySelectorAll('.book-cards__card');
const bookTitle = document.querySelectorAll('.card__h4__span1');
const bookAuthor = document.querySelectorAll('.card__h4__span2')
const bookText = document.querySelectorAll('.card__text');
const bookImg = document.querySelectorAll('.book-card__img');





export   const changeBookCard = (season) => {
  
          for (let i = 0; i < bookTitle.length; i++){
            setTimeout(
              () => {
              bookCards[i].classList.add('fade-out');
            },
            100);
          
          setTimeout ( () => {

            let seasonData;
            if (season === 'Winter') {

              seasonData = winterData;
              bookImg[i].src = `images/book-card${i + 1}.png`;

            } else if (season === 'Spring') {
              seasonData = springData;
              bookImg[i].src = `images/book-card${i + 5}.png`;

            } else if (season === 'Summer') {
              seasonData = summerData;
              bookImg[i].src = `images/book-card${i + 9}.png`
            } else if (season === 'Autumn') {
              seasonData = autumnData;
              bookImg[i].src = `images/book-card${i + 13}.png`
            }

            bookCards[i].classList.remove('fade-out');
            bookTitle[i].innerHTML = seasonData.title[i];
            bookAuthor[i].innerHTML = seasonData.author[i];
            bookText[i].innerHTML =seasonData.text[i];

           
            bookCards[i].classList.add('fade-in');
          }
          , 600)
  
          
        }

}

let selectedSeason = null;


radioButtons.forEach(button => {
  button.addEventListener('click', () => {
      const selectedOption = button.nextElementSibling.textContent;

      if (selectedOption !== selectedSeason) {
        selectedSeason = selectedOption; 
        changeBookCard(selectedOption);
      }
    });


  });

