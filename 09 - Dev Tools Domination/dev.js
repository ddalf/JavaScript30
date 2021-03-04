window.addEventListener('load', ()=>{
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');
    // Interpolated
    console.log('string : %s', '♡');
    // Styled
    console.log('%c great text', 'font-size:50px; background:red; text-shadow : 10px 10px');
    // warning!
    console.warn('nooo');
    // Error :|
    console.error('error!');
    // Info
    console.info('info');
    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'This is wrong!');
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();
    // Grouping together
    dogs.forEach(dog => {
        // console.group(`${dog.name}`);
        console.groupCollapsed(`${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} years old`);
        console.groupEnd(`${dog.name}`);
    })
    // counting
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt2');
    console.count('cnt1');
    console.count('cnt2');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });
    
    //table
    console.table(dogs);
});