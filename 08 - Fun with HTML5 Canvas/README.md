# Day 8 Fun with HTML5 Canvas

Date: 2021/03/03
JavaScript: canvas, mouse event
link: https://www.youtube.com/watch?v=8ZGAzJ0drl0&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

- 캔버스 구현
    1. 마우스 눌렀을 때 해당 위치 시작으로 선 시작해서 움직이는 위치 따라 선 그려지고 마우스 때면 선 그리기 끝남
    2. 선 색깔 hsl 증가하면서 바뀌다가 어느값 도달 하면 다시 0부터
    3. 선 굵기  일정 굵기 이상이면 줄어듬. 일정 굵기 이하면 커짐.

### **구현 방법**

- javascript

```jsx
const canvas = id가 draw인 요소 가져옴
//canvas의 크기 window 크기에 맞춤
canvas의 width = window.innerWidth;
canvas의 height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
//ctx.globalCompositeOperation = 'multiply';

let isDrawing = false; //마우스가 눌려진 상태(down)가 되었을 때만 그리도록
let lastX = 0;//그리는 선 시작점
let lastY = 0;//그리는 섬 끝점
let hue = 0;
let direction = true;

function draw(e){
	if(!isDrawing) return; // stop the function from running when they are not moused down
	console.log(e);
	//시작 start from
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%);
	ctx.beginPath();
	//도착 go to
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);	
	ctx.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
	if(hue >= 360){
		hue = 0;
	}
	if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1{
		direction = !direction;
	}
	direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousedown', {
	isDrawing true로
	[lastX, lastY] = [e.offsetX, e.offsetY];//마우스가 움직이기 전(mousemove)에 mousedown 발생 =>lastX, lastY 갱신해줌
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', isDrawing false로);
canvas.addEventListener('mouseout', isDrawing false로);

```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', ()=>{
    console.log('load');
    const canvas = document.querySelector('#draw');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;
    
    function draw(e){
        if(!isDrawing) return;
        console.log("draw");
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if(hue >= 360) hue = 0;

        if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        }
        direction ? ctx.lineWidth++ : ctx.lineWidth--;
    }

    canvas.addEventListener('mousedown', (e)=>{
        if(e.which !== 1) return; // 1:좌클릭, 2:휠클릭, 3:우클릭. 마우스 좌클릭이 아니면 return
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    
    canvas.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 10;
        hue = 0;
        direction = true;
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
});
```

- 추가한 부분
    1. 마우스 우클릭 시에만 선 그리게 함
    2. 마우스 좌클릭 시 캔버스 clear

## 사용된 개념

### HTMLCanvasElement.getContext()

`HTMLCanvasElement.getContext()`

- 캔버스의 드로잉 컨텍스트를 반환
- 컨텍스트 식별자가 지원되지 않을 경우 null을 반환

```jsx
var ctx = canvas.getContext(contextType);
var ctx = canvas.getContext(contextType, contextAttributes);
```

> [https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext)
[https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement)

### Canvas 속성

- strokeStyle : 그리기 스타일(색상)
- beginPath() : 새로운 경로 시작
- moveTo() : stroke 시작 점
- lineTo() : stroke 끝 점
- stroke() : stroke경로(시작점, 끝점) 잇음

> [http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)

### 참고. 캔버스 그리기 최적화

> [https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)