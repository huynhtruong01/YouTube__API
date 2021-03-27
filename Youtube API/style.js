const menuBtn = document.querySelector('.menu i');
const contentLeft = document.querySelector('.content__left');
const contentRight = document.querySelector('.content__right');

menuBtn.addEventListener('click', () => {
  contentLeft.classList.toggle('active');
  contentRight.classList.toggle('active');
})