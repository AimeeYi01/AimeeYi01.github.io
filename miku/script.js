    const aboutBtn = document.getElementById("aboutbtn");
    const modal = document.getElementById("aboutmodal");
    const closeBtn = document.querySelector(".close");

    aboutBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    window.addEventListener('load', () => {
        const img = document.querySelector('img');
        img.style.transform = 'translateX(0)';
    });


