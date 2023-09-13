// script.js

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const progressBar = document.querySelector(".progress");

let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerText = "Play";
    } else {
        audio.play();
        playPauseBtn.innerText = "Pause";
    }
    isPlaying = !isPlaying;
}

playPauseBtn.addEventListener("click", togglePlayPause);

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressPercentage = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercentage}%`;
});

audio.addEventListener("ended", () => {
    playPauseBtn.innerText = "Play";
    isPlaying = false;
});

