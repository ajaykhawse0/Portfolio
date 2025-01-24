function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});
// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Check if click is outside nav and menu is open
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Close menu when window is resized above mobile breakpoint
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 400,             // Scroll speed in milliseconds
    speedAsDuration: true,  // Set speed as a fixed duration
    easing: 'easeInOutCubic' // Easing function
  });
