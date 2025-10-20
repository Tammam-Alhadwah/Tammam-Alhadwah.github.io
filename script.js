/* particles.js config */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00bfa5" // Particle color
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00bfa5", // Line color
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4, // Movement speed
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Particles move away from cursor
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Click to add more particles
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});




document.addEventListener('DOMContentLoaded', () => {

    // --- SMOOTH SCROLL & ACTIVE NAV LINK HIGHLIGHTING ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });


    // --- FADE-IN ANIMATION ON SCROLL ---
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Start animation a bit before it's fully in view
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});