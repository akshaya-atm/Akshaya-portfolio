document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarCollapse = document.getElementById('navbar-collapse');

    if (navbarToggle && navbarCollapse) {
        // Toggle mobile menu active state
        navbarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navbarToggle.classList.toggle('active');
            navbarCollapse.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when a navigation link is clicked
        const navLinks = document.querySelectorAll('.navbar_link, .dropdown_link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarToggle.classList.remove('active');
                navbarCollapse.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        // Close menu when clicking outside of the navbar container
        document.addEventListener('click', (e) => {
            const isClickInsideNavbar = navbarCollapse.contains(e.target) || navbarToggle.contains(e.target);
            if (!isClickInsideNavbar && navbarCollapse.classList.contains('active')) {
                navbarToggle.classList.remove('active');
                navbarCollapse.classList.remove('active');
                document.body.classList.remove('no-scroll');
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
