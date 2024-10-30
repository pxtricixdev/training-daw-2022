window.onload = function() {
    console.log('documento cargado');

    const enlaces = document.querySelectorAll('a');

    for (let enlace of enlaces) {
        enlace.addEventListener('click', () => {
            const parrafo = enlace.previousElementSibling;

            if (parrafo.style.display === 'none') {
                parrafo.style.display = 'block';
            } else {
                parrafo.style.display = 'none';
            }
        });
    }
};
