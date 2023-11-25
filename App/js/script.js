
const btnHamburger = document.querySelector('#btnHamburger');
const Header = document.querySelector('.header');
const Overlay = document.querySelector('.overlay');


btnHamburger.addEventListener('click', function(){
   

    if (Header.classList.contains('open')){// Close Hamburger Menu
        Header.classList.remove('open')
        Overlay.classList.add('fade-out')
        Overlay.classList.remove('fade-in')
    }
    else {// Open Hamburger Menu
        Header.classList.add('open');
        Overlay.classList.remove('fade-out')
        Overlay.classList.add('fade-in')
    }
});