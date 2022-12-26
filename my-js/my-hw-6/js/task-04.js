let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

btnDecrement.addEventListener('click', handleDecrementClick);

btnIncrement.addEventListener('click', handleIncrementClick);

function handleDecrementClick() {
    counterValue -= 1;
    spanValue.textContent = counterValue;
};

function handleIncrementClick() {
    counterValue += 1;
    spanValue.textContent = counterValue;
};