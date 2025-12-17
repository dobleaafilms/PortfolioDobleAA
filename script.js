// Iniciar animaciones de Scroll
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Lógica del Slider de Edición
const slider = document.getElementById("sliderRange");
const afterImage = document.querySelector(".after-image");
const sliderButton = document.querySelector(".slider-button");

// Función que mueve todo
function moveSlider() {
    const sliderVal = slider.value;
    // Ancho de la imagen superior
    afterImage.style.width = sliderVal + "%";
    // Posición del botón central
    sliderButton.style.left = sliderVal + "%";
}

// Escuchar movimiento (ratón o dedo)
slider.addEventListener("input", moveSlider);
slider.addEventListener("change", moveSlider);