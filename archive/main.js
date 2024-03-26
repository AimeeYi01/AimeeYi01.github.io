document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("gridContainer");

    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            jsonData.forEach(item => {
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");

                const img = document.createElement("img");
                img.src = item.image;
                img.alt = item.name;

                const name = document.createElement("div");
                name.textContent = item.name;

                const location = document.createElement("div"); 
                location.textContent = item.location; 

                gridItem.appendChild(img);
                gridItem.appendChild(name);
                gridItem.appendChild(location); 

                gridContainer.appendChild(gridItem);
            });
        });
});
