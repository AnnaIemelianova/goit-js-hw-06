const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

const getElements = ingredients.map(el=> {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');
  return itemEl ;
});

console.log(getElements);

listEl.append(...getElements);







