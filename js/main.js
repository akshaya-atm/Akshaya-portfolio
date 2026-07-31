document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarCollapse = document.getElementById('navbar-collapse');

    if (navbarToggle && navbarCollapse) {
        const closeMenu = () => {
            navbarToggle.classList.remove('active');
            navbarCollapse.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        };

        // Toggle mobile menu active state
        navbarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navbarCollapse.classList.toggle('active');
            navbarToggle.classList.toggle('active', isOpen);
            navbarToggle.setAttribute('aria-expanded', String(isOpen));
            document.body.classList.toggle('no-scroll', isOpen);
        });

        // Close menu when a navigation link is clicked
        const navLinks = document.querySelectorAll('.navbar_link, .dropdown_link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside of the navbar container
        document.addEventListener('click', (e) => {
            const isClickInsideNavbar = navbarCollapse.contains(e.target) || navbarToggle.contains(e.target);
            if (!isClickInsideNavbar && navbarCollapse.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // =========================================
    //         SCROLL TO TOP (HOME & LOGO)
    // =========================================
    const homeLinks = document.querySelectorAll('a[href="#home"]');
    const navbarLogo = document.querySelector('.navbar_logo');

    const scrollToTop = (e) => {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    homeLinks.forEach(link => link.addEventListener('click', scrollToTop));
    if (navbarLogo) navbarLogo.addEventListener('click', scrollToTop);

    // =========================================
    //         NAVBAR FILTER INTEGRATION
    // =========================================
    const dropdownLinks = document.querySelectorAll('.dropdown_link');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            const filter = link.getAttribute('data-filter');
            if (filter && typeof window.triggerProjectFilter === 'function') {
                window.triggerProjectFilter(filter);
            }
        });
    });
});
