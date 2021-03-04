# Day 12 Key Sequence Detection

**Date**: 2021/03/04

**JavaScript**: key event, splice

**link**: https://www.youtube.com/watch?v=_A5eVOIqGLU

## 프로그램 설명(구현해야 할 부분)

- 특정 키 입력하면 이스트 에그같이 숨겨진 기능 들어나는 것

### 구현 **코드**

- javascript

```jsx
const pressed = [];
const secretCode = 'secret;;

window.addEventListener('keyup', (e) => {
	console.log(e.key);
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); //뒤에서 부터 시작 -> negative 사용
	if(pressed.join('').includes(secretCode)){// === 로 비교할 수도 있다.
		console.log('play secret mode');
		cornify_add();
	}
	console.log(pressed);
});
```