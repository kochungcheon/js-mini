// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const video_play_btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloadImg = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloadImg.classList.add('hide-preloader');
})

video_play_btn.addEventListener('click', () => {
    console.log(video_play_btn.classList);
    if (!video_play_btn.classList.contains('slide')) {
      video_play_btn.classList.add('slide');
      video.pause();
    } else {
      video_play_btn.classList.remove('slide');
      video.play();
    }
  }
)