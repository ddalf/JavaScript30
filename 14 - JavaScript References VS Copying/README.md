# Day 14 References VS Copying

Date: 2021/03/05

JavaScript: Array Copy, Array.from, Object Copy, Value Copy, assign, concat, slice

link: https://www.youtube.com/watch?v=YnfwDQ5XYF4&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

### 구현 **코드**

- javascript

```jsx
// start with strings, numbers and booleans
    // let age = 100;
    // let age2 = age;
    // console.log(age, age2);
    // age = 200;
    // console.log(age, age2);

    // let name = 'Wes';
    // let name2 = name;
    // console.log(name, name2);
    // name = 'wesley';
    // console.log(name, name2);

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    console.log(players, team);
    // You might think we can just do something like this:
    // team[3] = 'Lux';

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();

    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'heeee hawww';
    console.log(team4);

    const team5 = Array.from(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    // const captain = person;
    // captain.number = 99;

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    console.log(cap2);

    // We will hopefully soon see the object ...spread
    // const cap3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };

    console.clear();
    console.log(wes);

    const dev = Object.assign({}, wes);

    const dev2 = JSON.parse(JSON.stringify(wes));
```

# 사용된 개념

## JavaScipt

### 값 복사(number, string)

- `=` 사용해서 복사

```jsx
let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100
age = 200;
console.log(age, age2); // 200, 100
```

### 배열 복사

- `=` 사용해서 복사 ⇒ 복사 아닌 참조

```jsx
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];const
```

```jsx
const team1 = players.slice();
const team2 = [].concat(players);
const team3 = [...players];
const team4 = Array.from(players);
```

- slice(), concat()은 대상 배열을 가지고 새로운 배열 반환

### 객체 복사

- `=` 사용해서 복사 ⇒ 복사 아닌 참조

```jsx
const person = {
	name : 'pp'
	age : 80
}

const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };
```

**One Level Copy - Object.assign()**

- 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용

```jsx
const cap1 = Object.assign({}, person, {number : 99});
```

**One Level 이상 Copy - JSON.parse(JSON.stringfy())**

```jsx
const dev = Object.assign({}, wes);
dev.social.twitter = '@change';
console.log(wes.social.twitter); //wes.social.twitter값 바뀌어 있다.

const dev2 = JSON.parse(JSON.stringfy(wes));
```

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)