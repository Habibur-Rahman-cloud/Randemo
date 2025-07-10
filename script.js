



// -------------About Me Image Slider-------------------
    const slides = document.querySelectorAll('.slide');
    let current = 0;

    function activateSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      activateSlide(current);
    }

    activateSlide(current);
    setInterval(nextSlide, 2000);