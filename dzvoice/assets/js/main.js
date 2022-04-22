document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => { customVideo(); }, 500)
  customTabs();
  consultAction();
})
function customVideo() {
  const btns = document.querySelectorAll('.custom-video__btn'),
    previews = document.querySelectorAll('.custom-video__preview');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      previews[i].remove();
      btn.remove();
      let video = document.createElement('iframe'),
        videoWraps = document.querySelectorAll('.custom-video');
      videoUrl = videoWraps[i].dataset.url;
      video.classList.add('custom-video__video');
      video.setAttribute('loading', 'lazy');
      video.setAttribute('src', videoUrl);
      console.log(videoWraps[i])
      console.log(video)
      videoWraps[i].insertAdjacentElement('beforeend', video);
    })
  })
}
function customTabs() {
  const btns = document.querySelectorAll('.benefit-list__btn'),
        text = document.querySelectorAll('.benefit-list__desc');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('benefit-list__btn--active')
      text[i].classList.toggle('benefit-list__desc--active')
    })
  })
}
function consultAction() {
  setTimeout(() => {
    let date = new Date(),
      endTime = date.getTime() + 1123200000;
    setInterval(() => {
      updateTime()
  
    }, 1000)
    function updateTime() {
      const daysHTML = document.querySelector('.consult-info__time-time--days'),
            hoursHTML = document.querySelector('.consult-info__time-time--hours'), 
            minHTML = document.querySelector('.consult-info__time-time--min'),
            secondsHTML = document.querySelector('.consult-info__time-time--sec');
      let result = endTime - new Date().getTime(),
        days =  Math.floor(result / (1000 * 60 * 60 * 24)),
        hours = Math.floor((result / (1000 * 60 * 60)) % 24),
        minutes = result > 0 ? Math.floor(result / 1000 / 60) % 60 : 0,
        seconds = result > 0 ? Math.floor(result / 1000) % 60 : 0;

        daysHTML.textContent = days;
        hoursHTML.textContent = hours;
        minHTML.textContent = minutes;
        secondsHTML.textContent = seconds;
    }
  }, 10)
}
