// 1 - Getting the elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const playButton = player.querySelector(".player__button.toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const sliders = player.querySelectorAll('input[type="range"]');

// 2 - Defining the functions
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}
function changePlayButton() {
  const icon = this.paused ? "►" : "⏸︎";
  playButton.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function sliderChange() {
  const type = this.name;
  const value = this.value;
  video[type] = value;
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(event) {
  const total = video.clientWidth;
  const progress = event.offsetX;
  const percentage = (progress / total) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
  video.currentTime = Math.round((video.duration * percentage) / 100);
}

// 3- eventListeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", changePlayButton);
video.addEventListener("pause", changePlayButton);
video.addEventListener("timeupdate", handleProgress);
playButton.addEventListener("click", togglePlay);

skipButtons.forEach((button) => button.addEventListener("click", skip));

sliders.forEach((slider) => {
  slider.addEventListener("change", sliderChange);
  slider.addEventListener("mousemove", sliderChange);
});

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
