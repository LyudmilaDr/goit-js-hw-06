const inputText = document.querySelector(`#font-size-control`);
const spanText = document.querySelector(`#text`);

inputText.addEventListener(`input`,adjustFontSize );

function adjustFontSize(event){
    const fontSize = event.currentTarget.value;
    spanText.style.fontSize = `${fontSize} px`;
}