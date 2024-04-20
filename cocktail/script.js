const form = document.getElementById('ingredients-form');
const cocktailResult = document.getElementById('cocktail-result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();


    const selectedIngredients = [];
    const checkboxes = form.querySelectorAll('input[name="ingredient"]:checked');
    checkboxes.forEach(checkbox => {
        selectedIngredients.push(checkbox.value);
    });

    // Check if the number of selected ingredients is not more than 3
    if (selectedIngredients.length > 3) {
        cocktailResult.innerHTML = '<p>Please select up to 3 ingredients.</p>';
        return;
    }

    // Construct API URL with selected ingredients
    const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${selectedIngredients.join(',')}`;

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display data on the webpage
        if (data.drinks && data.drinks.length > 0) {
            // Choose a random drink from the data
            const drink = data.drinks[Math.floor(Math.random() * data.drinks.length)];

            // Fetch detailed information about the selected drink
            const drinkDetailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`);
            const drinkDetails = await drinkDetailsResponse.json();

            // Display detailed information
            const drinkInfo = drinkDetails.drinks[0];

            console.log('drinkInfo', drinkInfo);
            cocktailResult.innerHTML = `
                <h2>${drinkInfo.strDrink}</h2>
                <img src="${drinkInfo.strDrinkThumb}" alt="${drinkInfo.strDrink}">
                <p><strong>Instructions:</strong> ${drinkInfo.strInstructions}</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${Object.keys(drinkInfo)
                    .filter(key => key.startsWith('strIngredient'))
                    .map(key => {
                        const ingredient = drinkInfo[key];
                        const measureKey = key.replace('strIngredient', 'strMeasure');
                        const measure = drinkInfo[measureKey] || '';
                        return ingredient ? `<li>${ingredient} - ${measure}</li>` : '';
                    })
                    .join('')}
                </ul>
            `;
        } else {
            cocktailResult.innerHTML = '<p>No cocktails found for the selected ingredients.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        cocktailResult.innerHTML = '<p>Error fetching data.</p>';
    }
});