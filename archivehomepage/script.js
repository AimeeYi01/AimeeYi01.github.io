document.getElementById("t1").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/2000s/";
  });
  
document.getElementById("t2").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/2000s/";
  });

document.getElementById("t3").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/2000s/";
  });

document.getElementById("t4").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/2000s/";
  });

document.getElementById("t5").addEventListener("click", function() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/2000s/";
  });


// 获取按钮和弹窗元素
const aboutBtn = document.getElementById('aboutBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// 点击 About 按钮显示弹窗
aboutBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

// 点击关闭按钮隐藏弹窗
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// 点击弹窗外部隐藏弹窗（可选）
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
