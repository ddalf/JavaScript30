window.addEventListener('load', function(e){
    const triggers = document.querySelectorAll('a');//a태그 요소 모두 가져옴
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);
    function highlightLink(){
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords);
        const coords = {
            width : linkCoords.width,
            height : linkCoords.height,
            x : linkCoords.x + window.scrollX,
            y : linkCoords.y + window.scrollY
        }
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
    }

    function removehighlight(){
        highlight.style.removeProperty('width');
        highlight.style.removeProperty('height');
        highlight.style.removeProperty('transform');
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', highlightLink)
        trigger.addEventListener('mouseleave', removehighlight);
    });
});