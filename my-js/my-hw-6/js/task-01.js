const totalNumberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalNumberOfCategories.length}`);

totalNumberOfCategories.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent} 
Elements: ${el.lastElementChild.children.length}`);
});