let menuMobileButton = document.querySelector('.icon');
let menuMobile = document.querySelector('.mobile-menu');

function menuShow() {
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

document.onclick = (e) => {
    if(e.target !== menuMobileButton){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    }
}