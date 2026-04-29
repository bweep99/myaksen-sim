document.addEventListener("DOMContentLoaded", () => {
    // 1. Two-Way Scroll Reveal Animation
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Appears when scrolling into view
                entry.target.classList.add("show");
            } else {
                // Disappears when scrolling out of view
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.1, // Triggers when 10% of the element is visible
        rootMargin: "0px"
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 2. Highlight Active Nav Link
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
});