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

particlesJS.load('particles-container', 'particlesjs-config.json');