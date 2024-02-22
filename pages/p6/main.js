function toggleButton() {
    var button = document.querySelector('.button');
    var svgContainer = document.getElementById('svgContainer');

   
    if (button.innerHTML === 'OFF') {
        button.innerHTML = 'ON';
        
        var svgImage = document.createElement('img');
        svgImage.src = 'Rectangle27.svg'; 
        svgContainer.appendChild(svgImage);

    } else {
        button.innerHTML = 'OFF';
        
        while (svgContainer.firstChild) {
            svgContainer.removeChild(svgContainer.firstChild);
        }
    }
}
