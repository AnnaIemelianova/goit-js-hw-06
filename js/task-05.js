
//паттерн об'єкт посилань
const refs = {
inputEl: document.getElementById('name-input'),
spanEl: document.getElementById('name-output'),
}
console.log(refs);


refs.inputEl.addEventListener('input', onInputChange);
// refs.inputEl.addEventListener('blur', onInputEmpty);


function onInputChange(event) {
    refs.spanEl.textContent = event.currentTarget.value;
      if (event.currentTarget.value === '') {
        refs.spanEl.textContent = 'Anonymous!';
    }
};



// function onInputBlur() {
// refs.spanEl.textContent =  'Anonymous!';
// }

// function onInputBlur(event) {
//     refs.spanEl.textContent =  'Anonymous!';
// }



