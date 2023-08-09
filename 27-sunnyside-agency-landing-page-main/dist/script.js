(function(){
    const iconMobileMenu = document.querySelector('#hamb-menu-icon');
    const menuMobile = document.querySelector('#menu-mobile');
    const titleAndArrow = document.querySelector('#title-and-arrow');
    const learnMoreTransfBrand = document.querySelector('#learn-more-transf-brand');
    const learnMoreStandOut = document.querySelector('#learn-more-stand-out');
    const yellowDash = document.querySelector('#yellow-dash');
    const pinkDash = document.querySelector('#pink-dash');

    iconMobileMenu.addEventListener('click',() => {
        menuMobile.classList.toggle('hidden');
        titleAndArrow.classList.toggle('hidden');
    })

    window.addEventListener('resize', updateWindow);
    learnMoreTransfBrand.addEventListener('mouseover', hoverLearnMoreTransfBrand);
    learnMoreTransfBrand.addEventListener('mouseout', hoverLearnMoreTransfBrand);
    learnMoreStandOut.addEventListener('mouseover', hoverLearnMoreStandOut);
    learnMoreStandOut.addEventListener('mouseout', hoverLearnMoreStandOut);

    function updateWindow() {
        if(window.innerWidth > 1024) {
            titleAndArrow.classList.remove('hidden');
        } 
        else if(window.innerWidth < 1024 && (!menuMobile.classList.contains('hidden'))) {
            titleAndArrow.classList.add('hidden')
        }
    }

    function hoverLearnMoreTransfBrand() {
        yellowDash.classList.toggle('bg-yellow-200');
        yellowDash.classList.toggle('bg-yellow-300');
    }
    function hoverLearnMoreStandOut() {
        pinkDash.classList.toggle('bg-pink-200');
        pinkDash.classList.toggle('bg-red-400');
    }

})()