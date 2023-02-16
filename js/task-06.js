
//шукаю ссилку на інпут
const inputEl = document.querySelector('#validation-input');
console.log(inputEl.attributes);


//шукаю значення дата атрибуту інпуту
const inputDataLength = document.querySelector('input[data-length="6"]');
const inputLength = Number(inputDataLength.dataset.length);
console.log(inputLength);

//створюю подію для інпут
inputEl.addEventListener('blur', onInputBlur);


//об'єкт події
function onInputBlur(event) {
    if (event.target.value.length === inputLength ) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
