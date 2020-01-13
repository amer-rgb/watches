$(function(){
    'use strict';
    //owl carousel
    $('#owl-one').owlCarousel({
        loop:true,
        autoplay:true,
        margin:30, 
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    $('#owl-two').owlCarousel({
        loop:true,
        autoplay:true,
        margin:30, 
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
    $('#owl-three').owlCarousel({
        loop:true,
        autoplay:true,
        margin:30, 
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:6
            }
        }
    });

//wow
new WOW().init()
// go to top 
let goUp = $('.gotoup');
$(window).scroll(function(){
    $(this).scrollTop() > 700 ? goUp.fadeIn(1000) : goUp.fadeOut(1000);
});
goUp.click(function(){
    $('html, body').animate({
        scrollTop:"0" 
    },600);
});
});