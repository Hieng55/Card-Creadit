//Swiper

var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "coverflow",
    centeredSlides: true,
    speed: 800,
    coverflowEffect: {
        rotate: 60,
        stretch: 10,
        depth: 150,
        modifier: 2,
        slideShadows: false,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
