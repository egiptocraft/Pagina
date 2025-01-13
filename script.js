// Seleccionar los elementos
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Alternar la clase para abrir/cerrar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuToggle.classList.toggle('active');
});
