window.addEventListener('load', function(e){
    const timeNodes = [...document.querySelectorAll('[data-time]')];
    // console.log(timeNodes);

    const seconds = timeNodes.map(timeNode => timeNode.dataset.time)
    .map(time => {
        const [minutes, seconds] = time.split(':').map(parseFloat);
        return minutes * 60 + seconds;
    })
    .reduce((total, eachSeconds) => total + eachSeconds);
    // .reduce((total, eachSeconds) => total + eachSeconds);

    let secondLeft = seconds;
    const hours = Math.floor(secondLeft / 3600);
    secondLeft = secondLeft % 3600;
    const minutes = Math.floor(secondLeft / 60);
    secondLeft = secondLeft % 60;

    console.log(hours, minutes, secondLeft);
});