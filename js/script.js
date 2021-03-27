// Инициализируем Swiper
new Swiper ('.image-slider', {
    //Стрелки 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
// Навигация
//Буллеты, текущее положение, прогрессбар
pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true,
    //Динамические буллеты
    dynamicBullets: true,
    // Кастомные буллеты 
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
},

    // Колличество слайдов для показа
    slidesPerView: 3,
    // Отступ между слайдами
    // spaceBetween: 20,

    //Брейк поинты (адаптив)
    //Ширина экрана   '@1.50'
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {                         
            slidesPerView: 3,
        }
    },

    // Отключаем предзагрузку всех картинок
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

});