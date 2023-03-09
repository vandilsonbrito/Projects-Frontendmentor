window.onload=function() {

    const name = document.querySelector("#name");
    const fisrt_name_error = document.querySelector('.st_name_error_message');

    const last_name = document.querySelector('#last_name');
    const last_name_error = document.querySelector(".nd_name_error_message");

    const email = document.querySelector('#email');
    const email_error = document.querySelector('.email_error_message');

    const password = document.querySelector('#password');
    const password_error = document.querySelector('.password_error_message');

    const button_free_trial = document.querySelector('#free_trial');

    /* Seeing if there is any empty space to show the error message */
    button_free_trial.addEventListener('click', (e) => {
        e.preventDefault();

        if((name.value === "" || name.value === null)) {
            fisrt_name_error.style.display = 'block';
            name.placeholder = '';
            name.style.border = '2px solid var(--Red)';
        }
        if(!(name.value === "" || name.value === null)) {
            fisrt_name_error.style.display = 'none';
            name.style.border = '';
        }
        
        if((last_name.value === "" || last_name.value === null)) {
            last_name_error.style.display = 'block';
            last_name.placeholder = '';
            last_name.style.border = '2px solid var(--Red)';
        }
        if(!(last_name.value === "" || name.value === null)) {
            last_name_error.style.display = 'none';
            last_name.style.border = '';
        }

        if((email.value === "" || email.value === null) || (!validateEmail(email.value))) {
            email_error.style.display = 'block';
            email.placeholder = '';
            email.style.border = '2px solid var(--Red)';
        }
        if(!((email.value === "" || email.value === null) || (!validateEmail(email.value)))) {
            email_error.style.display = 'none';
            email.style.border = '';
        }
        
        if((password.value === "" || password.value === null)) {
            password_error.style.display = 'block';
            password.placeholder = '';
            password.style.border = '2px solid var(--Red)';
        }
        if(!(password.value === "" || email.value === null)) {
            password_error.style.display = 'none';
            password.style.border = '';
        }

       
    })    
    
    function validateEmail() {
        let rule = /\S+@\S+\.\S+/;
        return rule.test(String(email.value).toLowerCase());
    }
} 
