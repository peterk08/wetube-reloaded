const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlay = (e) => {
    // if the video is playing, pause it
    if(video.pause) {
        playBtn.innerText = "Pause";
        video.play();
    } else {
       
        video.pause();
    }
}

const handlePause = () => (playBtn.innerText = "Play");

const handleMute = (e) => {}

playBtn.addEventListener("click", handlePlay);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);