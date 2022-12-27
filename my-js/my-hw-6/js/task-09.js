const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor(event) {
    const newColor = getRandomHexColor();
    document.body.style.background = `${newColor}`;
    span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}