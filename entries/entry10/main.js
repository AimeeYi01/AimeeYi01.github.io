 let currentIndex = 0;
    const totalImages = document.querySelectorAll('.slide').length;
    const slideshow = document.getElementById('slideshow');

    function toggleImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        const translateValue = -currentIndex * 100 + '%';
        slideshow.style.transform = 'translateX(' + translateValue + ')';
    }