

let checkCardButton = document.querySelector('.check-the-card');
const digitalCardsInputs = document.querySelector('.digital-library-cards-input-forms_inputs');
const profileDataColumns = document.querySelector('.profile-data-columns');

const userDataSaved = JSON.parse(localStorage.getItem("userData"));

export const changeCheckTheCardButton = () => {
    checkCardButton.classList.add('_logged-in');
    checkCardButton.innerHTML = profileDataColumns.innerHTML;
    digitalCardsInputs.style.marginBottom = '5px';
} 

export const changeCheckTheCardButtonBack = () => {

    checkCardButton.classList.remove('_logged-in');
    checkCardButton.innerHTML = '<button class="button input-button" id="check-thecard-button">Check the card</button>';
    digitalCardsInputs.style.marginBottom = '20px';
    document.getElementById('check-thecard-button').addEventListener('click', checkCardButtonListener)  
}

export const checkCardButtonListener = () => {
    const digitCardsProfileName = document.getElementById('readers-name').value;
    const digitCardsCardNumb = document.getElementById('readers-card-number').value;

    if ((digitCardsProfileName && digitCardsCardNumb) && (digitCardsProfileName === userDataSaved.firstName && digitCardsCardNumb === userDataSaved.cardNumb))
    
    changeCheckTheCardButton();
    setTimeout(
    changeCheckTheCardButtonBack, 10000);
}