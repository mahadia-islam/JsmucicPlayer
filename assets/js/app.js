// These Are My Important Dependencies And Dom

const playButton = document.querySelector('.play-button');
const audioMusic = document.querySelector('audio');
const stopButton = document.querySelector('.stop-button');

// Now Handling Event Listener

playButton.addEventListener('click',() => {
    audioMusic.play();
    stopButton.classList.add('show');
    stopButton.classList.remove('hide');
    playButton.classList.add('hide');
    playButton.classList.remove('show');
});

stopButton.addEventListener('click',() => {
    audioMusic.pause();
    stopButton.classList.remove('show');
    stopButton.classList.add('hide');
    playButton.classList.remove('hide');
    playButton.classList.add('show');
});


// changing music data