const currentPage = window.location.pathname;

const menuLinks = document.querySelectorAll('.navbar-menu a');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
function adjustHorizontalLine() {
    const p1 = document.querySelector("p1");
    const horizontalLine2 = document.querySelector(".horizontal-line2"); 

    if (p1 && horizontalLine2) {
       
        const p1Rect = p1.getBoundingClientRect();

        horizontalLine2.style.top = `${p1Rect.bottom + 20}px`; 
    }
}

window.addEventListener("load", adjustHorizontalLine);
window.addEventListener("resize", adjustHorizontalLine);