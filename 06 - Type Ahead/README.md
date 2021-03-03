# Day 6 Type Ahead

Date: 2021/03/02
JavaScript: RegExp, debounce, fetch, filter, map, match
link: https://www.youtube.com/watch?v=y4gZMJKAeWs&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

1. 검색하는 문자열에 맞는 city나 state 나타냄

### **구현 방법**

- javascript

```jsx
const cities : 배열로 초기화

fetch(endpoint) : 1. blob에서 json 받아옴
									2. spread function 이용해서 각각의 data를 cities에 넣음. 

function findMatches(wordToMatch, cities)
	: cities에서 filter메소드 사용{
			: const regex = RegExp 객체 생성 
				return city와 match되는 정규식 or state와 match되는 정규식
		}

function displayMatches() {
	const matchArray = findMatches 호출. cities와 현재 값 비교
		const html = matchArray의 map 메소드 호출{
			const regex = RegExp 객체 생성. 현재 value, globally
			const cityName = 
		backtack이용
		return `
			<li>
				<span class = "name"> {도시, 주} </span> 
				<span class = "population"> {인구수</span>
			</li>
		`;
	}
}

const searchInput : search 타입 요소 가져옴
const suggestions : suggestions 타입 요소 가져옴

searchInput에 change 이벤트 리스너 추가
searchInput에 keyup 이벤트 리스너 추가
```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', function(){
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const cities = [];
    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data));

    console.log(cities);

    function findMatches(wordToMatch, cities){
        return cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'ig');// i:insensitive, g:global
            // console.log(place);
            return place.city.match(regex) || place.state.match(regex);
        });
    }

    function displayMatches(){
        console.log(this.value);
        const matchArray = findMatches(this.value, cities);
        console.log(matchArray);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'ig');
            const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <psan class="population">${numberWithCommas(place.population)}</span>
                </li>
            `
        })
        .join('');
        suggestions.innerHTML = html;
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
    searchInput.focus();
});
```

## 사용된 개념

### Array.prototype.join()

`arr.join([separator])`

- 배열의 모든 요소를 연결해 하나의 문자열로 만듬
- separator: 배열의 각 요소를 구분할 문자열을 지정
    - 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

### 정규식

```jsx
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
```

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)

![Day%206%20Type%20Ahead%2045fd1c40311b4c4fb25340364e8809e5/Untitled.png](Day%206%20Type%20Ahead%2045fd1c40311b4c4fb25340364e8809e5/Untitled.png)

> [http://www.regexper.com/](http://www.regexper.com/)

### 디바운싱

- 연이어 호출되는 함수들 중 **마지막 함수 or 맨 처음 함수만 호출**하도록 하는 것

**디바운싱 안된 코드**

```jsx
<input id="search" />
<script>
  document.querySelector("#search").addEventListener("input", (e) => {
    console.log("서버 ajax 검색 요청", e.target.value);
  });
</script>
```

- * 자바 검색 시 : ㅈ,자,잡,자바 4개의 ajax요청 들어 감
=> 쿼리 하나하나 비용 듬.

**디바운싱 코드**

```jsx
let timer;
document.querySelector("#search").addEventListener("input", (e) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("서버 ajax 검색 요청", e.target.value);
  }, 100);
});
```

- 입력 다 끝낸 후 요청 보냄.
- 타자 칠 때마다 타이머 설정

    ⇒ 100ms 동안 입력 없음 : 입력 끝난 것

    ⇒ 100ms 동안 입력 발생 : 타이머 새로 설정

쓰로틀링(throttling)

- 입력하는 동안 바로 이전에 요청한 작업 **주기적 실행**
- 무한 스크롤 디바운시으로 구현 → 스크롤이 멈추지 않으면 다음 타임라인 로드되지 않음 ~> 쓰로틀링으로 구현해야 함.

```jsx
let timer;
document.querySelector("#search").addEventListener("input", (e) => {
  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      console.log("서버 ajax 검색 요청", e.target.value);
    }, 100);
});
```

- 검색 요청을 100ms 마다 보냄

    → 타이머 설정되어 있음 : 아무 동작 X.

    → 타이머 없음 : 타이머 설정 함.

    타이머는 일정 시간 후에 스스로 해제, 검색 요청 보냄.

> [https://zinirun.github.io/2020/08/16/js-throttling-debouncing/](https://zinirun.github.io/2020/08/16/js-throttling-debouncing/)