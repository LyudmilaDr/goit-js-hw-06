const button = document.querySelector('.change-color');
const color = document.querySelector('.color')
button.addEventListener(`click`, getRandomHexColor );
document.body.style.backgroundColor =  getRandomHexColor()
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }