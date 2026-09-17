const progress = document.querySelector('.progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / max) * 100}%`;
});

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '65px';
  nav.style.right = '0';
  nav.style.left = '0';
  nav.style.padding = '22px 7vw';
  nav.style.background = 'rgba(243,240,233,.98)';
  nav.style.flexDirection = 'column';
  nav.style.gap = '18px';
});
