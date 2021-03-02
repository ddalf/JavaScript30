# Day 5 Flex Panel Gallery

Date: 2021/03/01
JavaScript: forEach
css: ClassList, flex
link: https://www.youtube.com/watch?v=9eif30i26jg&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

1. 마우스 클릭하면 해당 부분의 사진 영역 넓어짐

### **구현 방법**

- css

```jsx
.panels{ //flex container
	...
	display : flex;
}
.panel { //flex container & flex item
	...
	flex : 1; //flex 요소들 균등하게 나눠지게 해줌
	justify-content : center;
	align-item : center;
	
	display : flex;
	flex-direction : column;//flex 기본 수평 ~> 수직으로 만들어줌
}

1. flex container -> panels이고 flex item은 panel
2. panel도 flex container 로 만들어 줘야 함.
=> css 에서 flex item인 동시에 flex container 일 수 있다.

.panel > * { //flex item
	...
	flex : 1 0 auto;
	display : flex;
	justify-content : center;
	align-item : center;
}

.panel > * 의 첫번째 자식 transform 이용 해서 위쪽으로 사라지게.
.panel .open-action > * 의 첫번째 자식 transform 이용 해서 제자리로 돌아오게
.panel > * 의 마지막 자식 transform 이용 해서 아래쪽으로 사라지게.
.panel .open-action > * 의 마지막 자식 transform 이용 해서 제자리로 돌아오게.

.panel .open {
	...
	flex : 5; // 나머지 보다 5배 크게
}
```

- javascript

```jsx
const panels = panel타입 요소 모두 가져옴.
const toggleOpen : click시 이벤트 핸들러 메소드{
	classList의 toggle 메소드로 open 타입 추가
}

const toggleActive : transitioned시 이벤트 핸들러 메소드{
	현재 이벤트 일어난 요소에 flex가 포함되어 있으면
	-> classList의 toggle 메소드로 open-action타입 추가
}

panels의 forEach 메소드로 각 panel에 click 이벤트 리스너 추가.
panels의 forEach 메소드로 각 panel에 transitioned 이벤트 리스너 추가.
```

### 구현 **코드**

- css

```jsx
html {
    box-sizing: border-box;
    background: #ffc600;
    font-family: 'helvetica neue';
    font-size: 20px;
    font-weight: 200;
  }
  
  body {
    margin: 0;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  .panels {
    min-height: 100vh;
    overflow: hidden;
    display: flex;
  }

  .panel {
    background: #6B0F9C;
    box-shadow: inset 0 0 0 5px rgba(255,255,255,0.1);
    color: white;
    text-align: center;
    align-items: center;
    /* Safari transitionend event.propertyName === flex */
    /* Chrome + FF transitionend event.propertyName === flex-grow */
    transition:
      font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
      flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
      background 0.2s;
    font-size: 20px;
    background-size: cover;
    background-position: center;
    flex : 1;
    justify-content : center;
    display : flex;
    flex-direction : column;
  }

  .panel1 { background-image:url(https://source.unsplash.com/gYl-UtwNg_I/1500x1500); }
  .panel2 { background-image:url(https://source.unsplash.com/rFKUFzjPYiQ/1500x1500); }
  .panel3 { background-image:url(https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d); }
  .panel4 { background-image:url(https://source.unsplash.com/ITjiVXcwVng/1500x1500); }
  .panel5 { background-image:url(https://source.unsplash.com/3MNzGlQM7qs/1500x1500); }

  /* Flex Children */
  .panel > * {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    flex : 1 0 auto;
    display : flex;
    justify-content : center;
    align-items : center;
  }

  .panel > *:first-child {
    transform : translateY(-100%);
  }

  .panel.open-active > *:first-child{
      transform : translateY(0);
  }

  .panel > *:last-child {
      transform : translateY(100%);
  }

  .panel.open-active > *:last-child{
      transform : translateY(0);
  }

  .panel p {
    text-transform: uppercase;
    font-family: 'Amatic SC', cursive;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
    font-size: 2em;
  }
  
  .panel p:nth-child(2) {
    font-size: 4em;
  }

  .panel.open {
    flex : 5;
    font-size: 40px;
  }
```

- javascript

```jsx
window.addEventListener('load', function(e){
    console.log('start');
    const panels = document.querySelectorAll('.panel');
    function toggleOpen() {
        console.log(e.target.classList);
        this.classList.toggle('open');
    };
    const toggleActive = e => {
        console.log(e.propertyName);
        if(e.propertyName.includes('flex')){
            e.target.classList.toggle('open-active');
        }
    };
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
});
```

## 사용된 개념

### Element.classList

- **`toggle( String [, force] )`**
    - 하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 `false`를 반환하며, 존재하지 않으면 클래스를 추가하고 `true`를 반환한다.
    - 두번째 인수가 있을 때: 두번째 인수가 `true`로 평가되면 지정한 클래스 값을 추가하고 `false`로 평가되면 제거한다.

### Arrow Function

- function 표현에 비해 구문이 짧음
- 자신의 this, arguments, super, new.target을 바인딩 하지 않음(정적)
- 항상 익명
- 생성자로 사용 불가능. 메소드 함수로 사용 불가능.