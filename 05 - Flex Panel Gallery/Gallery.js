window.addEventListener('load', function(e){
    console.log('start');
    const panels = document.querySelectorAll('.panel');
    function toggleOpen() {
        console.log(e.target.classList);
        this.classList.toggle('open');
    };
    const toggleActive = e => {
        console.log(e.propertyName);
        if(e.propertyName.includes('flex')){
            e.target.classList.toggle('open-active');
        }
    };
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
});