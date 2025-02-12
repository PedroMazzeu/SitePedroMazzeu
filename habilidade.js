const currentPage = window.location.pathname;

const menuLinks = document.querySelectorAll('.navbar-menu a');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
    }
});
function ajustarLinha() {
    const paragrafo = document.querySelector('p');
    const linha2 = document.querySelector('.horizontal-line2');

    const alturaParagrafo = paragrafo.offsetHeight;
    
    linha2.style.marginTop = `${alturaParagrafo + 15}px`; 
}

window.addEventListener('load', ajustarLinha);
window.addEventListener('resize', ajustarLinha);