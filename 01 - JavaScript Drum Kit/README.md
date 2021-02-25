# Day 1 Drum Kit

## 프로그램 설명(구현해야 할 부분)

입력된 키보드 값에 따라 동작(**a,s,d,f,g,h,j,k,l**)

1. 해당하는 키의 소리
2. 애니메이션 효과(커짐, border 색 바뀜)

### **구현 방법**

```jsx
//2. keydown 이벤트 핸들러 함수 선언
        //3. audio element가져오기. querySelector이용 => 쿼리 : audio의 data-key가 누른 키코드와 같을 때
        //4. 누르는 키의 data-type과 일치하는 element 가져오기

        //3-1. 입력한 키가 audio element의 data-key와 같지 않을 경우 : 예외처리
        //3-2. 이전 것 플레이 끝나지 않으면 play되고 있는 상태이므로 연속으로 누를 수 없음 -> 현재 audio의 time 다시 되돌려 줘야 함 
        //3-3. 같을 경우 : audio를 play 시킴.
        //4-1. classList의 메소드 이용해서 가져온 element의 playing 클래스 추가
				/*
            5.
            현재 클래스 값이 key 인 것의 transition 속성 0.07s
            -> setTimeOut으로 0.07s 지난 후 playing 클래스 제거 
            => 이렇게 할 수 있으나 css에서 transition 값이 바뀔 경우 자바스크립트 코드도 바꿔야 됨
        */
 //1. keydown 이벤트 발생 시 이벤트 리스너 선언 -> keydown 이벤트 핸들러 함수 호출

//6. transition 완료된 상태 헨들러 함수 선언
	    //7. transform 된 것 아니면 종료. prototype 사용.
	    //7. transform 된 것이면 playing 클래스 제거. 

//5. 모든 key 타입 element 가져오기
//5-1. forEach문, arrow function 이용해서 각 요소에 트랜지션 완료된 상태일 경우 이벤트 핸들러 호출하는 이벤트 리스너 등록

   
```

### **스크립트 코드**

```jsx
window.addEventListener('load', function(e){
    playSound = e => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
        if(!audio) return;
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    };
    window.addEventListener('keydown', playSound);

    removeTransition = e => {
        if(e.propertyName !== 'transform') return;
        console.log(this);
        e.target.classList.remove('playing');
    };
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {key.addEventListener('transitionend', removeTransition)});
})
```

- html과 js 파일 분리 ⇒ script 태그가 head에 있으므로 로딩된 후 실행하도록 load 이벤트 리스너 사용.



## 사용된 개념

### Backtick(`)

- 템플릿 리터럴
- 기능
    1. 줄바꿈 쉽게할 수 있음
    2. 문자열 내부에 표현식 포함

### QuerySelector

- selector의 구체적인 그룹과 일치하는 document의 첫번째 엘리먼트 반환.
- 일치하는 것 X → null 반환

```jsx
element = document.querySelector(selectors);
```

### ClassList

- 엘레먼트의 클래스 속성의 컬렉션인 활성 DOMTokenList 반환하는 읽기 전용 프로퍼티

    = 

```jsx
element.classList
```

- add : 클래스 추가
element.classList.add( ... )
- remove : 클래스 제거
element.classList.remove( ... )
- toggle : 클래스 존재하면 제거 / 없으면 추가
element.classList.toggle( ... )
- contain : 클래스 존재 확인
element.contain( ... )
- replace : 클래스 교체
element.replace( ... )

> [https://www.notion.so/Day-1-Drum-Kit-83e65b7e28ba4ad491dc4e9a641e0f25#708af6fad6e5435a8409d567d26504e3](https://www.notion.so/Day-1-Drum-Kit-83e65b7e28ba4ad491dc4e9a641e0f25#708af6fad6e5435a8409d567d26504e3)