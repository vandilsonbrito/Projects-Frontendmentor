 window.onload=function(){ 
    const button = document.getElementById('button_share')
    const share = document.getElementById('card_share')

    button.addEventListener('click', function(event) {
    if(share.style.visibility == 'hidden') {
        share.style.visibility = 'visible'
    }
    else {
        share.style.visibility = 'hidden'
    }

    })
}


