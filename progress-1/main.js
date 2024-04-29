const ANIMATION_TIME = 2000;
const TRANSITION_DURATION = 300;
const TIMEOUT_DELAY = 300;
const INTERVAL_DIVIDER = 15;
const BTN_CLASS = '.btn';
const BTN_LOADING_CLASS = 'btn--loading';
const buttons = document.querySelectorAll(BTN_CLASS);

buttons.forEach((btn) => {
  const progress = btn.querySelector('.btn__progress-fill');
  const progressAttr = progress.getAttribute('data-fill');

  btn.addEventListener('click', (e) => {
    let btnSize = 0;

    btn.setAttribute('disabled', true);
    btn.classList.add(BTN_LOADING_CLASS);

    const intervalId = setInterval(() => {
      btnSize += 100 / INTERVAL_DIVIDER;

      if (btnSize > 100) btnSize = 100;
      
      progress.style[progressAttr] = `${btnSize}%`
    }, ANIMATION_TIME / INTERVAL_DIVIDER);

    setTimeout(() => {
      btn.removeAttribute('disabled');
      btn.classList.remove(BTN_LOADING_CLASS);
      clearInterval(intervalId);
      
      setTimeout(() => progress.style[progressAttr] ='0%', TIMEOUT_DELAY);
    }, ANIMATION_TIME + TRANSITION_DURATION);
  })
})