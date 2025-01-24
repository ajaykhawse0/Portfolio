// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// }

// // Close menu when clicking outside
// document.addEventListener('click', function(event) {
//     const nav = document.querySelector('nav');
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');
    
//     // Check if click is outside nav and menu is open
//     if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
//         navLinks.classList.remove('active');
//     }
// });

// // Close menu when window is resized above mobile breakpoint
// window.addEventListener('resize', function() {
//     const navLinks = document.querySelector('.nav-links');
//     if (window.innerWidth > 768) {
//         navLinks.classList.remove('active');
//     }
// });

// const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 400,             // Scroll speed in milliseconds
//     speedAsDuration: true,  // Set speed as a fixed duration
//     easing: 'easeInOutCubic' // Easing function
//   });
// document.addEventListener('DOMContentLoaded', function() {
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     const navLinks = document.querySelector('.nav-links');
//     const nav = document.querySelector('nav');

//     hamburgerMenu.addEventListener('click', function() {
//         navLinks.classList.toggle('active');
//         nav.classList.toggle('mobile-menu');
//         hamburgerMenu.classList.toggle('open');
//     });

//     // Close menu when clicking outside
//     document.addEventListener('click', function(event) {
//         if (!nav.contains(event.target)) {
//             navLinks.classList.remove('active');
//             nav.classList.remove('mobile-menu');
//             hamburgerMenu.classList.remove('open');
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        nav.classList.toggle('mobile-menu');
        hamburgerMenu.classList.toggle('open');
    }

    // Hamburger menu click event
    hamburgerMenu.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            nav.classList.remove('mobile-menu');
            hamburgerMenu.classList.remove('open');
        }
    });

    // Prevent menu toggle from closing when clicking hamburger
    hamburgerMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            nav.classList.remove('mobile-menu');
            hamburgerMenu.classList.remove('open');
        }
    });

    // Smooth scrolling
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 400,
        speedAsDuration: true,
        easing: 'easeInOutCubic'
    });

    // Typing effect for page load
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typing effect to specific elements if they exist
    const typingElements = [
        { selector: '.typing-text', delay: 0 },
        { selector: '.typing-text-delay-1', delay: 3000 },
        { selector: '.typing-text-delay-2', delay: 6000 }
    ];

    typingElements.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            const originalText = element.textContent;
            element.textContent = '';
            setTimeout(() => {
                typeWriter(element, originalText);
            }, item.delay);
        }
    });
});
