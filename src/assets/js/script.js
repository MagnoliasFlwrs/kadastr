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
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        600: {
          slidesPerView: 1.5,
        },
        900: {
            slidesPerView: 2,
          },
        1200: {
            slidesPerView: 4,
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
var swiper7 = new Swiper(".gallery-mini", {
  spaceBetween: 30,
  slidesPerView: 2,
  direction: "horizontal",
  navigation: {
    nextEl: ".gallery-mini-button-next",
    prevEl: ".gallery-mini-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
  }
});
var swiper8 = new Swiper(".gallery", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },
  thumbs: {
    swiper: swiper7,
  },
});
const swiper9 = new Swiper('.contacts-swiper', {
  loop: true,
  slidesPerView:1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.contacts-btn-next',
    prevEl: '.contacts-btn-prev',
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


const calendars = document.querySelectorAll('.calendar');

if (calendars) {
  calendars.forEach(el => {
    const options = {
      settings : {
        lang: 'ru',
        visibility: {
          weekend: false,
          today: false,
        },
      },
      input: true,
      actions: {
        changeToInput(e, HTMLInputElement, dates, time, hours, minutes, keeping) {
          if (dates[1]) {
            dates.sort((a, b) => +new Date(a) - +new Date(b));
            HTMLInputElement.value = `${dates[0]} — ${dates[dates.length - 1]}`;
            setTimeout(()=> {
              calendar.HTMLElement.classList.add('vanilla-calendar_hidden');
            }, 1000)
          } else if (dates[0]) {
            HTMLInputElement.value = dates[0];
            setTimeout(()=> {
              calendar.HTMLElement.classList.add('vanilla-calendar_hidden');
            }, 1000)
          } else {
            HTMLInputElement.value = '';
            setTimeout(()=> {
              calendar.HTMLElement.classList.add('vanilla-calendar_hidden');
            }, 1000)
          }

        },
      },
    };
    const calendar = new VanillaCalendar(el , options);
    calendar.init();
  })
}

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
  document.addEventListener('click' , (e)=> {
    if ((!e.target.closest('.services-wrap')) && servicesSelectBody.classList.contains('active')) {
      servicesSelectBody.classList.remove('active');
    }
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

// gallery

const thumbs = document.querySelectorAll('.mini-img');
const bigImages = document.querySelectorAll('.images img');

if (thumbs) {
  thumbs.forEach((el,i)=> {
    el.addEventListener('click' , ()=> {
      bigImages.forEach(img=> {
        if(img.classList.contains('active')) {
          img.classList.remove('active');
        }
      })
      bigImages[i].classList.add('active');

    })
  })
}

// filter-select

const filterSelects = document.querySelectorAll('.item-btn');

if (filterSelects) {
  filterSelects.forEach(el => {
    el.addEventListener('click' , ()=> {
      if(el.classList.contains('check-list')) {
        const list = el.closest('.item-wrapper').querySelector('.list');
        const listOptions = list.querySelectorAll('li');

        list.classList.add('active');
        listOptions.forEach(li => {
          li.addEventListener('click' , ()=> {
            setTimeout(() => {
              list.classList.remove('active');
            }, 1500);
          })
        })
      } else {
        const list = el.closest('.item-wrapper').querySelector('.list');
        const listOptions = list.querySelectorAll('li');
        const title = el.querySelector('p');

        list.classList.add('active');

        listOptions.forEach(li => {
          li.addEventListener('click' , ()=> {
            title.innerHTML = li.innerHTML;
            title.dataset.current = li.dataset.value;
            list.classList.remove('active');
          })
        })
      }

    })
  })
}

// sort

const sortPrice = document.querySelector('.sort-price');
const sortDate = document.querySelector('.sort-date');

sortPrice?.addEventListener('click' , ()=> {
  sortPrice.classList.toggle('active');
  sortPrice.classList.toggle('down');
})
sortDate?.addEventListener('click' , ()=> {
  sortDate.classList.toggle('active');
  sortDate.classList.toggle('down');
})
