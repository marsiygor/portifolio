// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove navbar on scroll (mobile)
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

// ===== Accordion Logic =====
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        const icon = btn.querySelector('i');
        const isActive = btn.classList.contains('active');

        // Close all other panels (single-open behavior)
        accordionBtns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove('active');
                otherBtn.nextElementSibling.style.maxHeight = null;
                const otherIcon = otherBtn.querySelector('i');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });

        // Toggle clicked panel
        if (isActive) {
            btn.classList.remove('active');
            panel.style.maxHeight = null;
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            btn.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});