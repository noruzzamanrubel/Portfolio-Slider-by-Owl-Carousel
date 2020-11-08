$(document).ready(function () {
    $('.portfolio-carousel').owlCarousel({
        loop:true,
        margin:20,
        dots: false,
        nav:true,
        navText: ["<div class='fas fa-angle-left'></div>","<div class='fas fa-angle-right'></div>"],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});
