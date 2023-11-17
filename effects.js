const coinImgs = document.querySelectorAll('.coin');
const coinSound = new Audio('sounds/chipssound.mp3');

coinImgs.forEach((coinImg) => {
  coinImg.addEventListener('click', () => {
    coinSound.play();
  });
});

const audioElem = document.getElementById('casinomusic');
  audioElem.volume = 0.2;