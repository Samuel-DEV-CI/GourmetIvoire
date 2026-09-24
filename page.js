const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// 1. Quand on clique sur le burger -> ouvre / ferme
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 2. NOUVEAU : Quand on clique sur un lien du menu -> ferme automatiquement
const links = document.querySelectorAll('#nav-links a');

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});