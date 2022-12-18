const spanValue = document.querySelector('#value');
const magnifyingButton = document.querySelector(`[data-action = "increment"]`);
const decreaseButton = document.querySelector(`[data-action="decrement"]`);

magnifyingButton.addEventListener(`click`, onButtonMagnifying);
decreaseButton.addEventListener(`click`, onButtonDecrease);

let counterValue = 0;

function onButtonMagnifying() {
    counterValue += 1;
    spanValue.textContent = counterValue;
}
function onButtonDecrease() {
    counterValue -= 1;
    spanValue.textContent = counterValue;  
}
