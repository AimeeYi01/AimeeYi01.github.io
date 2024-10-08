// 保存已选择的贴纸
let selectedStickers = [];

// 选择贴纸的函数
document.querySelectorAll('.sticker').forEach(sticker => {
    sticker.addEventListener('click', () => {
        const stickerId = sticker.id;

        // 判断是否已经选择，如果选择了则取消选择
        if (selectedStickers.includes(stickerId)) {
            selectedStickers = selectedStickers.filter(id => id !== stickerId);
            sticker.classList.remove('selected');
        } else {
            selectedStickers.push(stickerId);
            sticker.classList.add('selected');
        }

        // 更新已选择贴纸数量
        document.getElementById('stickerCount').textContent = selectedStickers.length;

        // 保存到 localStorage
        localStorage.setItem('selectedStickers', JSON.stringify(selectedStickers));
    });
});

// 点击 "ready" 按钮跳转到排版页面
document.getElementById('readyBtn').addEventListener('click', () => {
    // 跳转到排列页面
    window.location.href = 'arrange.html'; // 你可以替换成实际的排版页面
});

