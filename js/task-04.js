

const decreaseValueBtn = document.querySelector('button[data-action="decrement"]');
const increaseValueBtn = document.querySelector('button[data-action="increment"]');
const targetEl = document.querySelector('#value');


let counterValue = 0;

decreaseValueBtn.addEventListener('click', () => {
    console.log('це зменшення');
    counterValue -= 1;
    targetEl.textContent = counterValue;
});


increaseValueBtn.addEventListener('click', () => {
    console.log('це збільшення');
    counterValue += 1;
    targetEl.textContent = counterValue;
})

