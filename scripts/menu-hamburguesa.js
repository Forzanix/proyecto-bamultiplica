function mostrarMenu() {
    let menu = document.getElementsByTagName('header')[0];
    let icono = document.getElementById('icono-boton-menu-hamburguesa');
    let texto = document.getElementById('texto-boton-menu-hamburguesa');
    if (menu.className == '') {
        menu.className = 'menu-hamburguesa-visible';
        icono.textContent = 'close';
        texto.textContent = 'Cerrar';

    } else {
        menu.className = '';
        icono.textContent = 'menu';
        texto.textContent = 'Menú';
    }
}