const swiper = new Swiper('.hotel-swiper', {
    loop: true,
    slidesPerView:1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.hotel-btn-next',
      prevEl: '.hotel-btn-prev',
    },
    breakpoints: {
        1024: {
          slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
      }
});
const swiper2 = new Swiper('.head-swiper', {
    loop: true,
    slidesPerView:1,
    freeMode:true,
    navigation: {
      nextEl: '.head-btn-next',
      prevEl: '.head-btn-prev',
    },
});


const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBurger = document.querySelector('.menu-close-icon');
const body = document.querySelector('body')

function activateBurgerMenu() {
    burger.addEventListener('click' , ()=> {
        burger.classList.add('active');
        mobileMenu.classList.add('active');
        setTimeout(burger.classList.remove('active') , 1000);
        body.style.overflow="hidden"
    })
}
function closeBurgerMenu() {
    closeBurger.addEventListener('click' , ()=> {
        mobileMenu.classList.remove('active');
        body.style.overflow="auto"
    })
}
activateBurgerMenu();
closeBurgerMenu() ;

const mobileDropdownLinks = document.querySelectorAll('.mobile-dropdown-item');

function activateMobileDropdown() {
    mobileDropdownLinks.forEach(el => {
        el.addEventListener('click' , (e)=> {
            el.classList.toggle('active');
            el.nextElementSibling.classList.toggle('active');
        })
    })
}
activateMobileDropdown();

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
