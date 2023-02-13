
const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    //деструктуризація св-в форми elements
    const { elements: { email, password }} = event.currentTarget;

    if (email.value === "" || password.value === "" ) {
        return alert("Please fill in all the fields");
    }

    //збіраю дані користувача
    const dataForm = `Login: ${email.value}, Password: ${password.value}`;
    console.log(dataForm);

    //очистка форми після відправки користувачем своїх даних
    event.currentTarget.reset();
}
