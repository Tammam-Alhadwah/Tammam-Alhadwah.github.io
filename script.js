document.addEventListener("DOMContentLoaded", () => {
    // Particle network config
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80 },
            "color": { "value": "#00ffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true, "distance": 150, "color": "#00ffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });

    // Navigation hover animation
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => { link.style.transform = "scale(4.1)"; });
        link.addEventListener("mouseout", () => { link.style.transform = "scale(1)"; });
    });
});
