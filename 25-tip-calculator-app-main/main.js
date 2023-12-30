const billInput = document.getElementById('bill');
const tipWrapped = document.querySelector('.tip-wrapped');
const tipInput = document.querySelectorAll('.btn-tip');
const customTip = document.querySelector('#custom-tip');
const numPeopleInput = document.querySelector('#num-people');
const tipAmountPerson = document.querySelector('.tip-amount-person');
const totalPerson = document.querySelector('.total-person');
const reset = document.querySelector('.reset');
const msgError = document.querySelector('#msg-error');

// Any update on these inputs (Bill, Num People or Custom Tip) will gonna call CalculateTip function.
billInput.addEventListener('input', calculateTip);

numPeopleInput.addEventListener('input', calculateTip);
customTip.addEventListener('input', calculateTip);
// reset button will gonna call resetCalculator function
reset.addEventListener('click', resetCalculator);

// for every tip button click's will call handleInputChange function
tipInput.forEach((button) => {
    button.addEventListener('click', handleInputChange);
});

// Create a variable to be like a memory. To compare the current click to the last click 
let selectedTipButton = null

// handleInputChange function begins... it receive a click event as a parameter  
function handleInputChange(event) {

    // setting the variable clickedButtonTip as receiving the event target (which button was clicked)
    const clickedTipButton = event.target;

    // comparing the current button click with last button clicked. if equal: no changes on the calculation. But if isn't equal selectedtipButon receives the current button clicked then. after this call calculateTip function
    if(clickedTipButton === selectedTipButton) {
        return;
    }
    else {
        // remove others and add the class selected (background) only on the clicked button
        tipInput.forEach((tipButton) => {
            tipButton.classList.remove('selected');
          });
        clickedTipButton.classList.add('selected');
        selectedTipButton = clickedTipButton;   
    }
    calculateTip()
}

function calculateTip() {
    reset.disabled = true
    reset.setAttribute('id', 'resetBtn');

    // Treating Data
    let bill = billInput.value.toString().replace(',', '.'); 
    bill = parseFloat(bill);
    const numPeople = parseFloat(numPeopleInput.value);
    let cstmTip = parseFloat(customTip.value)

    if(bill && (selectedTipButton?.value || cstmTip) && (!(numPeople))) {
        msgError.classList.remove('hidden');
        msgError.classList.add('flex');
        numPeopleInput.classList.add('border-red-700');

        if(cstmTip) {
            selectedTipButton.classList.remove('selected')
            reset.removeAttribute('id', 'resetBtn');
        }
    }
    
    //if bill.value and numPeople.value are not undefined and null 
    else if(bill && numPeople) {
        if(selectedTipButton?.value || cstmTip) {
            reset.disabled = false
        }
        msgError.classList.add('hidden');
        msgError.classList.remove('flex');

        numPeopleInput.classList.remove('border-red-700');
        let tipPercentage;

        // if custom input it was used, tipPercentege receives a value based on customTip.value
        if(customTip.value) {
            tipPercentage = parseFloat(customTip.value) / 100;
            
        }
        // if custom input is not used and selectedTipButton has value, tipPercentege receives value based on selectedTipButton.value
        else if(selectedTipButton.value) {
            tipPercentage = parseFloat(selectedTipButton.value) / 100;
        }  
        tipAmountPerson.textContent = `$${((tipPercentage * bill) / numPeople).toFixed(2)}`;
        totalPerson.textContent = `$${((bill / numPeople) + ((tipPercentage * bill) / numPeople)).toFixed(2)}`     
    }
    
}

function resetCalculator() {
    tipInput.forEach((tip) => {
        tip.classList.remove('selected');
      });
    billInput.value = '';
    numPeopleInput.value = '';
    customTip.value = '';
    tipAmountPerson.textContent = '$0.00';
    totalPerson.textContent = '$0.00';

    msgError.classList.add('hidden');
    msgError.classList.remove('flex');
    
    numPeopleInput.classList.remove('border-red-700');
}

