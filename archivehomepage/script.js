document.getElementById("t1").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/2000s/";
  });
  
document.getElementById("t2").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/1990s/";
  });

document.getElementById("t3").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/1980s/";
  });

document.getElementById("t4").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/1970s/";
  });

document.getElementById("t5").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/1960s/";
  });



const aboutBtn = document.getElementById('aboutBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');


aboutBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});


closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
