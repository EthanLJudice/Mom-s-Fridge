function searchRecipes() { 
    const ingredients = document.getElementById('ingredients').value; 
    const resultsDiv = document.getElementById('results'); 

    // Simulated recipe data with instructions
    const recipes = [ 
        { 
            name: "Pasta", 
            ingredients: ["pasta", "tomato sauce"], 
            difficulty: "Easy", 
            prepTime: "15 mins",
            instructions: "1. Boil water.\n2. Add pasta and cook for 10 minutes.\n3. Drain and add tomato sauce."
        }, 
        { 
            name: "Omelette", 
            ingredients: ["eggs", "cheese"], 
            difficulty: "Easy", 
            prepTime: "10 mins",
            instructions: "1. Beat eggs.\n2. Pour into a hot pan.\n3. Add cheese and cook until set."
        }, 
        { 
            name: "Chicken Curry", 
            ingredients: ["chicken", "curry powder"], 
            difficulty: "Medium", 
            prepTime: "30 mins",
            instructions: "1. Heat oil in a pan.\n2. Add chicken and cook until browned.\n3. Stir in curry powder and simmer."
        },
        { 
            name: "Chicken Parmesan", 
            ingredients: ["pasta", "chicken", "olive oil", "marinara sauce", "cheese"], 
            difficulty: "Medium", 
            prepTime: "30 mins",
            instructions: "1. Heat a pan with olive oil and cook the chicken to your liking.\n2. Boil water.\n3. Add pasta and cook until al dente.\n4. Drain and add marinara sauce into a pan with your chicken."
        }, 
        { 
            name: "Nachos", 
            ingredients: ["ground beef", "cheese", "chips"], 
            difficulty: "Easy", 
            prepTime: "15 mins",
            instructions: "1. Cook ground beef in a large skillet.\n2. Lay out your chips on a baking pan.\n3. Put your cooked beef into the crevices of the chips and layer the top with cheese.\n4. Bake your nachos for 5-10 minutes then serve."
        }, 
        
    ]; 

    // Split and trim ingredients
    const availableIngredients = ingredients.split(',').map(item => item.trim()); 

    // Filter recipes based on ingredients
    const filteredRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ingredient => availableIngredients.includes(ingredient))
    ); 

    // Display results 
    resultsDiv.innerHTML = ''; 
    if (filteredRecipes.length > 0) { 
        filteredRecipes.forEach(recipe => { 
            resultsDiv.innerHTML += `${recipe.name} - Difficulty: ${recipe.difficulty}, Prep Time: ${recipe.prepTime}<br>Instructions:<br>${recipe.instructions.replace(/\n/g, '<br>')}<br><button onclick="saveRecipe('${recipe.name}')">Save Recipe</button><br><br>`; 
        }); 
    } else { 
        resultsDiv.innerHTML = 'No recipes found.'; 
    } 
}

// Save recipes to localStorage
function saveRecipe(recipeName) {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    if (!savedRecipes.includes(recipeName)) {
        savedRecipes.push(recipeName);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        alert(`${recipeName} has been saved to your fridge!`);
    } else {
        alert(`${recipeName} is already saved.`);
    }
}

// Load saved recipes on the My Fridge page
function loadSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const savedRecipesDiv = document.getElementById('savedRecipes');
    savedRecipesDiv.innerHTML = '';

    if (savedRecipes.length > 0) {
        savedRecipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.innerHTML = `<p>${recipe}</p>`;
            savedRecipesDiv.appendChild(recipeDiv);
        });
    } else {
        savedRecipesDiv.innerHTML = 'No saved recipes yet.';
    }
}


