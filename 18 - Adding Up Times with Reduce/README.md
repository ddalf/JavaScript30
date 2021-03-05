# Day 18 Adding Up Times with Reduce

**Date**: 2021/03/05

**JavaScript**: Math.floor(), map, reduce, split

**Link** : https://www.youtube.com/watch?v=SadWPo2KZWg&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

- 각 li 태그의 data-time 값을 더해서 시간 / 분 / 초로 콘솔에 나타냄

### 구현 방법

- javascript

```jsx
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  //or [...document.querySelectorAll('[data-time]')];
  //timeNodes 배열처럼 보이지만 NodeList형태이므로 배열화 시켜 저장
  // const seconds = timeNodes.map(node => node.dataset.time); 사용 불가

  const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      // const [mins, secs] = timeCode.split(':');//split으로 문자열 나눔 -> 문자열로 들아감
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      // console.log(mins, secs);
      return (mins * 60) * secs; 
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, seconds);
```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', function(e){
    const timeNodes = [...document.querySelectorAll('[data-time]')];
    // console.log(timeNodes);

    const seconds = timeNodes.map(timeNode => timeNode.dataset.time)
    .map(time => {
        const [minutes, seconds] = time.split(':').map(parseFloat);
        return minutes * 60 + seconds;
    })
    .reduce((total, eachSeconds) => total + eachSeconds);
    // .reduce((total, eachSeconds) => total + eachSeconds);

    let secondLeft = seconds;
    const hours = Math.floor(secondLeft / 3600);
    secondLeft = secondLeft % 3600;
    const minutes = Math.floor(secondLeft / 60);
    secondLeft = secondLeft % 60;

    console.log(hours, minutes, secondLeft);
});
```

# 사용된 개념

## JavaScipt

### NodeList 배열화

```jsx
const timeNodes = document.querySelectorAll('[data-time]');
const seconds = timeNodes.map(node => node.dataset.time); //불가!
// => timeNodes 배열처럼 보이지만 NodeList형태이므로 배열화 시켜 저장
```

```jsx
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const timeNodes = [...document.querySelectorAll('[data-time]')];
```

### Math.floor()

- `Math.floor()` 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환