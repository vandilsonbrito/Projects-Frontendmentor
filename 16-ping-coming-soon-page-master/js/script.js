window.onload=function(){

    const email = document.querySelector('.input_email');
    const email_error = document.querySelector('.email_error');
    const email_success = document.querySelector('.email_success');
    const button = document.querySelector('#button_submit_email')
    const icon = document.querySelector('.check_icon');
    let window_width = window.screen.width

    button.addEventListener("click", (e) => {
        e.preventDefault();

        /* for screens less than 1020px (breakpoint) the email input and button it's gonna be flex-direction column then it needs space to show the feedback phrase, because since then it was no space for that. It just need this space when will show the phrase*/
        if(window_width < 1020) {
            button.style.marginTop = '25px';
        }

        if((email.value === "") || (!validateEmail(email.value))) {
            email_success.style.visibility = 'hidden';
            email_error.style.visibility = 'visible';
            email.style.borderColor = 'var(--Light-Red)';
            
        } 
        else if(validateEmail(email.value)){
            email_error.style.visibility = 'hidden';
            email_success.style.visibility = 'visible';    
            email.style.borderColor = 'rgb(4, 153, 4)';
            
        }
    })


    function validateEmail() {
        let rule = /\S+@\S+\.\S+/;
        return rule.test(String(email.value).toLowerCase());
    }

} 