function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body');
const btnChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {

  let randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
}


