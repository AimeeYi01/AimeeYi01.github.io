document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ingredients-form');
    const messageDiv = document.getElementById('message'); // 用于显示消息

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // 阻止默认表单提交行为

        // 获取用户选择的ingredients
        const selectedIngredients = [];
        form.querySelectorAll('input[name="ingredient"]:checked').forEach(checkbox => {
            selectedIngredients.push(checkbox.value);
        });

        // 构建API URL
        let apiUrl;
        if (selectedIngredients.length > 0) {
            // 使用选定的标签查找鸡尾酒
            apiUrl = `https://www.thecocktaildb.com/api/json/v2/9972533/filter.php?i=${selectedIngredients.join(',')}`;
        } else {
            // 如果没有选择标签，随机生成一个鸡尾酒
            apiUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php';
        }

        try {
            // 从API获取数据
            const response = await fetch(apiUrl);
            const data = await response.json();

            // 如果用户没有选择标签，显示随机鸡尾酒
            if (selectedIngredients.length === 0) {
                // 从API返回的随机鸡尾酒
                const randomDrink = data.drinks[0];
                // 跳转到结果页面
                window.location.href = `result.html?id=${randomDrink.idDrink}`;
                return;
            }

            // 检查API返回的数据是否包含完全符合选择的鸡尾酒
            if (data.drinks && data.drinks.length > 0) {
                // 跳转到结果页面并显示完全匹配的鸡尾酒
                const selectedDrink = data.drinks[0];
                window.location.href = `result.html?id=${selectedDrink.idDrink}`;
            } else {
                // 没有完全匹配的鸡尾酒
                // 随机选择1-2个选定的标签
                const randomIndex = Math.floor(Math.random() * selectedIngredients.length);
                const chosenIngredients = selectedIngredients.slice(randomIndex, randomIndex + 1);

                // 使用随机选择的标签重新构建API请求
                const newApiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${chosenIngredients.join(',')}`;

                // 获取近似匹配的鸡尾酒
                const newResponse = await fetch(newApiUrl);
                const newData = await newResponse.json();

                if (newData.drinks && newData.drinks.length > 0) {
                    // 显示“也许你会喜欢这个”消息和匹配的鸡尾酒
                    messageDiv.innerHTML = '<p>Maybe you would like this cocktail:</p>';
                    // 选择一个随机饮品
                    const randomDrinkIndex = Math.floor(Math.random() * newData.drinks.length);
                    const drink = newData.drinks[randomDrinkIndex];
                    messageDiv.innerHTML += `
                        <h3>${drink.strDrink}</h3>
                        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                    `;
                } else {
                    // 没有任何匹配的鸡尾酒
                    messageDiv.innerHTML = '<p>Sorry, there is no cocktail matching the selected ingredients.</p>';
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            messageDiv.innerHTML = '<p>Error fetching data.</p>';
        }
    });
});
