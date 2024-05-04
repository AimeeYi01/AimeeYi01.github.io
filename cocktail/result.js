document.addEventListener('DOMContentLoaded', async () => {
    const cocktailResult = document.getElementById('cocktail-result');

    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const drinkId = urlParams.get('id');

    // 构建API URL
    const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drinkId}`;

    try {
        // 从API获取数据
        const response = await fetch(apiUrl);

        // 检查响应状态码
        if (!response.ok) {
            throw new Error(`API请求失败，状态码：${response.status}`);
        }

        // 解析响应为JSON
        const data = await response.json();

        // 检查API返回的数据是否包含符合条件的鸡尾酒
        if (data.drinks && data.drinks.length > 0) {
            // 显示鸡尾酒信息
            const drinkInfo = data.drinks[0];
            cocktailResult.innerHTML = `
                <h2>${drinkInfo.strDrink}</h2>
                <img src="${drinkInfo.strDrinkThumb}" alt="${drinkInfo.strDrink}">
                <p><strong>Instructions:</strong> ${drinkInfo.strInstructions}</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${Object.keys(drinkInfo)
                        .filter(key => key.startsWith('strIngredient') && drinkInfo[key])
                        .map(key => {
                            const ingredient = drinkInfo[key];
                            const measureKey = key.replace('strIngredient', 'strMeasure');
                            const measure = drinkInfo[measureKey] || '';
                            return `<li>${ingredient} - ${measure}</li>`;
                        }).join('')}
                </ul>
            `;
        } else {
            // 没有找到符合条件的鸡尾酒
            cocktailResult.innerHTML = '<p>Sorry, there is no cocktail matching the selected ingredients.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        cocktailResult.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    }
});
