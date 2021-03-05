# Day 22 Follow Along Link Highlighter

**Date**: 2021/03/05

**JavaScript**: document.cretateElement(), element.getBoundingClientRect(), mouseenter, mouseleave

**Link**: https://www.youtube.com/watch?v=POP_qri7RA8&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

- a 태그 요소에 마우스 가져다되면 highlight 표시 됨

### 구현 방법

- javascript

```jsx
window.addEventListener('load', function(e){
    const triggers = document.querySelectorAll('a');//a태그 요소 모두 가져옴
    const highlight = document.createElement('span');//span 요소 생성
    highlight.classList.add('highlight');//highlight 클래스 추가
    document.body.append(highlight);//body에 생성된 요소 추가

    
    function highlightLink(){
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords);
				//스크롤을 내려도 highlight 객체가 정확히 이동해야 함 => window.scrollX, window.scrollY로 스크롤한 X, Y 값을 가져와서 더해 줌
        const coords = {
            width : linkCoords.width,
            height : linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left : linkCoords.left + window.scrollX
        }
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
    }

    triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));
});
```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', function(e){
    const triggers = document.querySelectorAll('a');//a태그 요소 모두 가져옴
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);
    function highlightLink(){
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords);
        const coords = {
            width : linkCoords.width,
            height : linkCoords.height,
            x : linkCoords.x + window.scrollX,
            y : linkCoords.y + window.scrollY
        }
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
    }

    function removehighlight(){
        highlight.style.removeProperty('width');
        highlight.style.removeProperty('height');
        highlight.style.removeProperty('transform');
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', highlightLink)
        trigger.addEventListener('mouseleave', removehighlight);
    });
});
```

- 추가
    - mouseleave 되었을 때 highlight가 사라지도록 추가하였다.
        - element.style.removeProperty 사용해서 원하는 스타일 속성 삭제
        - element.style.width = '' 와 같이 빈 값 넣어줘서 삭제도 가능

# 사용된 개념

## Css

## JavaScipt

### mouseover vs mouseenter

- `mouseover` 이벤트 : 이벤트 버블링이 적용되는 이벤트이기 때문에 내부의 div 태그 안에 들어가도 이벤트를 또 다시 발생시킴
- `mouseenter` 이벤트 : 문서 객체의 안에 있는지 외부에 있는지만 따지기 때문에 이벤트가 한 번만 발생

### **Element.getBoundingClientRect()**

- 요소의 크기와 Viewport를 기준으로 한 위치를 반환