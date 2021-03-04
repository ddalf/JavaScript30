# Untitled

**Date**: 2021/03/04

**JavaScript**: debounce, offsetTop, scroll, scrollY

**link**: https://www.youtube.com/watch?v=_A5eVOIqGLU

## 프로그램 설명(구현해야 할 부분)

- 스크롤이 내려갈 때마다 원하는 부분에 사진 이미지 나타남
    - debounce 사용
    - 사진 이미지 높이의 반 이상 지났을 때 사진 이미지가 나타난다.
        - 사진 이미지 높이 반 이상 지남 :
        - 사진 이미지 아직 다 지나지 않음 :

### 구현 방법

- javascript

```jsx
window.addEventListener('load', function(e){
    function debounce(func, wait = 20, immediate = true) {
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

		const sliderImages = slide-in 탕입 클래스 모두 가져오기
		
		function checkSlide(e){//loop over every single image and figure out where the image needs to be shown
			//scrollY : 스크롤이 얼마나 내려갔는지(how much the scroll down)
			sliderImages.forEach(slideImage => {
				//half way throught the image
				const slideInAt = 윈도우 길이 + 스크롤 얼마나 내려갔는지 - 사진 길이 / 2;
				//bottom of the image. offsetTop : 윈도우 맨 위쪽 ~ 이미지의 위쪽 변까지의 길이
				const imageBottom = sliderImage.offsetTop + sliderImage.height;
				const isHalfShown = slideInAt > sliderImage.offsetTop;
				const isNotScrolledPast = window.scrollY < imageBottom;//아직 이미지 지나지 않은 상태
				if(isHalfShown && isNotScrollPast){
					sliderImage.classList.add('active');
				}
				else{
					sliderImage.classList.remove('active);
				}
			});
		}

		addEventListener('scroll', debounce(checkSlide));
});
```

### 구현 **코드**

- javascript

```jsx
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
```