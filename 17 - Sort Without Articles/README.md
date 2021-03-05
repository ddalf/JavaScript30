# Day 17 Sort Without Articles

**Date**: 2021/03/05

**JavaScript**: RegExp, join, map, replace, sort, trim

**link**: https://www.youtube.com/watch?v=PEEo-2mRQ7A&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

- 문자열로 구성된 배열 정렬. 단, 문자열 맨 앞의 관사 제외하고 정렬해야 한다.

### 구현 **코드**

- JavaScript

```jsx
window.addEventListener('load', function(){
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    function strip(bandName){
        return bandName.replace(/^(a ||the ||an)/i, '').trim();//regex - ^:starts with, i:insensitive(full matched)
    }

    const sortedBands = bands.sort((a,b) => strip(a)>strip(b) ? 1 : -1);
    document.querySelector('#bands').innerHTML = 
        sortedBands
            .map(band => `<li>${band}</li>`)
            .join();
});
```

# 사용된 개념

## Css

## JavaScipt

### String.prototype.replace()

`var newStr = str.replace(regexp|substr, newSubstr|function)`

- `replace()` 메서드 : 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
    - 그 패턴은 문자열이나 정규식(`[RegExp](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)`)이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있다.

### String.prototype.trim()

`str.trim()`

- `trim()` 메서드 : 문자열 양 끝의 공백을 제거
    - 공백 = 모든 공백문자(space, tab, NBSP 등)와 모든 개행문자(LF, CR 등)를 의미

### RegExp

`var re = /ab+c/;`

`var re = new RegExp("ab+c");`

> [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)