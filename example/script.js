document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Render HTML elements
      //   const container = document.querySelector("main");

      data.forEach((item) => {
        // const element = document.createElement("div");
        // container.appendChild(element);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});

let container = document.querySelector("main");
let buttons = document.querySelector(".container-btn");

let allColors = [];

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((blocks) => {
      blocks.forEach((block, index) => {
        let element = document.createElement("div");
        element.innerText = block.name;
        element.classList.add(`block`);
        element.style.color = block.color;
        element.setAttribute('data-color', block.color)

        let img = document.createElement("img");
        img.src = `./assets/${block.asset}`;

        container.append(element);
        element.append(img);

        if (!allColors.includes(block.color)) {
          allColors.push(block.color);

          let btn = document.createElement("button");
          btn.innerText = block.color;
          btn.setAttribute('data-color', block.color)
          buttons.append(btn);
        }
      });
    });
});
