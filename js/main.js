



var audio = document.getElementById("js-audio");

function enableMute() {
    audio.muted = true;
}

function disableMute() {
    audio.muted = false;
}




var speakerMute = document.getElementById('js-speaker_mute');
speakerMute.addEventListener('click', enableMute)

var speakerUnmute = document.getElementById('js-speaker_unmute');
speakerUnmute.addEventListener('click', disableMute)
