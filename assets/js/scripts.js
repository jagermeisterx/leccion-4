// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log("El sitio está listo y cargado.");

    // Ejemplo: Saludo en consola
    const brand = document.querySelector('.navbar-brand');
    brand.addEventListener('click', function() {
        alert('¡Hola! Gracias por visitar el proyecto.');
    });
});