const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientLi = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.classList.add('.item');
    liEl.textContent = ingredient;

    return liEl;
});

ingredientLi.append(...elements);