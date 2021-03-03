# Day 7 Array Cardio Day 2

Date: 2021/03/02
JavaScript: Date, every, find, findIndex, slice, some, splice, spread syntax
link: https://www.youtube.com/watch?v=y4gZMJKAeWs&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

### **구현 방법**

- javascript

```jsx
const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
		**// Some and Every Checks**
		// **Array.prototype.some()** // is at least one person 19 or older?
		const isAdult = people에서 some 메소드 사용. person 인수로 전달{
			const currentYear = Date객체 생성해서 현재 연도 구함
			if(currentYear - person의 year이 19가 넘는다면) {return true};
		}'
		console.log({isAdult});

    // Array.prototype.every() // is everyone 19 or older?
		const allAdults = people에서 every 메소드 사용. 나머지 구현은 isAdult와 같게.
		console.log({allAdults});

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
		const comment = comments에서 find function 이용. comment인수로{
			comment의 id가 823423과 같다면 return true
		}

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
		const index = comments에서 findIndex메소드 사용. comment인수로{
			comment의 id가 823423과 같다면 return true
		}
		console.log(index);
		//comments.splice(index, 1);
		const newComments = [
			slice 메소드 이용 begin~index까지, index 다음 부터 나머지 잘라서 넣음
		];
		
```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', () => {
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isAdult = people.some(person => new Date().getFullYear() - person.year >= 19);
  console.log({isAdult});

  // Array.prototype.every() // is everyone 19 or older?
  const allAdults = people.every(person => new Date().getFullYear() - person.year >= 19);
  console.log({allAdults})

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const comment = comments.find(comment => comment.id === 823423);
  console.log(comment);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const index = comments.findIndex(comment => comment.id === 823423);
  console.log(index);
  //comments.splice(index, 1); // index 위치 부터 1개 요소 삭제
  const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index+1)
  ];
  console.table(newComments);
});
```

## 사용된 개념

### Date.prototype.getFullYear()

`dateObj.getFullYear()`

- 주어진 날짜의 현지 시간 기준 연도를 반환

### Array.prototype.some()

`arr.some(callback[, thisArg])`

- 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### Array.prototype.every()

`arr.every(callback[, thisArg])`

- 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### Array.prototype.find()

`arr.find(callback[, thisArg])`

- 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환

```jsx
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
```

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

### Array.prototype.findindex()

`arr.findIndex(callback(element[, index[, array]])[, thisArg])`

- 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환
- 만족하는 요소가 없으면 -1을 반환

```jsx
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
```

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

### Array.prototype.splice()

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

- 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### Array.prototype.slice()

`arr.slice([begin[, end]])`

- 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환. 원본 배열은 바뀌지 X.

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### 전개구문(spread syntax) `...`

함수 호출 : `myFunction(...iterableObj);`

배열 리터럴, 문자열 : `[...iterableObj, '4', 'five', 6];`

객체 리터럴 : `let objClone = { ...obj };`

- 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킴