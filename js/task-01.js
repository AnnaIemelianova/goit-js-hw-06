

const listEl = document.querySelectorAll('.item');


//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.

const quantitylistEl = listEl.length;
console.log('Number of categories: ', quantitylistEl);


//Для кожного элемента li.item у списку ul#categories, 
//знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
//і кількість елементів в категорії(усіх < li >, вкладених в нього).

const titleEl = listEl.forEach(el => {
    console.log('Category:', el.firstElementChild.textContent);
    console.log('Elements:', el.lastElementChild.children.length);
})





