const songs = [
    {
        title: "Premikane",
        artist: "Artist 1",
        src: "premikane.mpeg",
        cover: "musicheadphone.jpg"
    },
    {
        title: "Dwapara",
        artist: "Artist 2",
        src: "Dwapara.mpeg",
        cover: "musicheadphone.jpg"
    },
    {
        title: "Coolio",
        artist: "Artist 3",
        src: "coolio.mpeg",
        cover: "musicheadphone.jpg"
    },
    {
        title: "Daddy Yanke",
        artist: "Artist 4",
        src: "daddy yanke.mpeg",
        cover: "musicheadphone.jpg"
    },
    {
        title: "Blue Eyes",
        artist: "Artist 5",
        src: "blue eyes.mpeg",
        cover: "musicheadphone.jpg"
    }
];

let currentSongIndex = 0;
let isPlaying = false;

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const audio = new Audio(songs[currentSongIndex].src);
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentTimeElement = document.getElementById("current-time");
const durationElement = document.getElementById("duration");
const progressBar = document.getElementById("progress-bar");

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    isPlaying = true;
    playButton.textContent = "⏸️";
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playButton.textContent = "▶️";
}

playButton.addEventListener("click", () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
});

prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
});

audio.addEventListener("timeupdate", () => {
    const { currentTime, duration } = audio;
    progressBar.value = (currentTime / duration) * 100;
    currentTimeElement.textContent = formatTime(currentTime);
    durationElement.textContent = formatTime(duration);
});

progressBar.addEventListener("input", () => {
    const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Load the first song on startup
loadSong(songs[currentSongIndex]);
