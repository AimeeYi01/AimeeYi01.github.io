
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const rectangle = document.querySelector('.rectangle');
    const container = document.querySelector('.div'); 
    
    slider.addEventListener('input', () => {
      const value = slider.value;
      const max = slider.max;
      const containerWidth = container.clientWidth; 
      const rectangleWidth = rectangle.clientWidth;
      const maxPosition = containerWidth - rectangleWidth; 
      
      const newPosition = (maxPosition / max) * value; 
      
      rectangle.style.left = `${newPosition}px`; 
    });
  });

