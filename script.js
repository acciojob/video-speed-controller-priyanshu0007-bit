const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + '%';
}

video.addEventListener('timeupdate', updateProgress);

const video = document.querySelector('.flex');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const skipButtons = document.querySelectorAll('[data-skip]');


// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


// Change button
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}


// Volume
function handleVolume() {
  video.volume = this.value;
}


// Playback speed
function handleSpeed() {
  video.playbackRate = this.value;
}


// Skip
function skip() {
  video.currentTime += Number(this.dataset.skip);
}


// Event listeners
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

volume.addEventListener('input', handleVolume);

playbackSpeed.addEventListener('input', handleSpeed);

skipButtons.forEach(button => {
  button.addEventListener('click', skip);
});