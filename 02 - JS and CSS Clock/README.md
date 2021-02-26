# Day 2 JS and CSS Clock

## 프로그램 설명(구현해야 할 부분)

* 시계의 시,분,초 바늘이 돌아가는 것 구현

### **구현 방법**

```css
transform
transform-origin
transition
transition-timing-function : cubic-bezier(linear / ease-in / ease-out / ease-in-out)

```

```jsx
secondHand : .second-hand 요소 가져옴
minHand : .min-hand 요소 가져옴
hourHand : .hour-ahnd요소 가져옴

setDate() : {
	now : Date 객체 생성

	seconds : now의 getSeconds() 메소드 통해 현재 초 구함.
	secondsDegrees = (sec / 60) * 360 + 90
	secondHand 스타일 중 transform 바꿔줌.

	mins : now의 getMinutes() 메소드 호출 통해 현재 분 구함.
	minsDegrees = (min / 60) * 360 + (sec / 60) * 6 + 90
	minHand의 스타일 중 transform 바꿔줌
	
	hours : now의 getHours() 메소드 호출 현재 분 구함.
	hourDegrees = (hour / 12) * 360 + (min / 60) * 30 + 90
} 

setInterval : setDate 호출, 1000
```

### **스크립트 코드**

```jsx
window.addEventListener('load', function(e){
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    setClock = e => {
        const now = new Date();
        
        const seconds = now.getSeconds();
        const secondsDegrees = (seconds / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;//rotate(90deg);

        const mins = now.getMinutes();
        const minsDegrees = (mins / 60) *360 + (seconds / 60) * 6 + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    };

    setInterval(setClock, 1000);
});
```

- html과 js 파일 분리 ⇒ script 태그가 head에 있으므로 로딩된 후 실행하도록 load 이벤트 리스너 사용.



## 사용된 개념

### CSS - Transform

- transform

    요소에 적용할 변형 지정. 여러 개의 변형 목록을 공백으로 구분하여 대입 → 순차적으로 결과물에 적용됨

- transform - origin

    원점의 위치를 지정. 기본값 = 요소의 중심. 하나의 점을 기준으로 하는 변형에 사용(회전, 확대, 비틀기 ... )

```css
/* Keyword values */
transform: none;
 
/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: perspective(17px);
 
/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
 
/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```

> [https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
[https://developer.mozilla.org/ko/docs/Web/CSS/transform](https://developer.mozilla.org/ko/docs/Web/CSS/transform)



### CSS - Transition : 화면 이동(transform이 일어나는 동안 상태)에 대한 시간 지정

- **transition-duration** : 변화하는 시간 (default: 0s)
- **transition-delay** : 시작 전 대기 시간 (default: 0s)
- **transition-timing-function** : 움직임을 조절 (defulat: ease) (linear / ease-in / ease-out / ease-in-out)
    - **linear** : cubic-bezier( 0, 0, 1, 1 )

        등속도, 전환 과정에 속도의 변화 없이, 처음부터 끝까지 흐름이 일정하게 유지

    - **ease** : cubic-bezier( 0.25, 0.1, 0.25, 1 )

        진적인 가속, 기본값은 ease 로서 느리게 시작한 후 빠르게 가속되다가 다시 느리게 끝남

    - **ease-in** : cubic-bezier( 0.42, 0, 1, 1 )

        가속, 느리게 시작된 후 빠름 흐름으로 끝남

    - **ease-out** : cubic-bezier( 0, 0, 0.58, 1 )

        감속. 빠르게 시작된 후 느리게 끝남

    - **ease-in-out** : cubic-bezier( 0.42, 0, 0.58, 1 )

        점진적인 가속 후에 감속, 느리게 시작한 후 중간 지점에서 빨라지다가 다시 느려지면서 끝남(ease랑 비슷 but ease처럼 급격하지 X)

- **transition-property** : 트랜지션을 적용할 속성 명시 (default: all)
- **transition** : 트랜지션 속기형(위 속성들 한데 모아 작성)

> [https://haenny.tistory.com/181](https://haenny.tistory.com/181)
[https://webclub.tistory.com/624](https://webclub.tistory.com/624)



### JS - setInterval()

- 일정한 시간 간격으로 작업 수행하기 위해 사용.
- 중지 : clearInterval() 사용
- 주의점 : 일정한 시간 간격으로 실행되는 작업 → 그 시간 간격보다 오래걸릴 경우 문제 발생