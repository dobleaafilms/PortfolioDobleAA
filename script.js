// Animaciones al hacer scroll
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Configuración de fotos editadas
const slides = [
    {
        before: 'imagenes/antes.webp',
        after: 'imagenes/despues.webp'
    },
    {
        before: 'imagenes/antes2.webp',
        after: 'imagenes/despues2.webp'
    },
    {
        before: 'imagenes/antes3.webp',
        after: 'imagenes/despues3.webp'
    }
];

let currentSlide = 0;

// Referencias del DOM
const sliderContainer = document.querySelector('.comparison-slider');
const sliderRange = document.getElementById("sliderRange");
const afterImageDiv = document.querySelector(".after-image");
const sliderButton = document.querySelector(".slider-button");
const imgBefore = document.getElementById('imgBefore');
const imgAfter = document.getElementById('imgAfter');
const counter = document.getElementById('slide-counter');


// Lógica para la deformación de las fotos al deslizar para el antes y después
function fixImageWidth() {
    // Calculamos el ancho total del container
    const totalWidth = sliderContainer.offsetWidth;

    // Forzamos la imagen de depués a tener ese ancho fijo en píxeles
    imgAfter.style.width = totalWidth + 'px';
}

// Ejecutamos esto al cargar y cada vez que cambies el tamaño de la ventana
window.addEventListener('resize', fixImageWidth);
// También lo lanzamos ya mismo por si acaso
fixImageWidth();


// Lógica del slider
function moveSlider() {
    const sliderVal = sliderRange.value;
    // Mueve el corte de la caja donde esta las imágenes
    afterImageDiv.style.width = sliderVal + "%";
    // Mueve el botón
    sliderButton.style.left = sliderVal + "%";
}

sliderRange.addEventListener("input", moveSlider);
sliderRange.addEventListener("change", moveSlider);


// Cambiar entre fotos
function updateImages() {
    imgBefore.src = slides[currentSlide].before;
    imgAfter.src = slides[currentSlide].after;

    if (counter) counter.innerText = `${currentSlide + 1} / ${slides.length}`;

    // Reseteamos al centro
    sliderRange.value = 50;
    moveSlider();

    // Recalculamos el ancho por si acaso la imagen nueva tarda en cargar
    setTimeout(fixImageWidth, 100);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    updateImages();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    updateImages();
}

// Inicializar texto del contador
if (counter) { counter.innerText = `1 / ${slides.length}`; }