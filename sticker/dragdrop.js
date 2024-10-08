// 从 localStorage 中获取选中的贴纸
let selectedStickers = JSON.parse(localStorage.getItem('selectedStickers')) || [];
const stickerContainer = document.getElementById('stickerContainer');

// 显示已选择的贴纸
selectedStickers.forEach(stickerId => {
    const img = document.createElement('img');
    img.src = `sticker/${stickerId}.PNG`; // 确保路径和格式正确
    img.className = 'sticker';
    img.draggable = true; // 允许拖动

    // 拖动事件处理
    img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', stickerId); // 保存贴纸ID
    });

    stickerContainer.appendChild(img);
});

// 切换背景图片的函数
function changeImage(index) {
    document.getElementById('currentImage').src = `sticker/bk${index}.jpg`; // 确保路径和格式正确
}

// 图片区域的拖放事件
const imageContainer = document.querySelector('.image-container');
imageContainer.addEventListener('dragover', (event) => {
    event.preventDefault(); // 允许放置
});

imageContainer.addEventListener('drop', (event) => {
    event.preventDefault();
    const stickerId = event.dataTransfer.getData('text/plain'); // 获取拖动的贴纸ID
    const img = document.createElement('img');
    img.src = `sticker/${stickerId}.PNG`; // 确保路径和格式正确
    img.className = 'sticker'; // 添加类名以便于样式处理

    // 设置放置贴纸的位置
    const offsetX = event.offsetX - img.width / 2;
    const offsetY = event.offsetY - img.height / 2;

    img.style.position = 'absolute';
    img.style.left = `${offsetX}px`;
    img.style.top = `${offsetY}px`;

    imageContainer.appendChild(img);
});
