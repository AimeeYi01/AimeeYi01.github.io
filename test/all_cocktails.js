// 获取指定首字母的饮品列表
async function fetchCocktailsByLetter(letter) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await response.json();
    return data.drinks;
}

// 循环获取所有字母的饮品列表
async function fetchAllCocktails() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const allCocktails = [];

    for (const letter of alphabet) {
        const cocktails = await fetchCocktailsByLetter(letter);
        if (cocktails) {
            allCocktails.push(...cocktails);
        }
    }

    return allCocktails;
}

// 在页面加载时显示筛选后的鸡尾酒
async function displayFilteredCocktails() {
    const cocktailsContainer = document.getElementById('cocktails-container');
    const allCocktails = await fetchAllCocktails();
    const availableIngredients = [
        'Vodka',
        'Gin',
        'Rum',
        'Tequila',
        'Whiskey',
        'Brandy',
        'Bourbon',
        'Champagne',
        'Lemon juice',
        'Lime juice',
        'orange juice',
        'pineapple juice',
        'sugar',
        'salt',
        'bitters',
        'sugar syrup',
        'cream',
        'sprite',
        'carbonated water',
        'egg white'
    ];

    // 过滤符合条件的鸡尾酒
    const filteredCocktails = allCocktails.filter(cocktail => {
        // 判断饮品是否包含用户可选的任何成分
        return Object.keys(cocktail).some(key => {
            if (key.startsWith('strIngredient') && cocktail[key]) {
                return availableIngredients.includes(cocktail[key]);
            }
            return false;
        });
    });

    // 清空容器
    cocktailsContainer.innerHTML = '';

    // 显示筛选后的鸡尾酒
    filteredCocktails.forEach(cocktail => {
        const cocktailDiv = document.createElement('div');
        cocktailDiv.innerHTML = `
            <h2>${cocktail.strDrink}</h2>
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <p>Instructions: ${cocktail.strInstructions}</p>
            <p>Ingredients:</p>
            <ul>
                ${Object.keys(cocktail)
                .filter(key => key.startsWith('strIngredient'))
                .map(key => {
                    const ingredient = cocktail[key];
                    const measureKey = key.replace('strIngredient', 'strMeasure');
                    const measure = cocktail[measureKey] || '';
                    return ingredient ? `<li>${ingredient} - ${measure}</li>` : '';
                })
                .join('')}
            </ul>
        `;
        cocktailsContainer.appendChild(cocktailDiv);
    });
}

// 在页面加载时调用显示筛选后的鸡尾酒函数
window.addEventListener('DOMContentLoaded', displayFilteredCocktails);
