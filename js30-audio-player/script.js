const body = document.querySelector('body');
const durationTime = document.querySelector('.duration-time');
const trackTitle = document.querySelector('.title');
const trackSinger = document.querySelector('.singer');
const progressBar = document.querySelector('#progress-bar');
const playBtn = document.querySelector('.play');
const playPicture = document.querySelector('.player-picture-bg');

const playList = [{
  singer: 'Beyonce',
  title: 'Don\'t heart yourself',
  src: 'assets/audio/beyonce.mp3',
  duration: '3:53',
  background: 'assets/img/lemonade.png'
},
{
  singer: 'Dua Lipa',
  title: 'Don\'t start now',
  src: './assets/audio/dontstartnow.mp3',
  duration: '3:23',
  background: 'assets/img/dontstartnow.png'
}
]

let isPlay = false;
let playNum = 0;

const audio = new Audio();


function toggleBtn() {
  playBtn.classList.toggle('pause');
}
function playAudio() {
  audio.src = playList[playNum].src;
  // audio.currentTime = 0;
  durationTime.textContent = playList[playNum].duration;
  trackTitle.textContent = playList[playNum].title;
  trackSinger.textContent = playList[playNum].singer;
  playPicture.style.backgroundImage = `url(${playList[playNum].background})`;
  playPicture.style.transition = '0.2s'
  playPicture.style.transform = 'scale(1.2)';
  audio.addEventListener('ended', playNext);
  body.style.backgroundImage = `url(${playList[playNum].background})`


  if(!isPlay) {
    audio.play();
    isPlay = true;
    progressBar.max = audio.duration;
    audio.currentTime = progressBar.value;
    progressBar.classList.add('progressBar-active');
    audio.addEventListener('timeupdate', () => {
    document.querySelector('.current-time').innerHTML = (formatTime(audio.currentTime));
    progressBar.value = audio.currentTime;
    });
  } else {
    audio.pause();
    audio.currentTime = progressBar.value;
    isPlay = false;
  }
}

function playNext() {
  if (playNum < 1) {
    playNum = 1;
  }
  else if (playNum === 1) {
    playNum = 0;
  }


  playAudioPrevNext();
}

function playPrev() {
  if(playNum > 0) {
    playNum--;
  }
  else {
    playNum = playList.length - 1;
  }
  console.log(playNum)
  playAudioPrevNext();
}

function playAudioPrevNext() {
  audio.src = playList[playNum].src;
  durationTime.textContent = playList[playNum].duration;
  document.querySelector('.current-time').textContent = audio.currentTime;
  trackTitle.textContent = playList[playNum].title;
  trackSinger.textContent = playList[playNum].singer;
  audio.addEventListener('ended', playNext);
  playPicture.style.backgroundImage = `url(${playList[playNum].background})`;
  body.style.backgroundImage = `url(${playList[playNum].background})`;

  audio.currentTime = 0;
  if (!isPlay) {
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause');
    progressBar.max = audio.duration;
    audio.addEventListener('timeupdate', () => {
    document.querySelector('.current-time').innerHTML = (formatTime(audio.currentTime));
    progressBar.value = audio.currentTime;

    });

  } else {
    audio.play();
  }
}

playBtn.addEventListener('click', playAudio);
playBtn.addEventListener('click', toggleBtn);

const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');

playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);


function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){
      sec  = `0${sec}`;
  };
  return `0${min}:${sec}`;
};

const soundOff = document.querySelector('.sound-off');

function turnSoundOff() {
  soundOff.classList.toggle('active');
  audio.volume = 0;
  turnSoundOn()
}



function turnSoundOn() {
  if(!soundOff.classList.contains('active')){
    audio.volume = 1;
  }
  soundOff.addEventListener('click', turnSoundOn);

}

soundOff.addEventListener('click', turnSoundOff);


progressBar.addEventListener('change', () => {
  audio.currentTime = progressBar.value;
})