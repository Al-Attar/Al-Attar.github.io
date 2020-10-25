 // slider 

 let slideIndex = 1,
     slides = documnet.querySelectorAll('.slider-item'),
     prev = document.querySelector('.prev'),
     next = document.querySelector('.next'),
     dotsWrap = document.querySelector('.slider-dots'),
     dots = document.querySelectorAll('.dot');
    

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

    