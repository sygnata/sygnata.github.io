// NavBar
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

  mainNav.classList.toggle('active');
});

// Scroll Reveal
ScrollReveal({
  duration: 1000
})

ScrollReveal().reveal('.headline')
ScrollReveal().reveal('.tagline', {
  delay: 500
})
ScrollReveal().reveal('.punchline', {
  delay: 2000
})