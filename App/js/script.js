
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const Header = document.querySelector('.header');
const Overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function(){
   
    if (Header.classList.contains('open')){// Close Hamburger Menu
        body.classList.remove('noscroll')
        Header.classList.remove('open')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out')
        })
       
    }
    else {// Open Hamburger Menu
        body.classList.add('noscroll')
        Header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in')
        })
       
    }
});