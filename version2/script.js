function searchRecipes() { 

    const ingredients = document.getElementById('ingredients').value; 

    const resultsDiv = document.getElementById('results'); 

 

    // Simulated recipe data 

    const recipes = [ 

        { name: "Pasta", ingredients: ["pasta", "tomato sauce"], difficulty: "Easy", prepTime: "15 mins" }, 

        { name: "Omelette", ingredients: ["eggs", "cheese"], difficulty: "Easy", prepTime: "10 mins" }, 

        { name: "Chicken Curry", ingredients: ["chicken", "curry powder"], difficulty: "Medium", prepTime: "30 mins" } 

    ]; 

 

    // Filter recipes based on ingredients 

    const availableIngredients = ingredients.split(',').map(item => item.trim()); 

    const filteredRecipes = recipes.filter(recipe =>  

        recipe.ingredients.every(ingredient => availableIngredients.includes(ingredient)) 

    ); 

 

    // Display results 

    resultsDiv.innerHTML = ''; 

    if (filteredRecipes.length > 0) { 

        filteredRecipes.forEach(recipe => { 

            resultsDiv.innerHTML += `<p>${recipe.name} - Difficulty: ${recipe.difficulty}, Prep Time: ${recipe.prepTime}</p>`; 

        }); 

    } else { 

        resultsDiv.innerHTML = '<p>No recipes found.</p>'; 

    } 

} 
