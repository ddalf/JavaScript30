window.addEventListener('load', function(e){
    function debounce(func, wait = 5, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

      const sliderImages = document.querySelectorAll('.slide-in');

      function checkSlider(e){
          sliderImages.forEach(sliderImage => {
            const slideInAt = window.innerHeight + window.scrollY - sliderImage.height / 2;
            const imageBottom = sliderImage.offsetTop + sliderImage.height;
            const isHalfShown = slideInAt > imageBottom;
            const isNotScrollPassed = window.scrollY < imageBottom;
            if(isHalfShown && isNotScrollPassed){
                sliderImage.classList.add('active');
            }
            else{
                sliderImage.classList.remove('active');
            }
            console.log(slideInAt, imageBottom);
          });
      }

      window.addEventListener('scroll', debounce(checkSlider));
});