window.addEventListener('load', function(e){
    /* Get elements*/
    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const clearItems = document.querySelector('[name="clearAll"]');
    const uncheckItems = document.querySelector('[name="uncheckAll"]');
    const checkItems = document.querySelector('[name="checkAll"]');
    
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



