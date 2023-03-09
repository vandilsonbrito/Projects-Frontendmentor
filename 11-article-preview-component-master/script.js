const body = document.querySelector('body');
const button = document.querySelector('#button_share');
const cardShare = document.querySelector('#card_share');
const iconShare = document.querySelector(".icon_share");

body.addEventListener('click', function(e) {
    const target = e.target.className;
    if(target === 'button_share' || target === 'icon_share') {
        cardShare.classList.add('active');
        iconShare.classList.add("active");
    }
    else {
        cardShare.classList.remove('active');
        iconShare.classList.remove("active");
    }

})

