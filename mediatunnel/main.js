document.addEventListener("DOMContentLoaded", function() {
    var ShowImageButton = document.getElementById("Show");
    var PNGImage = document.getElementById("PNG");
    var CloseButton = document.getElementById("Close");
    var DarkLayer = document.getElementById("Layer");

    ShowImageButton.addEventListener("click", function() {
        PNGImage.style.display = "block";
        Close.style.display = "block";
        DarkLayer.style.display = "block"; 
    });

    Close.addEventListener("click", function() {
        PNG.style.display = "none";
        Close.style.display = "none";
        DarkLayer.style.display = "none"; 
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth < 992) {
            ShowImageButton.style.display = "none";
        } else {
            ShowImageButton.style.display = "block";
        }
    });

    if (window.innerWidth >= 992) {
        ShowImageButton.style.display = "block";
    } else {
        ShowImageButton.style.display = "none";
    }
});
