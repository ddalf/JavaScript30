# Day 10 JS Checkbox Challenge!

**Date**: 2021/03/04

**JavaScript**: key event

**link**: https://www.youtube.com/watch?v=RIPYsKx1iiU

## 프로그램 설명(구현해야 할 부분)

- `shift` 키를 누르고 처음 선택한 체크박스 부터 그 뒤에 선택한 체크박스까지 모두 선택 되게

### 구현 방법

- javascript

```jsx
const checkboxes = <div class="inbox">에서 <input type="checkbox">인 요소 모두 가져오기
let lastChecked;
let inBetween = false;
function handleCheck(e) {
	//shift key 눌러졌는지 check
	//해당 요소가 체크됐는지 check
	if(e.shiftKey && this.checked){
		//go ahead and do what we please
		//모든 checkbox에 대하여 반복
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if(checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween;//checkbox === this일 때 true가 checkbox === lastChecked일 땐 false가 된다
				//=> 위->아래 or 아래->위 클릭하는 것 구분할 필요 없음
				console.log('starting to check them in between');
			}
			if(inBetween){
				checkbox.checked = true;
			}
		});
		lastChecked = this;
	}
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck);
```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', ()=>{
    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    let lastChecked;
    let inBetween = false;

    function handleCheck(e){
        if(e.shiftKey && this.checked){//shiftKey가 눌러진 상태이고 현재 요소 체크박스가 check 되어 있다면
            checkboxes.forEach(checkbox => {
                if(checkbox === this | checkbox === lastChecked){
                    inBetween = !inBetween;
                }
                if(inBetween){
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
    }

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
    
});
```

## 사용된 개념

### KeyboardEvent.shiftKey

`var shiftKeyPressed = instanceOfKeyboardEvent.shiftKey`

- `Boolean` that indicates if the `shift` key was pressed (true) or not (false) when the event occurred.

> [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey)