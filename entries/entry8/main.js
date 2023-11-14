document.addEventListener('DOMContentLoaded', function () {
  const imageInfo = [
    { src: 'puzzle1.png', bgColor: '#684DA8' },
    { src: 'puzzle2.png', bgColor: '#0F8E99' },
    { src: 'puzzle3.png', bgColor: '#E66937' }
  ]

  let currentIndex = 0;

  function changeImage() {
    currentIndex = (currentIndex + 1) % imageInfo.length;
    const { src, bgColor } = imageInfo[currentIndex];
    document.body.style.backgroundColor = bgColor;
    document.getElementById('mainImage').src = src;
  }

  document.getElementById('mainImage').addEventListener('click', changeImage);
});