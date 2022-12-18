const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', validText);

function validText() { 
    if (inputText.dataset.length != inputText.value.length) {
        inputText.classList.remove('valid')
        inputText.classList.add('invalid')
    } else{
        inputText.classList.remove('invalid')
        inputText.classList.add('valid')
    }
}