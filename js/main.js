$(document).ready(function(){ 

var $hamburger = $(".hamburger");

    $hamburger.on("click", function() {

    $hamburger.toggleClass("is-active");

});

$('button[data-target*="#navbarNav"]').click(function() {

$('header').toggleClass('red_header');

$('#logo_toggle').toggleClass('logo_white');

var src = ($("#logo_img").attr("src")==="images/logo_white.png")?"images/logo_red_white.png":"images/logo_white.png";

$("#logo_img").attr("src", src);

});

    

$('.our-fleet-slider').slick({

    dots: true,

  	slidesToShow: 3,

    slidesToScroll: 1,

    infinite: true,

    responsive: [

    {

      breakpoint: 768,

      settings: {

        slidesToShow: 2,

        slidesToScroll: 2

      }

    },

    {

      breakpoint: 480,

      settings: {

        slidesToShow: 1,

        slidesToScroll: 1

      }

    }

    ]

    });  

    

$('.slider-wrapper').slick({

  dots: true,

  infinite: true,

  autoplay: true,

  autoplaySpeed: 3000,

  speed: 500,

  fade: true,

  cssEase: 'linear'

});

});

				