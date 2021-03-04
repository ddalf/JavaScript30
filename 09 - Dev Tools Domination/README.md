# DauDev Tools Domination

Date: 2021/03/03
JavaScript: console
link: https://www.youtube.com/watch?v=8ZGAzJ0drl0&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

- 유용한 `console` 메소드

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', ()=>{
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');
    // Interpolated
    console.log('string : %s', '♡');
    // Styled
    console.log('%c great text', 'font-size:50px; background:red; text-shadow : 10px 10px');
    // warning!
    console.warn('nooo');
    // Error :|
    console.error('error!');
    // Info
    console.info('info');
    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'This is wrong!');
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();
    // Grouping together
    dogs.forEach(dog => {
        // console.group(`${dog.name}`);
        console.groupCollapsed(`${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} years old`);
        console.groupEnd(`${dog.name}`);
    })
    // counting
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt2');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });
    
    //table
    console.table(dogs);
});
```

## 사용된 개념

### console.log()

```jsx
		 // Regular
    console.log('hello');
    // Interpolated
    console.log('string : %s', '♡');
    // Styled
    console.log('%c great text', 'font-size:50px; background:red; text-shadow : 10px 10px');
```

> [https://developer.mozilla.org/en-US/docs/Web/API/Console#outputting_text_to_the_console](https://developer.mozilla.org/en-US/docs/Web/API/Console#outputting_text_to_the_console)

### console.warn()  console.error()  console.info()

- `console.warn()`: 경고 메시지를 출력. 문자열 대체 및 추가 인수를 사용할 수 있음
- `console.error()` : Outputs an error message.
- `console.info()` : Informative logging of information

```jsx
 // warning!
    console.warn('nooo');
    // Error :|
    console.error('error!');
    // Info
    console.info('info');
```

### console.assert()

- 인수가 false 일 경우 콘솔에 메시지 및 스택 추적 기록 메시지 출력

```jsx
    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'This is wrong!');
```

### console.dir()

- 지정된 JavaScript 개체 속성의 대화 형 목록을 표시

```jsx
		const p = document.querySelector('p');
    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
```

### console.count()

- 주어진 레이블로이 줄이 호출 된 횟수를 기록

```jsx
// counting
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt2');
```

### console.group(), console.groupcollapsed(), console.groupEnd()

- `console.group()` 부터 `console.groupEnd()`까지 한 그룹으로 묶어 안의 내용들을 콘솔에 나타내줌
- `console.groupCollapsed()` : 닫혀있는 상태로 그룹 기준 이름만 콘솔에 나타남

```jsx
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });
```

### console.time() console.timeEnd()

- **`[console.time()](https://developer.mozilla.org/en-US/docs/Web/API/Console/time)` :** 입력 매개 변수로 지정된 이름 으로 타이머를 시작
- **`[console.timeEnd()](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd)` :** 지정된 타이머를 중지하고 시작된 이후 경과 된 시간 (초)을 기록

```jsx
 // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });
    
    //table
    console.table(dogs);
```

> [https://developer.mozilla.org/en-US/docs/Web/API/Console#outputting_text_to_the_consol](https://developer.mozilla.org/en-US/docs/Web/API/Console#outputting_text_to_the_console)