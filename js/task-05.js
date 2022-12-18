const inputText = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

inputText.addEventListener(`input`, onInputWrite);

function onInputWrite(event){
    if(inputText === ""){
        spanText.textContent("Anonymous");
    }
    spanText.textContent = event.currentTarget.value;
}