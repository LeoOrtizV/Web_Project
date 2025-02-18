// Header Scroll Color Change

//Permite manipular el header desde JavaScript
let header = document.querySelector('header');

//Se agrega un event listener al objeto window
window.addEventListener('scroll',() => {
    //Quita o añade la clase shadow del elemento header si el usuario ha desplazado la página más de 0 píxeles
    header.classList.toggle('shadow', window.scrollY > 0 );
});

// Menú

//Selecciona el elemento con el ID menu-icon
let menu = document.querySelector('#menu-icon');
//Selecciona el elemento con la clase navbar
let navbar = document.querySelector('.navbar');

//Se asigna una  función al evento onclick del elemento "menu"
menu.onclick = () => {
    //Añade o quita la clase bx-x del ícono de menú.
    menu.classList.toggle('bx-x')
    //Esto podría ser para mostrar u ocultar el menú de navegación.
    navbar.classList.toggle('active')
}

// Remove Menu On Scroll

//Cada vez que el usuario desplaza la página, se ejecuta esta función
window.onscroll = () => {
    //Quita la clase bx-x del ícono de menú
    menu.classList.remove('bx-x')
    //Oculta la barra de navegación al desplazar
    navbar.classList.remove('active')
}