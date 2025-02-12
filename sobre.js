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

    // Calcula a altura do parágrafo
    const alturaParagrafo = paragrafo.offsetHeight;

    // Define a posição da linha2 com base na altura do parágrafo
    linha2.style.marginTop = `${alturaParagrafo + 15}px`; // Adiciona 10px de espaçamento
}

// Executa o ajuste ao carregar a página e ao redimensionar
window.addEventListener('load', ajustarLinha);
window.addEventListener('resize', ajustarLinha);
