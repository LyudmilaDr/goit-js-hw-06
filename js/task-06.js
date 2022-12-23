const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', validText);

function validText() { 
    if (Number(inputText.getAttribute('data-length'))  !==  inputText.value.length) {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
        console.log(inputText.value.length);
    } else {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    }
}