// const track = document.querySelector(".hero__carousel-track");
// const slides = Array.from(track.children);
// const prevButton = document.querySelector('.hero__carousel-button--left');
// const nextButton = document.querySelector('.hero__carousel-button--right');
// const dotsNav = document.querySelector('.hero__carousel-nav');
// const dots = Array.from(dotsNav.children);

// const setSlidePosition = (slide, index) => {
//     const slideWidth = slides[0].getBoundingClientRect().width;
//     slide.style.left = slideWidth * index + 'px';
// }

// slides.forEach(setSlidePosition);
// nextButton.addEventListener('click', (e) => {
//     const currentSlide = track.querySelector('.current-slide')
//     const nextSlide = currentSlide.nextElementSibling;
//     const amountToMove = nextSlide.style.left;
//     track.style.transform = 'translateX(-' + amountToMove + ')';
//     console.log(amountToMove);
//     // console.log("kif");
// })

// console.log(nextButton);
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    transition: {
      name: 'carousel-animation',
      duration: 300,
      easing: 'ease-in-out'
    },

    scrollbar: {
      el: '.swiper-scollbar',
      hide: true,
    },
  });

    