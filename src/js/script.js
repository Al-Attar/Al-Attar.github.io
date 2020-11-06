$(document).ready(function(){
/*     $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    }); */

/*     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    }); */

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

 /*    $('.button_mini').on('click', function () {
        $('.overlay, #order').fadeIn('slow');
    });
 */
    $('.button_main').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

     //Smooth scroll and page-up

     $(window).scroll(function() {
         if ($(this).scrollTop() > 600) {
            $('.page-up').fadeIn();
         } else {
            $('.page-up').fadeOut();  
         }
     });

     $('a[href^="#up"]').click(function() {
         const _href = $(this).attr("href");
         $('html, body').animate({
             scrollTop: $(_href).offset().top + "px"
         });
         
         return false
     });
     

    // tracking scroll
    var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
  
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    sections.each(function() {
      var top = $(this).offset().top - nav_height - 300,
          bottom = top + $(this).outerHeight();
      
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
        
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });
  
  nav.find('a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');
    
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 300);
    
    return false;
  });
    

     new WOW().init();
});


window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    (function slider() {  
        //Slider
    
        let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
      showSlides(slideIndex);
    
    function showSlides(n) {
    
        if (n > slides.length) {
            slideIndex = 1;
        }
    
        if (n < 1) {
          slideIndex = slides.length;
        }
    
        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //   slides[i].style.display = 'none';
        // }
    
        dots.forEach((item) => item.classList.remove('dot-active'));
        
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active'); 
    }
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    prev.addEventListener('click', function() {
       plusSlides(-1);
    });
    
    next.addEventListener('click', function() {
      plusSlides(1);
    });
    
    dotsWrap.addEventListener('click', function(event) {
      for (let i = 0; i < dots.length + 1; i++) {
        if(event.target.classList.contains('dot')
        && event.target == dots[i-1]) {
          currentSlide(i);
        }  
    }
    });
    
    })();
});




//tiny-slider
/*   const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    controlsText: [
        '<img src="icons/left.svg">',
        '<img src="icons/right.svg">'
    ] 
  });
   
  document.querySelector('.prev').addEventListener('click', function () {
      slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
 */

 