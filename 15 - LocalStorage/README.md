# Day 15 LocalStorage, Contains emphasized items

**Date**: 2021/03/05

**JavaScript**: join, localStorage, map

**link**: https://www.youtube.com/watch?v=YL1F4dCUlLc&feature=emb_imp_woyt

## 프로그램 설명(구현해야 할 부분)

- 로컬스토리지 이용해서 to-do 리스트 만들기
    - 이전에 생성한 item, check에 대한 정보 로컬 스토리지에 저장해서 페이지 갱신해도 저장된 값이 나타나도록 한다.

### 구현 방법

- javascript

```jsx
const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){//submit에 대한 이벤트 처리 메소드
  console.log('Hello');
  e.preventDefault(); //stop the page from reloading
  const text = (this.querySelector('[name=item]')).value;//this 가 form element 가르키기 때문에
  const item = {
    text,
    done : false
  };
  console.log(item);
  items.push(item);//items에 추가된 item 저장
  populateList(items, itemsList);//화면에 뿌려준다.
  //localStorage.setItem('items', items); //localStorage에는 String만 저장할 수 있다.
  localStorage.setItem('items', JSON.stringify(items));//저장된 값 포함해서 local storage에 새로 저장
  this.reset();
}

//list of populate. resilient 하게 만듬. 어떤 array나 어떤 html element 넣어도 괜찮도록 만듬.
function populateList(plates = [], platesList){
  //plates = [] : 이렇게 하는 이유는 배열에 아무것도 들어오지 않을때 반복 발생하는 에러 방지
  //platesList : itemList 넣음. 
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e){
  console.log(e.target);
  if(!e.target.matches('input')) return;
  const el = e.target;
  console.log(el.dataset.index);
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
 }
  addItems.addEventListener('submit', addItem);
  //여기에 checkbox에 대한 event listener를 만들면 로딩 후에 만들어지는 item에 대해 event handler 추가되지 않음 
  // const checkBoxes = document.querySelectorAll('input');
  // checkBoxes.forEach(input => input.addEventListener('click', ()=>alert("check"));
  itemsList.addEventListener('click', toggleDone);
  populateList(items, itemsList);
```

### 구현 **코드**

- javascript

```jsx
window.addEventListener('load', function(e){
/* Get elements*/
    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const clearItems = document.querySelector('[name="clearAll"]');//추가
    const uncheckItems = document.querySelector('[name="uncheckAll"]');//추가
    const checkItems = document.querySelector('[name="checkAll"]');//추가
    
/* Build out function*/
    function addItem(e){
        e.preventDefault();
        const text = this.querySelector('[name=item]').value;
        const item = {
            text,
            done : false
        };
        items.push(item);
        // console.table(items);
        populateList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        this.reset();
    }

    function populateList(plates=[], platesList){
        platesList.innerHTML = plates.map((plate, i) => {
            return `
                <li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ''}/>
                    <label for="item${i}">${plate.text}</label>
                </li>
            `
        }).join('');
    }
    
    function toggleDone(e){
        if(!e.target.matches('input')) return;
        console.log(e.target);
        const el = e.target;
        const idx = el.dataset.index;
        items[idx].done = !items[idx].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }

    function clearItem(){
        items.length = 0;
        populateList(items, itemsList);
        localStorage.clear('items');
        console.log('clear');
    }

    function uncheckItem(){
        console.log('uncheck');
        items.forEach(item => item.done = false);
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }

    function checkItem(){
        items.forEach(item => item.done = true);
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }

/* Hook up the event listeners*/
    addItems.addEventListener('submit', addItem);
    itemsList.addEventListener('click', toggleDone);
    clearItems.addEventListener('click', clearItem);
    uncheckItems.addEventListener('click', uncheckItem);
    checkItems.addEventListener('click', checkItem);
    populateList(items, itemsList);
});
```

- 전체 아이템 삭제, 모든 아이템 체크, 모든 아이템 체크 해제 추가

# 사용된 개념

## JavaScipt

### localStorage

- In. 자바스크립트 로컬 스토리지 : 클라이언트의 로컬 컴퓨터에 어떠한 데이터 저장,삭제,조회할 수 있는 메소드 有.
    - 저장: `localStorage.setItem('<item명>', <저장할 item>)`
    - 데이터 조회: `localStorage.getItem('<item명>')`
    - 특정 카테고리 삭제: `localStorage.clear('<item명>')`
    - 로컬 스토리지 전체 삭제: `localStorage.clear()`