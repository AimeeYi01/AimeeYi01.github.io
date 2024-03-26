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

                const address = document.createElement("div");
                address.textContent = item.address;

                gridItem.appendChild(img);
                gridItem.appendChild(name);
                gridItem.appendChild(address);

                gridContainer.appendChild(gridItem);
            });
        });
});
