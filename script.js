const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.querySelector(".flex");
const toggle = document.querySelector(".toggle");
const volume = document.querySelector(".volume");
const playSpeed = document.querySelector(".playbackSpeed");
const skipButtons = document.querySelector("[data-skip]");

function togglePlay(){
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
}

function updateButton() {
	toggle.textContent = video.pause ? '►' : '❚ ❚';
}

function handleVolume() {
	video.volume = this.value;
}

function handleSpeed(){
	video.playRate = this.value;
}

function skip(){
	video.currentTime += Number(this.dataset.skip);
}


toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handleSpeed);
skipButtons.forEach(button =>{
	button.addEventListener('click', skip);
	});