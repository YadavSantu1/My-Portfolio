document.addEventListener('DOMContentLoaded', function() {
    /* Icon */
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    }

    /* Scroll */
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top + height) {
                navlinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            };
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };

    /* Typed.js */
    const typedElement = document.querySelector('.home-content h3 span');
    if (typedElement) {
        const typed = new Typed(typedElement, {
            strings: ['Frontend Developer', 'Web Designer', 'Analyst'],
            typeSpeed: 50, 
            loop: true, 
            backDelay: 2000, 
            backSpeed: 30, 
        });
    }
});