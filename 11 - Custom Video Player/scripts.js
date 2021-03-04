window.addEventListener('load', function(e){
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');
    const fullButton = player.querySelector('.full__button');
    function togglePlay(){
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }

    function updateButton(){
        const icon = this.paused ? '►' : '❚ ❚';
        toggle.textContent = icon;
    }
    function skip(){
        video.currentTime += parseFloat(this.dataset.skip);
    }
    function handleRangeUpdate(){
        video[this.name] = this.value;
    }
    function handleProgress(){
        // console.log('progress');
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }
    function scrub(e){
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }
    function fullScreen(){
        if(video.requestFullScreen) video.requestFullScreen();
        else if(video.webkitRequestFullScreen) video.webkitRequestFullScreen();
        else if(video.mozRequestFullScreen) video.mozRequestFullScreen();
    }
    
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);
    ranges.forEach(range => range.addEventListener('click', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
    skipButtons.forEach(button => button.addEventListener('click', skip));
    fullButton.addEventListener('click', fullScreen);

    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e)=>mousedown && scrub(e));
    progress.addEventListener('mouseup', ()=> mousedown = false);
    progress.addEventListener('mouseout', ()=> mousedown = false);
    progress.addEventListener('mousedown', ()=> mousedown = true);
});