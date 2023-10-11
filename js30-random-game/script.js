const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const buttonStart = document.querySelector('.start-button')
const timerDisplay = document.querySelector('.timer');
const gameOver = document.querySelector('.game-over');



document.addEventListener('keydown', function(event) {
  if(event.code === 'Space'){
    event.preventDefault();
    jump();
}
});

function jump () {

  if (!dino.classList.contains(jump)){
  dino.classList.add('jump');
  }
  setTimeout(function(){
    dino.classList.remove('jump');
    },
  300)
}

let isGame = false;

let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let savedTime = 0;

const startGame = () => {
  isGame = true;
  buttonStart.textContent = 'Finish';
  cactus.classList.add('cactus-moving');
  dino.classList.add('dino-running');
  if (gameOver.classList.contains('_opnend')) {
    gameOver.classList.remove('_opened');
  } 
  
    const startTime = Date.now();
    timerInterval = setInterval(() => {
      const currentTime = Date.now() - startTime;
      milliseconds = currentTime % 1000;
      seconds = Math.floor(currentTime / 1000) % 60;
      minutes = Math.floor(currentTime / 1000 / 60);

      const formattedTime =
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + '.' +
        (milliseconds < 100 ? '0' : '') + (milliseconds < 10 ? '0' : '') + milliseconds;
      timerDisplay.textContent = formattedTime;
    }, 100);
    
}




const finishGame = () => {
  buttonStart.textContent = 'Start';
  cactus.classList.remove('cactus-moving');
  dino.classList.remove('dino-running');
  isGame = false;
  
  clearInterval(timerInterval);
  

}


buttonStart.addEventListener('click', () => {
  if (!isGame) {
    startGame();
  } else {
    finishGame();
  }

})



let checkStatus = setInterval(function(){
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
  if (cactusLeft < 45 && dinoTop >= 120) {
    
    finishGame();
    dino.style.top = `${dinoTop}px`;
    cactus.style.left = `${cactusLeft}px`;
    gameOver.classList.add('_opened');
    
  }
})