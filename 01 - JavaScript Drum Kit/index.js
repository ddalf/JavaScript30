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