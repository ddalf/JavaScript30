window.addEventListener('load', function(e){
    const pressed = [];
    const secretCode = 'secret';
    addEventListener('keyup', (e)=>{
        pressed.push(e.key);
        pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);
        if(pressed.join('').includes(secretCode)){
            cornify_add();
        }
    })
});