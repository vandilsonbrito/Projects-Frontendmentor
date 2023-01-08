function changingDisplay(element) {
    let display = document.getElementById(element).style.display;
    if(display == 'block') {
        document.getElementById(element).style.display = 'none';
    }
    else {
        document.getElementById(element).style.display = 'block';
    }
} 

// Wait for DOM to load 
window.onload=function(){

    const buttons = document.querySelectorAll(".button_rate");
    let number = 5;

    for (const button of buttons) {
        const data = button.textContent;
    button.addEventListener('click', function(event) {
        number = data;
    })
    }

    const submit = document.querySelector(".button_submit");
    submit.addEventListener("click", function() {
        document.querySelector(".text_result").innerHTML = `You selected ${number} out of 5`;
    })

}