// Set overly Class To body Tag on hover Menu
const overlyCallback = () => {

    let body = document.querySelector("body");
    body.classList.toggle("overly");

}

// Set Background Color in Mega Menu Tabs
const setBackground = (color) => {

    let back = document.querySelector(".megamenu .nav");
    back.style.backgroundColor = color;

}

// Approach Component Swiper
const approachSwiper = new Swiper(".approachSwiper", {

    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        // disableOnInteraction: false,
    },
    speed: 400,
    centeredSlides: true,
    loop: true,
    lazy: false,
    grabCursor: true,
    // mousewheel: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    on: {
        // init: (swiper) => {
        //     const currentSlide = document.querySelector(".swiper-slide-active");
        // },
        slideChangeTransitionEnd: (swiper) => {
            const approachSection = document.getElementById("approach-section");
            const tabContents = document.querySelectorAll('.tab-content');

            // حذف کلاس show از تمام div های tab-content
            tabContents.forEach(function (tabContent) {
                tabContent.classList.remove('show');
            });

            // اضافه کردن کلاس show به اسلایدر جاری
            tabContents[(swiper.realIndex) + 1].classList.add('show');

            // تغییر رنگ پس زمینه approach-section
            approachSection.style.backgroundColor = tabContents[(swiper.realIndex) + 1].getAttribute('data-background');
            
            // تغییر رنگ پس‌زمینه عنصر پسین
            approachSection.querySelector(".divider").style.backgroundColor = tabContents[(swiper.realIndex) + 1].getAttribute('data-divider');
        },
        // slideChange: (swiper) => {  
            // console.log(swiper.activeIndex);
            // console.log(swiper.realIndex);
        // },
        tap: function (swiper, event) {
            const clickedSlide = event.target.closest('.swiper-slide');
            const slideIndex = swiper.slides.indexOf(clickedSlide);
            swiper.slideTo(slideIndex);
        },
    },

});

// Related Component Swiper
const relatedSwiper = new Swiper(".relatedSwiper", {

    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        // disableOnInteraction: false,
    },
    speed: 400,
    centeredSlides: false,
    loop: true,
    lazy: true,
    grabCursor: true,
    // mousewheel: true,
    keyboard: {
        enabled: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },

});

// Product Gallery Component Swiper
var galleryThumbs = new Swiper(".gallery-thumbs", {

    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: "horizontal",
    breakpoints: {
        1200: {
            direction: "vertical"
        },
    },

});
  
var galleryMain = new Swiper(".gallery-main", {

    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev" 
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }

});
  
galleryMain.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryMain.activeIndex);
});
  
galleryThumbs.on("transitionStart", function () {
    galleryMain.slideTo(galleryThumbs.activeIndex);
});

Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
});

// Logos Lightbox
Fancybox.bind('[data-fancybox="logos"]', {
    // Your custom options for a specific gallery
});

// Video Modular Play/Pause
const playPause = () => {

    const video = document.querySelector('.video-container video');
    video.toggleAttribute("controls");
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }

}

// Anchor Modular Sticky
document.addEventListener('DOMContentLoaded', function() {
    var anchorModularSticky = new hcSticky('.anchorModular-section', {
        stickTo: 'main',
        top: 78,
        bottomEnd: 100
    });

    var anchorSticky = new hcSticky('.anchor-section', {
        stickTo: 'main',
        top: 78,
        // bottomEnd: 100
    });
});

// // Anchor Modular Active Menu Item
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[data-scroll]');
    const navLinks = document.querySelectorAll('.anchor li');

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //         // حذف کلاس active از تمام li ها
    //         navLinks.forEach(function (navLink) {
    //             navLink.classList.remove('active');
    //         });

    //         // افزودن کلاس active به li
    //         let activeLink = document.querySelector('li[data-scroll=' + entry.target.id + ']');
    //         activeLink.classList.add('active');

    //         console.log(entry.target.id);
    //     }
    //   });
    // });
    
    // sections.forEach((section) => {
    //   observer.observe(section);
    // });

    if ( sections.length ) {
        window.addEventListener('scroll', () => {
            let current = '';
          
            sections.forEach(section => {
              const sectionTop = section.offsetTop;
              if (scrollY >= sectionTop - 131) { // 100 پیکسل قبل از رسیدن به بخش
                current = section.getAttribute('id');
              }
            });
          
            // حذف کلاس active از تمام li ها
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });
    
            // افزودن کلاس active به li
            let activeLink = document.querySelector('li[data-scroll=' + current + ']');
            activeLink.classList.add('active');
        });
    }
});

// Blog Share Links Sticky
document.addEventListener('DOMContentLoaded', function() {
    var Sticky = new hcSticky('.share', {
        stickTo: '.sticky-row',
        top: 90,
        left: 50,
        bottomEnd: 50,
        followScroll: true,
        // responsive: {
        //     980: {
                
        //     }
        // }
    });
});

// AOS Animations
AOS.init({
    offset: 200,
    duration: 400,
    easing: 'ease-in-out-sine',
    delay: 0,
});