document.addEventListener('DOMContentLoaded', () => {
    const luz = document.getElementById('luz');
    const botonAnimar = document.getElementById('btnAnimar');
    const botonBorar = document.getElementById('btnBorrar');

    botonAnimar.addEventListener('click', () => {
        //Añadir la clase 'animada' para iniciar la animación
        luz.classList.add('animada');
    });

    botonBorar.addEventListener('click', () => {
        luz.classList.remove('animada');
    });
});
