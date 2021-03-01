# Day 4 - Array Cardio Day 1

## 프로그램 설명(구현해야 할 부분)

### **구현 방법**

- javascript

```jsx
// Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
		const fifteen = filter 메소드 
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
		const fullNames = map 메소드
		console.log(fullNames);
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
		const ordered = sort 메소드. 삼항연산자 이용.
		console.table(ordered);
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
		const totalYears = reduce 메소드. 인수 total, inventor. total 은 0으로 초기화.
    // 5. Sort the inventors by years lived
		const oldest = a,b를 인수로 받아서 a나이, b나이 계산. 삼항 연산자로 나이 비교해서 sort
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
		const category = mw-category의 요소 가져오기
		const links = category 내의 a태그 요소 모두 가져오기 -> Array로 바꿔야 함.
		querySelectorAll은 NodeList를 반환하고 map 메소드를 사용하지 못함
		즉, Array로 바꾸지 않으면 map 메소드를 이용할 수 없음.

		const de = links의 textContent에서 de가 포함된 것을 거름
			
    // 7. sort Exercise
    // Sort the people alphabetically by last name
		const alpha = people의 이름을 last, first로 split 해서 last로 정렬시킴

    // 8. Reduce Exercise
    // Sum up the instances of each of these
		const transportation = data의 reduce 메소드 사용. 인수 obj, item
		// obj가 뭔지 모름 -> reduce로 초기화 하지 못하므로 내부에서 초기하 해줌
```

### **스크립트 코드**

```jsx
// Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600) ? true : false);
    console.table(fifteen);
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
    console.table(ordered);
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    const totalYears = inventors.reduce((total, inventor)=> {return total + (inventor.passed-inventor.year)}, 0);
    console.log(totalYears);
    // 5. Sort the inventors by years lived
    const oldest = inventors.sort((a,b) => (a.passed-a.year) > (b.passed-b.year) ? -1 : 1);
    console.table(oldest);
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // const category = document.querySelector('.mw-category');
      // const links = Array.from(category.querySelectorAll('a'));
      // const de = links.map(link => link.textContent)
      //                 .filter(streetName => streetName.includes('de'));

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((a,b)=> {
      const [aLast, aFirst] = a.split(', ');
      const [bLast, bFirst] = b.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const transportation = data.reduce((obj, item)=>{
      if(!obj[item]){
        obj[item] = 0;
      }
      ++obj[item];
      return obj;
    }, {});
    console.log(transportation);
```

> [https://www.youtube.com/watch?v=HB1ZC7czKRs&feature=emb_imp_woyt](https://www.youtube.com/watch?v=HB1ZC7czKRs&feature=emb_imp_woyt)



## 사용된 개념

### Array.prototype.filter()

- 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

```jsx
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600) ? true : false);
```

### Array.prototype.map()

- 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

```jsx
 const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```

### Array.prototype.sort()

- 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환

```jsx
const oldest = inventors.sort((a,b) => (a.passed-a.year) > (b.passed-b.year) ? -1 : 1);
```

### Array.prototype.reduce()

- 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, **하나의 결과값을 반환**
- 매개변수
    - **`accumulator`**: 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 `initialValue`를 제공한 경우에는 `initialValue`의 값
    - **`currentValue` :** 처리할 현재 요소
    - **`currentIndex` : Optional.** 처리할 현재 요소의 인덱스. `initialValue`를 제공한 경우 0, 아니면 1부터 시작
    - **`array`: Optional.** `reduce()`를 호출한 배열.

```jsx
const totalYears = inventors.reduce((total, inventor) => {
																return total + (inventor.passed-inventor.year)}, 0);
const transportation = data.reduce((obj, item)=>{
      if(!obj[item]){
        obj[item] = 0;
      }
      ++obj[item];
      return obj;
    }, {});
```

### Node.textContent

- 노드가 [CDATA 구획](https://developer.mozilla.org/ko/docs/Web/API/CDATASection), 주석, [처리 명령](https://developer.mozilla.org/ko/docs/Web/API/ProcessingInstruction), [텍스트 노드](https://developer.mozilla.org/ko/docs/Web/API/Text)면 노드 내의 텍스트, 즉 `Node.nodeValue`를 반환
- 다른 노드 유형에 대해서는 주석과 처리 명령을 제외한 모든 자식 노드의 `textContent`를 병합한 결과를 반환(자식이 없는 경우 빈 문자열)

### Array.prototype.includes()

- 배열이 특정 요소를 포함하고 있는지 판별

### String.prototype.includes()

- 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)