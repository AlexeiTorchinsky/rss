const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const buttonStart = document.querySelector('.start-button')
const timerDisplay = document.querySelector('.timer');
const gameOver = document.querySelector('.game-over');
const goal = document.querySelector('.goal');
const win = document.querySelector('.win');
const jumpSound = new Audio('./assets/sounds/jump.mp3');
const winSound = new Audio('./assets/sounds/win.mp3');




document.addEventListener('keydown', function(event) {
  if(event.code === 'Space'){
    event.preventDefault();
    jump();
}
});

function jump () {

  if (!dino.classList.contains(jump)){
  dino.classList.add('jump');
  // jumpSound.currentTime = 0;
  jumpSound.play();

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
  win.classList.remove('_appeared');
  if (gameOver.classList.contains('_opened')) {
    gameOver.classList.remove('_opened');
  }
  timerDisplay.style.opacity = '1';
  isGame = true;
  dino.style.top = '130' + 'px';
  buttonStart.textContent = 'Finish';
  cactus.classList.add('cactus-moving');
  dino.classList.add('dino-running');
  goal.classList.add('_hidden');

  
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
      youWin();
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
  let timerDisplayContent = timerDisplay.textContent;
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
  if (cactusLeft < 45 && dinoTop >= 120) {
    
    finishGame();
    dino.style.top = `${dinoTop}px`;
    cactus.style.left = `${cactusLeft}px`;
    timerDisplay.style.opacity = '0';
    gameOver.classList.add('_opened');
    gameOver.textContent = `Game over! Your time ${timerDisplayContent}`
    if (win.classList.contains('_appeared')) {
      gameOver.classList.remove('_opened');
    }
  }
}, 10);

function youWin() {

  const desiredTime = 5100;
  const [min, sec, millisec] = timerDisplay.textContent.split(/[:.]+/).map(Number);
  const currentTimeMilliseconds = min * 60 * 1000 + sec * 1000 + millisec;

  if (currentTimeMilliseconds >= desiredTime) {
    if (gameOver.classList.contains('_opened')) {
      gameOver.classList.remove('_opened');
    }
    winSound.play();
    finishGame();
    win.classList.add('_appeared');

  }

}
