let currentIndex = 0;
    const totalimages = document.querySelectorAll('.slide').length;
    const slides = document.getElementById('slides');

function toggleimage() {
    currentIndex = (currentIndex + 1) % totalimages;
    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}