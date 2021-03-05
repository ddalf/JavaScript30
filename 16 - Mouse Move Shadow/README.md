# Day 16 Mouse Move Shadow

**Date**: 2021/03/05

**JavaScript**: Math.round(), textShadow, { } 로 선언

**link**: https://www.youtube.com/watch?v=zaz9gLI-Xac&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

- 마우스가 움직이는 위치에 따라 텍스트의 그림자가 따라 움직임

### 구현 방법

- javascript

```jsx
const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 500; //100px
  console.log(text);
  function shadow(e){
    const {offsetWidth : width, offsetHeight : height} = hero;
		let {offsetX : x, offsetY : y} = e;
    //hero 내부에 자식 요소가 있으면 hero에서 마우스 이동을 하고 있지만 실제의 x와 y를 제공
    //hero의 자식에 마우스가 가져가 있을 때 hero의 제대로 된 x, y 값 가지기 위해서
    // console.log(x, y);
    if(this !== e.target){
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width *walk) - (walk/2));
    const yWalk = Math.round((y / height*walk) - (walk/2));
    console.log(xWalk, yWalk);
    
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
  }

  hero.addEventListener('mousemove', shadow);
```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', function(e){
    const hero = document.querySelector('.hero');
    const text = hero.querySelector('h1');
    const walk = 500;
    function shadow(e){
        const {offsetWidth:width, offsetHeight:height} = hero;
        let {offsetX:x, offsetY:y} = e;

        if(this !== e.target){
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }

        const xWalk = Math.round((x/width * walk) - (walk/2));
        const yWalk = Math.round((y/height * walk) - (walk)/2);

        text.style.textShadow = `
            ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
            ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
            ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
            ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
        `;
    }

    hero.addEventListener('mousemove', shadow);
});
```

# 사용된 개념

## CSS

### textshadow

```css
text-shadow: offset-x offset-y blur-radius color | none | initial | inherit
```

- offset-x: 그림자의 수평 거리
- offset-y: 그림자의 수직 거리
- blur-radius: 흐림 정도(기본 0)
- color: 색상 (기본 브라우저 기본값)
- none: 그림자 효과 없애기
- initial: 기본값으로
- inherit: 부모의 속성값 상속

## JavaScipt

### {}로 한꺼번에 선언

- 기본 문법

```jsx
const width = hero.offsetWidth;
const hegiht = hero.offsetHeight;
```

- ES6 문법

```jsx
const {offsetWidth : width, offsetHeight : height} = hero;
```

### Math.round()

- **`Math.round()`** 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환