const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const audio = new Audio();
audio.src = 'click.mp3';

openBtn.addEventListener('click', () => {
  nav.forEach((navEl) => navEl.classList.add('visible'));
});

closeBtn.addEventListener('click', () => {
  nav.forEach((navEl) => navEl.classList.remove('visible'));
});
