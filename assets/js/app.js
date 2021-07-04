// These Are My Important Dependencies And Dom

const playButton = document.querySelector('.play-button');
const audioMusic = document.querySelector('audio');
const stopButton = document.querySelector('.stop-button');
const artist = document.querySelector('.artist');
const songName = document.querySelector('.song-name');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// scaffolding song array

const songs = [
    {
        name:'shayad',
        title:'Shayad',
        artist:'arijit singh'
    },
    {
        name:'tera_hone_laga_hoon',
        title:'tera hone laga hoon',
        artist:'atif aslam'
    },
    {
        name:'tere_liye',
        title:'Tere Liye',
        artist:'atif aslam'

    },
    {
        name:'tere_liye_lyrical',
        title:'Tere Liye',
        artist:'atif aslam'
    }
]

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

const loadSongs = (songs) => {
    songName.innerHTML = songs.title;
    artist.innerHTML = songs.artist;
    audioMusic.src = `img/${songs.name}+.mp3`
}

loadSongs(songs);