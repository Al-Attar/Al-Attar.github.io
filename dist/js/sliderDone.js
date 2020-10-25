 // slider 

 let slideIndex = 1,
     slides = document.querySelectorAll('.slider__item'),
     prev = document.querySelector('.slider__prev'),
     next = document.querySelector('.slider__next'),
     dotsWrap = document.querySelector('.slider__dots'),
     dots = document.querySelectorAll('.slider__dot');
    
    snowSlides(slideIndex);

    function snowSlides(n) {

        if (n > slides.lenght) {
            slideIndex = 1;
        } 
        if (n < slides.lenght) {
            slideIndex = slides.lenght;
        }

        slides.forEach((item) => item.style.display = 'none' );

        // for(let i = 0; i < slides.lenght; i++) {
        //     slides[i].style.display = 'none';
        // };

        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        snowSlides(slideIndex += n);
    }

    function currentSlide(n) {
        snowSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot')
            && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    