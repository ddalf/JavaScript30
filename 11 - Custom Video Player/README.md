# Day 11 Custom Video Player

Date: 2021/03/04
JavaScript: mouse event, video
link: https://www.youtube.com/watch?v=yx-HYerClEA&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

- 동영상 재생
    1. 비디오 toggle 버튼 or 화면 누를 시 재생 / 멈춤(togglePlay)
    2. 비디오 재생 /  멈춤 시 toggle button 모양 바뀜(updateButton)
    3. skip 버튼 클릭 시 클릭된 값만큼 동영상 재생 시간 이동(skip)
    4. volume, playbackRate 의 rangebar 조절 시 위치에 맞는 값으로 변경(handleRangeUpdate)
    5. 동영상 진행 시간 정도 progressbar에 반영(handleProgress)
        - 현재 동영상 시간 / 동영상 전체 재생 시간 * 100
        - progressbar의 flexBasis 스타일에 반영
    6. progressbar 클릭 됐을 때(동영상 재생 시간 나타냄) 클릭된 위치로 동영상 재생 시간 이동(scrub)
        - 클릭한 X 위치 / progressbar의 너비 * 동영생 전체 재생 시간
    7. progressbar 클릭한 상태로 드래그 했을 때 마우스 눌러진 위치로 동영상 재생 시간 이동(scrub)

### 구현 방법

- javascript

```jsx
/* Get elements*/
	const video = viewer class;
	const progress = progress class;
	const progressBar = progress_filled class;
	const toggle = toggle class;
	const skipButtons = data-skip 인것들 모두 가져오기
	const ranges = player__slider class 모두 가져오기

/* Build out function*/
	function togglePlay(){//재생, 멈춤 handle
		const method = video.paused ? 'play' : 'pause';
		video[method]();
	}
	function updateButton(){//재생, 멈춤 시 toggle 버튼 handle
		const icon = this.paused ?'►' : '❚ ❚';
		toggle.textContent = icon;
	}
	function skip(){//skip한 시간 handle
		현재 dataset 에서 skip 값 받아와서 
		video의 현재시간에 더해줌. parseFloat로 실수값으로 치환
	}
	function handleRangeUpdate(){//소리, 속도 handle
		video[this.name] = this.value //this.name (volume or playbackRate) 속성을 현재 값으로 바꿔 줌
	}
	function handleProgress(){//동영상 진행 정도 prograssbar에 반영되도록 handle
		const percent = (video.currentTime / video.duration) * 100;
		progressBar.style.flexBasis = `${percent}$`;
	}
	function scrub(e){//progress bar에서 클릭하는 위치로 동영상 재생 시간 이동
		const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
		video.currentTime = scrubTime;
	}
/* Hook up the event listeners*/
	video에 play 이벤트리스너 추가. updateButton()//비디오 재생 시 토글 버튼 모양 변경
	video에 pause 이벤트 리스너 추가. updateButton()//비디오 멈춤 시 토글 버튼 모양 변경
	video에 timeupdate 이벤트 리스너 추가. handleProgress()	
	video에 click 이벤트리스너 추가. togglePlay()//비디오 화면 누를 때 재생/멈춤
	
	toggle에 click 이벤트리스너 추가. togglePlay()//재생버튼 누를 때 재생/멈춤
	
	skipButtons.forEach(button => button.addEventListener('click', skip));
	
	ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
	ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
	
	let mousedown = false;
	progress.addEventListener('click', scrub);//progressbar 클릭됐을 때
	//progressbar 클릭된 상태에서 progressbar 드래그 할 때
	progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
	progress.addEventListener('mousedown', () => mousedown = true);
	progress.addEventListener('mouseup', () => mousedown = false);
```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', function(e){
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');
    const fullButton = player.querySelector('.full__button');
    function togglePlay(){
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }

    function updateButton(){
        const icon = this.paused ? '►' : '❚ ❚';
        toggle.textContent = icon;
    }
    function skip(){
        video.currentTime += parseFloat(this.dataset.skip);
    }
    function handleRangeUpdate(){
        video[this.name] = this.value;
    }
    function handleProgress(){
        // console.log('progress');
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }
    function scrub(e){
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }
    function fullScreen(){
        if(video.requestFullScreen) video.requestFullScreen();
        else if(video.webkitRequestFullScreen) video.webkitRequestFullScreen();
        else if(video.mozRequestFullScreen) video.mozRequestFullScreen();
    }
    
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);
    ranges.forEach(range => range.addEventListener('click', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
    skipButtons.forEach(button => button.addEventListener('click', skip));
    fullButton.addEventListener('click', fullScreen);

    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e)=>mousedown && scrub(e));
    progress.addEventListener('mouseup', ()=> mousedown = false);
    progress.addEventListener('mouseout', ()=> mousedown = false);
    progress.addEventListener('mousedown', ()=> mousedown = true);
});
```

- 추가
    - progress에서 마우스 누른 상태로 요소 벗어났다가(mouse out) 다시 요소에 마우스 올리면(mouse over) mouseup 이벤트가 발생하지 않고 mousedown = true로 유지됨 → 누르지 않은 상태로도 동영상 마우스 위치한 곳으로 계속 이동

        ⇒ mouseout 되었을 때 이벤트핸들러 추가

    - 전체화면 모드 추가

# 사용된 개념

## css

### flex-basis

- 플렉스 아이템의 초기 크기를 지정
- box-sizing을 따로 지정하지 않는다면 콘텐츠 박스의 크기를 변경

[https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis](https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis)

## JavaScipt

### Full Screen mode

`Element.requestFullscreen()`

- 유저 에이전트가 지정한 요소(그리고 그 자손들까지)를 full-screen mode로 설정하고, 브라우저의 모든 UI 요소와 다른 모든 애플리케이션을 화면에서 제거하도록 요구합니다. full-screen mode가 활성화되면 Promise resolved를 반환합니다.

> [https://developer.mozilla.org/ko/docs/Web/API/Fullscreen_API](https://developer.mozilla.org/ko/docs/Web/API/Fullscreen_API)