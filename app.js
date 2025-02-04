// Smooth scrolling for navigation links


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Set initial active state based on current URL
    setActiveLink();

    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Set active link based on scroll position
    window.addEventListener('scroll', function() {
        setActiveLink();
    });

    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
});

// Form validation (not active right now)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.length < 2) {
        alert('Please enter a valid name');
        return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please enter a valid email address');
        return;
    }

    if (message.length < 10) {
        alert('Message must be at least 10 characters long');
        return;
    }

    alert('Thanks for your message! I\'ll get back to you soon.');
    this.reset();
});