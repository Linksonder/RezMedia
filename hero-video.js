
const video = document.getElementById('hero-player');
const toggle = document.querySelector('.video-toggle');
const hero = document.querySelector('.video-hero');

function updateVideoState() {
  const playing = !video.paused && !video.ended;

  toggle.hidden = false;
  toggle.textContent = playing ? 'Ⅱ' : '▶';
  toggle.setAttribute(
    'aria-label',
    playing ? 'Pause background video' : 'Play background video'
  );
}

video.addEventListener('playing', () => {
  hero.classList.add('video-playing');
  updateVideoState();
});
video.addEventListener('pause', updateVideoState);
video.addEventListener('ended', updateVideoState);

video.addEventListener('error', () => {
  hero.classList.remove('video-playing');
  toggle.hidden = true;
});

toggle.addEventListener('click', () => {
  if (video.paused) {
    video.play().catch(updateVideoState);
  } else {
    video.pause();
  }
});

video.muted = true;
video.play().catch(updateVideoState);
updateVideoState();
