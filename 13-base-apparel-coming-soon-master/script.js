window.onload=function(){
    
    const email = document.querySelector("#input_email");
    const form = document.querySelector('#form')
    const email_error = document.querySelector('.email_error')
    const email_success = document.querySelector(".email_success")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if((email.value === "") || (!validateEmail(email.value))) {
            email_error.style.visibility = 'visible'
            email_success.style.visibility = 'hidden' 
            email.style.border = '2px solid hsl(0, 93%, 68%)';
            
        }
        else if(validateEmail(email.value)) {
            email_error.style.visibility = 'hidden' 
            email_success.style.visibility = 'visible'
            email_success.innerText = "Your email has been registered"
            email_success.style.color = 'green';
            email.style.border = '2px solid green';
        }

    })

    function validateEmail() {
        let rule = /\S+@\S+\.\S+/;
        return rule.test(String(email.value).toLowerCase());
    }
    

    
}
