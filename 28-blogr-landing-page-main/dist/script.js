(function(){
    const navHamburger = document.querySelector('#hamburger-menu');
    const nav = document.querySelector('#nav');
    const navProductMobile = document.querySelector('#nav-product-mobile');
    const navCompanyMobile = document.querySelector('#nav-company-mobile');
    const navConnectMobile = document.querySelector('#nav-connect-mobile');
    const iconClose = document.querySelector('#icon-close');
    const iconHamb = document.querySelector('#icon-hamb');
    const connnectMenu = document.querySelector('#connect-menu');
    const main = document.querySelector('#main')
    const menuTitles = document.querySelector('.menu-titles');
    const navConnectDesktop = document.querySelector('#nav-connect-desktop');
    const connectedContainerDesktop = document.querySelector('#connected-container-desktop');

    navHamburger.addEventListener('click', toggleMenuMobile);
    navConnectMobile.addEventListener('click', connectMenuMobile);
    navConnectDesktop.addEventListener('click', connectMenuDesktop);
    /* menuTitles.addEventListener('click', rotateArrow); */

    function toggleMenuMobile() {
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
        iconHamb.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        main.classList.toggle('-mt-[320px]');

        if(!connnectMenu.classList.contains('hidden')) {
            main.classList.toggle('mt-[110px]');
        }
    }
    function connectMenuMobile() {
        nav.classList.toggle('h-[306px]');
        nav.classList.toggle('h-[450px]');
        connnectMenu.classList.toggle('hidden');
        /* main.classList.add('-mt-[400px]'); */
        main.classList.toggle('-mt-[430px]'); /* 430 */
    }
    
    function connectMenuDesktop() {
        connectedContainerDesktop.classList.toggle('hidden');
        console.log('nav')
    }

    function rotateArrow() {
        menuTitles.childNodes.forEach((child) => {
            child.addEventListener('click', () => {
                child.childNodes[1].classList.toggle('rotate-180');
            })
        })
    }
    rotateArrow()
})()