const currentPage = window.location.pathname;

const menuLinks = document.querySelectorAll('.navbar-menu a');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });