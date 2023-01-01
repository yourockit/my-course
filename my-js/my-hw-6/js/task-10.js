const refs = {
    boxes: document.querySelector('#boxes'),
    input: document.querySelector('input'),
    btnCreate: document.querySelector('button[data-create]'),
    btnDestroy: document.querySelector('button[data-destroy]'),
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = +refs.input.value;
    const defSize = 30;
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement("div");
        const sizeBox = defSize + i * 10;
        box.style.width = `${sizeBox}px`;
        box.style.height = `${sizeBox}px`;
        box.style.backgroundColor = getRandomHexColor();
        refs.boxes.append(box);
    };
};

function destroyBoxes() {
    refs.boxes.innerHTML = "";
    refs.input.value = "";
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};