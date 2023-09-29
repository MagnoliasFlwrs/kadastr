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
const swiper3 = new Swiper('.news-swiper', {
    loop: true,
    slidesPerView:1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.news-btn-next',
      prevEl: '.news-btn-prev',
    },
    breakpoints: {
        600: {
          slidesPerView: 1.5,
        },
        900: {
            slidesPerView: 2,
          },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
      }
});
const swiper4 = new Swiper('.stroke1-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    speed: 5000,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
        665: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
});
const swiper5 = new Swiper('.stroke2-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    speed: 5000,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
          },
        1600: {
            slidesPerView: 6,
            spaceBetween: 30
          }
      }
});
const swiper6 = new Swiper('.registration-swiper', {
  loop: true,
  slidesPerView:1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.registration-btn-next',
    prevEl: '.registration-btn-prev',
  },
  breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
    }
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



// custom select

const servicesSelect =  document.querySelector('.services');
const servicesOptions = document.querySelectorAll('.services-list li');
const servicesSelectBody = document.querySelector('.services-list');


if (servicesSelect) {
    servicesSelect.addEventListener('click' , () => {
        servicesSelectBody.classList.add('active');
  })
  servicesSelect.querySelector('p').addEventListener('click' , () => {
    servicesSelectBody.classList.add('active');
  })
  servicesOptions.forEach(el => {
      el.addEventListener('click' , ()=> {
        servicesSelect.querySelector('p').innerHTML = el.innerHTML;
        servicesSelect.dataset.current = el.dataset.value;
        servicesSelectBody.classList.remove('active')
      })
  })
}


// check-modal

const checkBtn = document.querySelector('.check-btn');
const checkModal = document.querySelector('.check-modal');
const overlay = document.querySelector('.overlay');
const checkModalClose = document.querySelector('.close-wrap');

function openCheckModal() {
  checkBtn.addEventListener('click' , ()=> {
    overlay.classList.add('open');
    checkModal.classList.add('active');
  })
}
const checkModalCloseArr = [overlay , checkModalClose];

function closeCheckModal()  {
  checkModalCloseArr.forEach(el => {
    el.addEventListener('click' , ()=> {
      overlay.classList.remove('open');
      checkModal.classList.remove('active');
    })
  })
}
if (checkBtn) {
  openCheckModal() ;
  closeCheckModal();
}


// order-modal

const orderBtn = document.querySelector('.order-btn');
const orderModal = document.querySelector('.order-modal');
const orderModalClose = document.querySelector('.order-modal .close-wrap');

function openOrderModal() {
  orderBtn.addEventListener('click' , ()=> {
    overlay.classList.add('open');
    orderModal.classList.add('active');
  })
}
const orderModalCloseArr = [overlay , orderModalClose];

function closeOrderModal()  {
  orderModalCloseArr.forEach(el => {
    el.addEventListener('click' , ()=> {
      overlay.classList.remove('open');
      orderModal.classList.remove('active');
    })
  })
}
if (orderBtn) {
  openOrderModal() ;
closeOrderModal();
}
