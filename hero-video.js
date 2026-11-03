// The player API mutes before requesting playback, including on mobile.
const frame = document.getElementById('hero-player');
const toggle = document.querySelector('.video-toggle');
const hero = document.querySelector('.video-hero');
const source = new URL(frame.src);
source.searchParams.set('origin', location.origin);
frame.src = source.href;
let player;
window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player('hero-player', {
    events: {
      onReady(event) {
        event.target.mute();
        event.target.playVideo();
        toggle.hidden = false;
      },
      onStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
          hero.classList.add('video-playing');
          toggle.textContent = 'Ⅱ';
          toggle.setAttribute('aria-label', 'Pause background video');
        } else if (event.data === YT.PlayerState.PAUSED) {
          toggle.textContent = '▶';
          toggle.setAttribute('aria-label', 'Play background video');
        } else if (event.data === YT.PlayerState.ENDED) {
          event.target.seekTo(0);
          event.target.playVideo();
        }
      },
      onAutoplayBlocked() {
        toggle.hidden = false;
        toggle.textContent = '▶';
        toggle.setAttribute('aria-label', 'Play background video');
      }
    }
  });
};
toggle.addEventListener('click', () => {
  if (!player) return;
  if (player.getPlayerState() === YT.PlayerState.PLAYING) player.pauseVideo();
  else { player.mute(); player.playVideo(); }
});
const api = document.createElement('script');
api.src = 'https://www.youtube.com/iframe_api';
document.head.append(api);
