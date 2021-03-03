window.addEventListener('load', ()=>{
    console.log('load');
    const canvas = document.querySelector('#draw');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;
    
    function draw(e){
        if(!isDrawing) return;
        console.log("draw");
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if(hue >= 360) hue = 0;

        if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        }
        direction ? ctx.lineWidth++ : ctx.lineWidth--;
    }

    canvas.addEventListener('mousedown', (e)=>{
        if(e.which !== 1) return; // 1:좌클릭, 2:휠클릭, 3:우클릭. 마우스 좌클릭이 아니면 return
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    
    canvas.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 10;
        hue = 0;
        direction = true;
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
});