document.addEventListener('DOMContentLoaded', () => {
    const luz_emetrope = document.getElementById('luz-emetrope');
    const luz_miope = document.getElementById('luz-miope');
    const luz_hipermetrope = document.getElementById('luz-hipermetrope');
    const botonAnimar = document.getElementById('btnAnimar');
    const botonBorar = document.getElementById('btnBorrar');

    botonAnimar.addEventListener('click', () => {
        //Añadir la clase 'animada' para iniciar la animación
        luz_emetrope.classList.add('animada');
        luz_miope.classList.add('animada');
        luz_hipermetrope.classList.add('animada');
    });

    botonBorar.addEventListener('click', () => {
        luz_emetrope.classList.remove('animada');
        luz_miope.classList.remove('animada');
        luz_hipermetrope.classList.remove('animada');
    });
});
