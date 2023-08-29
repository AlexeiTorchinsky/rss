const winterData = {
  title: ['The Book Eaters', 'Cackle', 'Dante: Poet of the Secular World', 'The Last Queen'],
  author: ['By Sunyi Dean', 'By Rachel Harrison', 'By Erich Auerbach', 'By Clive Irving'],
  text: ['An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.', 
         'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.',
          'Auerbach\'s engaging book places the \'Comedy\' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante\'s uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante\'s main themes.',
          'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.'
        ]
}

const springData = {
    title:  ['The Body', 'Carry: A Memoir of Survival on Stolen Land', 'Days of Distraction', 'Dominicana'],
    author:  ['By Stephen King', 'By Toni Jenson', 'By Alexandra Chang', 'By Angie Cruz'],
    text: ["Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.",
            "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
            "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.",
            "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez."
        ]
};

const summerData = {
  title: ['Crude: A Memoir', 'Let My People Go Surfing', 'The Octopus Museum: Poems', 'Shark Dialogues: A Novel'],
  author: ['By Pablo Fajardo & ​​Sophie Tardy-Joubert', 'By Yvon Chouinard', 'By Brenda Shaughnessy', 'By Kiana Davenport'],
  text: ['Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people',
        'Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.',
        'This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.',
        'An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.' ]
}

const autumnData = {
  title: ['Casual Conversation', 'The Great Fire', 'Rickey: The Life and Legend', 'Slug: And Other Stories'],
  author: ['By Renia White', 'By Lou Ureneck', 'By Howard Bryant', 'By Megan Milks'],
  text: ['White\'s impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don\'t, examining the possibilities around how we construct and communicate identity.',
        'The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide',
        'With the fall rolling around, one can\'t help but think of baseball\'s postseason coming up! And what better way to prepare for it than reading the biography of one of the game\s all-time greatest performers, the Man of Steal, Rickey Henderson?',
        'Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.']
}

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
              
              bookTitle[i].classList.add('fade-out');
              bookAuthor[i].classList.add('fade-out');
              bookText[i].classList.add('fade-out');
              bookImg[i].classList.add('fade-out');
            },
            50);
          
          setTimeout ( () => {

            let seasonData;
            if (season === 'Winter') {

              seasonData = winterData;
              // bookImg[i].src = `images/book-card${i + 1}.png`;

            } else if (season === 'Spring') {
              seasonData = springData;
              // bookImg[i].src = `images/book-card${i + 5}.png`;

            } else if (season === 'Summer') {
              seasonData = summerData;
              // bookImg[i].src = `images/book-card${i + 9}.png`
            } else if (season === 'Autumn') {
              seasonData = autumnData;
              // bookImg[i].src = `images/book-card${i + 13}.png`
            }

            bookTitle[i].innerHTML = seasonData.title[i];
            bookAuthor[i].innerHTML = seasonData.author[i];
            bookText[i].innerHTML =seasonData.text[i];
            
            switch(season) {
              case 'Winter': 
                bookImg[i].src = `images/book-card${i + 1}.png`;
                break;
              case 'Spring':
                bookImg[i].src = `images/book-card${i + 5}.png`;
                break;  
              case 'Summer':
                bookImg[i].src = `images/book-card${i + 9}.png`;
                break;
              case 'Autumn':
                bookImg[i].src = `images/book-card${i + 13}.png`;
                break ;
            }

            
            bookTitle[i].classList.remove('fade-out');
            bookAuthor[i].classList.remove('fade-out');
            bookText[i].classList.remove('fade-out');
            bookImg[i].classList.remove('fade-out');
            
            bookTitle[i].classList.add('fade-in');
            bookAuthor[i].classList.add('fade-in');
            bookText[i].classList.add('fade-in');
            bookImg[i].classList.add('fade-in');

          
  
          } , 600)
  
          
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

      // changeBookCard(selectedOption);
  });

