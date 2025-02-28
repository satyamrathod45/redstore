

const menuToggle = document.querySelector('.menu');
const navLinks = document.querySelector('.navlist-menu');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});