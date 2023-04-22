(function() {
    const sideNav = document.querySelector('.sideNav')
    const overlay = document.querySelector('.overlay')
    const ham = document.querySelector('.ham')
    const close = document.querySelector('.close')
    const arrowUp = document.querySelectorAll('#arrow_up')
   
    function toggleMenu() {
        overlay.classList.toggle('showOverlay')
        sideNav.classList.toggle('showNav')
    }
    
    ham.addEventListener('click', toggleMenu)
    close.addEventListener('click', toggleMenu)
    overlay.addEventListener('click', toggleMenu)

    document.addEventListener('click', function (event) {

        arrowUp.forEach((arrow) => {
            if(event.target === arrow) {
                // Arrow up/down
                arrow.children[0].classList.toggle('selected')
                
                // Show menu
                if(arrow.parentElement.children[1].id === 'appearance') {
                    arrow.parentElement.children[1].id = 'appearance selected'   
                }
                // Hide menu
                else if(arrow.parentElement.children[1].id === 'appearance selected') {
                    arrow.parentElement.children[1].id = 'appearance'     
                } 
            }   
        })

        arrowUp.forEach((arrow) => {
            if((event.target !== arrow) && (event.target !== arrow.parentElement.children[1]) && (arrow.parentElement.children[1].id === 'appearance selected')) {

                arrow.parentElement.children[1].id = 'appearance'
                arrow.children[0].classList.toggle('selected')
            }
        })
        
    })
    

})()