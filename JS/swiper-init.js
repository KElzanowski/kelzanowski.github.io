var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If you want pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // If you want navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // If you want scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
