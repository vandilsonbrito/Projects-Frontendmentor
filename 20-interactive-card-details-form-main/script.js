/* Card info to fill up in the screen */
const card_num_fill_up = document.querySelector('.card_number_automatic_filling')
const card_name_fill_up = document.querySelector('.card_name_automatic_filling')
const card_exp_month_fill_up = document.querySelector('.card_exp_month_automatic_filling')
const card_exp_year_fill_up = document.querySelector('.card_exp_year_automatic_filling')
const card_cvc_fill_up = document.querySelector('.cvc_number')
const slash = document.querySelector('.slash')

/* Card info input */
const input_name = document.querySelector('#iname')
const card_number_input = document.querySelector('#icard')
const month_input = document.querySelector('#imonth')
const year_input = document.querySelector('#iyear')
const cvc_input = document.querySelector('#icvc')
const bt_confirm = document.querySelector('#iconfirm')


/* Fill up part */
let isNameEmpty = 0
input_name.addEventListener('keyup', function(e) {
    e.preventDefault()
    
    if(input_name.value == false) {
        card_name_fill_up.innerHTML = 'Jane Appleseed'
        isNameEmpty = 1
    }
    else {
        card_name_fill_up.innerHTML = input_name.value
    }
})

card_number_input.addEventListener('keyup', function(e) {
    e.preventDefault()

    if(card_number_input.value == false) {
        card_num_fill_up.innerHTML = '0000 0000 0000 0000'
    }
    else {
        
        card_num_fill_up.innerHTML = cardFormat(card_number_input.value)
    }
})


month_input.addEventListener('keyup', function(e) {
    e.preventDefault()

    if(month_input.value == false) {
        card_exp_month_fill_up.innerHTML = '00'
    }
    else {
        card_exp_month_fill_up.innerHTML = month_input.value
    } 
})
year_input.addEventListener('keyup', function(e) {
    e.preventDefault()
    
    if((year_input.value == false)) {
        card_exp_year_fill_up.innerHTML = '00'
    }
    else {
        card_exp_year_fill_up.innerHTML = year_input.value
    }
})


cvc_input.addEventListener('keyup', function(e) {
    e.preventDefault()
    if(cvc_input.value == false) {
        card_cvc_fill_up.innerHTML = '000'
    }
    else {
        card_cvc_fill_up.innerHTML = cvc_input.value
    }
})
/* finish */


/* Data Validation */
bt_confirm.addEventListener('click', function(e) {
    e.preventDefault()

    let verifyName= 0
    let verifyInput = 0
    /* Name validation */
    const wrong_format_name = document.querySelector('.wrong_format_name')
    const blank_name = document.querySelector('.blank_name')
    const error_message_date = document.querySelector('.error_message_date')
    if(input_name.value == false) {
        blank_name.style.display = 'block'
        input_name.style.border = '1px solid var(--Red)'
        verifyName += 1
    }
    else if(input_name.value !== false) {
        blank_name.style.display = 'none'
        input_name.style.border = '1px solid var(--Light-grayish-violet)'
        verifyInput += 1
    }
    if((validateInputName(input_name.value) !== true) || (input_name.value).length > 24) {
        wrong_format_name.style.display = 'block'
        input_name.style.border = '1px solid var(--Red)'
        verifyName += 1
    }
    else if((validateInputName(input_name.value) == true) && (input_name.value).length <= 24){
        wrong_format_name.style.display = 'none'
        error_message_date.style.top = '525px'
        verifyInput += 1
    }
    let bothErrors = verifyName

    
    /* Card Numb validation */
    const wrong_format_card = document.querySelector('.wrong_format_card')
    const blank_card = document.querySelector('.blank_card')
    if(card_number_input.value == false) {
        blank_card.style.display = 'block'
        card_number_input.style.border = '1px solid var(--Red)'
        verifyName += 1
    }
    else if(card_number_input.value !== false) {
        blank_card.style.display = 'none'
        card_number_input.style.border = '1px solid var(--Light-grayish-violet)'
        verifyInput += 1
    }

    if((validateInputNumb(card_number_input.value) !== true) || (card_number_input.value).length > 16) {
        wrong_format_card.style.display = 'block'
        card_number_input.style.border = '1px solid var(--Red)'
        verifyName += 1
    }
    else {
        wrong_format_card.style.display = 'none'
        verifyInput += 1
    }
    


    /* Exp. Date validation */
    const wrong_format_date = document.querySelector('.wrong_format_date')
    const blank_date = document.querySelector('.blank_date')
    if((month_input.value == false || year_input.value == false)) {
        blank_date.style.display = 'block'
        if(month_input.value == false )
            month_input.style.border = '1px solid var(--Red)'
        if(year_input.value == false)
            year_input.style.border = '1px solid var(--Red)'
        
        if(verifyName === 0) {
            error_message_date.style.top = '543px'
            if(window.innerWidth >= 720 && window.innerWidth <= 1020) {
                error_message_date.style.top = '583px' 
            }
            if(window.innerWidth >= 1020) {
                error_message_date.style.top = '444px' 
            }
        }
        if(verifyName === 1) {
            error_message_date.style.top = '560px'
            if(window.innerWidth >= 720 && window.innerWidth <= 1020) {
                error_message_date.style.top = '599px' 
            }
            if(window.innerWidth >= 1020) {
                error_message_date.style.top = '453px' 
            }
        }

        if(verifyName === 2) {
            error_message_date.style.top = '577px'
            if((window.innerWidth >= 720)  && (window.innerWidth <= 1020)) {
                error_message_date.style.top = '617px' 
            }
            if(window.innerWidth >= 1021) {
                error_message_date.style.top = '463px' 
            }
            if(verifyName === 2 && bothErrors ===  2) {
                error_message_date.style.top = '463px'
            }
        }
        if(verifyName === 3 && bothErrors ===  2) {
            error_message_date.style.top = '594px'
            if((window.innerWidth >= 720)  && (window.innerWidth <= 1020)) {
                error_message_date.style.top = '633px' 
            }
            if(window.innerWidth >= 1021) {
                error_message_date.style.top = '472px' 
            }
        }
        
    }
    else if(month_input.value !== false && year_input.value !== false) {
        blank_date.style.display = 'none'
        month_input.style.border = '1px solid var(--Light-grayish-violet)'
        year_input.style.border = '1px solid var(--Light-grayish-violet)'
        verifyInput += 1
    }
    if(((validateInputNumb(month_input.value) !== true) || (month_input.value).length > 2) || ((validateInputNumb(year_input.value) !== true) || (year_input.value).length > 2)) {
        wrong_format_date.style.display = 'block'
        month_input.style.border = '1px solid var(--Red)'
        year_input.style.border = '1px solid var(--Red)'
        
        if(verifyName === 0) {
            error_message_date.style.top = '543px'
            if(window.innerWidth >= 720 && window.innerWidth <= 1020) {
                error_message_date.style.top = '583px' 
            }
            if(window.innerWidth >= 1020) {
                error_message_date.style.top = '444px' 
            }
        }
        if(verifyName === 1) {
            error_message_date.style.top = '560px'
            if(window.innerWidth >= 720 && window.innerWidth <= 1020) {
                error_message_date.style.top = '599px' 
            }
            if(window.innerWidth >= 1020) {
                error_message_date.style.top = '453px' 
            }
        }
        if(verifyName === 2) {
            error_message_date.style.top = '578px'
            error_message_date.style.top = '577px'
            if((window.innerWidth >= 720)  && (window.innerWidth <= 1020)) {
                error_message_date.style.top = '617px' 
            }
            if(window.innerWidth >= 1021) {
                error_message_date.style.top = '463px' 
            }
            if(verifyName === 2 && bothErrors ===  2) {
                error_message_date.style.top = '463px'
            }
        }
    }
    else {
        wrong_format_date.style.display = 'none'
        verifyInput += 1
    }



    /* CVC Numb validation */
    const wrong_format_cvc = document.querySelector('.wrong_format_cvc')
    const blank_cvc = document.querySelector('.blank_cvc')
    
    if((cvc_input.value == false)) {
        blank_cvc.style.display = 'block'
        cvc_input.style.border = '1px solid var(--Red)'
    }
    else if(cvc_input.value !== false) {
        blank_cvc.style.display = 'none'
        cvc_input.style.border = '1px solid var(--Light-grayish-violet)'
        verifyInput += 1
    }
    if(((validateInputNumb(cvc_input.value) !== true) || (cvc_input.value).length > 3)) {
        wrong_format_cvc.style.display = 'block'
        cvc_input.style.border = '1px solid var(--Red)'
    }
    else {
        wrong_format_cvc.style.display = 'none'
        verifyInput += 1
    }


    if((verifyInput === 8) && ((input_name.value != false) && (card_number_input.value != false) && (month_input.value != false) && (year_input.value != false) && (cvc_input.value != false))) {
        const form = document.querySelector('.form')
        const complete_state = document.querySelector('.completed_state_section')
        form.style.display = 'none'
        complete_state.style.display = 'block'
    }
    
})


function validateInputName(name) {

    const hasNumber =  name.match(/\d+/)
    onlyLetters = /^[a-záàâãéèêíïóôõöúçñ ]+$/i
    if(hasNumber != null || ((onlyLetters.test(input_name.value) === false) && (isNameEmpty == 1))) {
        return false
    }
    return true
}
function validateInputNumb(numb) {
    return (!isNaN(numb))
}

function cardFormat(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}