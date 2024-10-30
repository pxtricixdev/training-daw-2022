window.onload = function(e) {
    console.log('documento cargado')

}

function onClick() {
    const enlaces = document.querySelectorAll('p')
    console.log(enlaces)

    for (let enlace of enlaces) {
        enlace.style.display = "none"
    }

}
