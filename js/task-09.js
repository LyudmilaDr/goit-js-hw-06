const button = document.querySelector('.change-color');
const color = document.querySelector('.color')
button.addEventListener(`click`, () => {
  let changingBackground = getRandomHexColor();
  document.body.style.backgroundColor =  changingBackground;
  changingBackground = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
