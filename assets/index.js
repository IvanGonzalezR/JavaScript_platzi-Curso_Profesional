import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const playPausebutton = document.querySelector("#PlayPauseButton");
const muteUnmuteButton = document.querySelector("#MuteUnmuteButton");

const player = new MediaPlayer( { 
   el: video, 
   plugins: [
      new AutoPlay(), new AutoPause()
] } );

playPausebutton.onclick = () => player.togglePlay();
muteUnmuteButton.onclick = () => player.toggleMute();

