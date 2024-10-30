let preguntaSi, preguntaNo, opciones, button, condiciones, privacidad;

window.onload = function() {

    preguntaSi = document.getElementById('pregunta_si');
    preguntaNo = document.getElementById('pregunta_no');
    opciones = document.getElementById('opciones');
    button = document.getElementById('submit');
    condiciones = document.getElementById('condiciones');
    privacidad = document.getElementById('privacidad');

    opciones.disabled = true;
    button.disabled = true;

    preguntaSi.onchange = changeValue;
    preguntaNo.onchange = changeValue;

    if (preguntaSi.checked) {
        opciones.disabled = false;
    } else {
        opciones.disabled = true;
    }

    condiciones.addEventListener('click', submit);
    privacidad.addEventListener('click', submit);
};

function changeValue() {
    opciones.disabled = !preguntaSi.checked;
}

function submit() {
    button.disabled = !(condiciones.checked && privacidad.checked);
}
