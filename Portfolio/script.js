const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Toggle the navigation menu
burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close the menu when clicking outside
window.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after click
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
    });
});

// Highlight Active Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });

    // Add scroll effect to navbar
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

