// Full Recipe Management Script

// Recipe Search Function
function searchRecipes() {
    const ingredients = document.getElementById('ingredients').value.trim();
    const resultsDiv = document.getElementById('results');

    // Full recipe data
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
        {
            name: "Chicken Quesadillas",
            ingredients: ["chicken", "cheese", "tortillas"],
            difficulty: "Easy",
            prepTime: "10 mins",
            instructions: "1. Cook chicken in a large skillet.\n2. Lay out your tortilla and stuff it with your cheese and chicken.\n3. Put your quesadilla on the stove and give it a nice crispy texture.\n4. Let it rest for 5-10 minutes then serve."
        },
        {
            name: "Brown Sugar Salmon",
            ingredients: ["salmon", "brown sugar", "mustard", "fish sauce", "lime juice", "olive oil"],
            difficulty: "Medium",
            prepTime: "25 mins",
            instructions: "1. In a small bowl, combine brown sugar, mustard, fish sauce, lime juice, and spice mix until combined and smooth. Reserve 2 tablespoons glaze for serving.\n2. Season salmon on all sides with salt and arrange on prepared tray.\n3. Broil salmon for 5 minutes. Remove tray from oven and pour remaining glaze over. Serve."
        },
        {
            name: "Chicken Fajitas",
            ingredients: ["chicken", "bell peppers", "onions", "avocado oil", "lime juice", "spices of your choice"],
            difficulty: "Easy",
            prepTime: "10-15 mins",
            instructions: "1. Preheat oven to 425° and grease a large rimmed baking sheet with cooking spray. In a small bowl, whisk together spices.\n2. In a large bowl, combine chicken, bell peppers, onions, avocado oil, and lime juice. Add spice mix and toss until completely coated.\n3. Bake until chicken is cooked through and no longer pink and vegetables are tender. Serve once done."
        },
        {
            name: "Chow Mein",
            ingredients: ["noodles", "soy sauce", "sesame oil", "oyster sauce", "rice vinegar", "sugar", "olive oil", "garlic", "ginger"],
            difficulty: "Medium",
            prepTime: "30 mins",
            instructions: "1. Fill a wok or large, high-sided skillet with water and bring to a boil. Once boiling, add noodles and cook just until loosened, about 2 minutes. Drain and set aside.\n2. In a small bowl, whisk soy sauce, sesame oil, rice vinegar, pepper, sugar, and oyster sauce.\n3. Heat wok over high (make sure it’s completely dry) and add oil. Add garlic and ginger and cook until just fragrant, about 1 minute.\n4. Add noodles and toss until completely combined. Then serve."
        },
        {
            name: "Meatballs",
            ingredients: ["eggs", "breadcrumbs", "milk", "italian seasoning", "salt", "pepper", "garlic powder", "ground beef"],
            difficulty: "Easy",
            prepTime: "15 mins",
            instructions: "1. Place a rack in center of oven; preheat to 400°. Grease a large baking sheet with cooking spray.\n2. In a large bowl, mix eggs, bread crumbs, milk, Italian seasoning, salt, pepper, garlic powder, and onion powder with a rubber spatula until a wet paste forms.\n3. Using clean hands, mix ground beef into egg mixture until thoroughly combined.\n4. Bake meatballs until browned and cooked through then serve."
        },
         {
            name: "Ranch Spinach Dip",
            ingredients: ["sour cream", "frozen spinach", "water chestnuts", "ranch seasoning"],
            difficulty: "Easy",
            prepTime: "15 mins",
            instructions: "1. In a large bowl, mix the sour cream together with the dips mix until well-blended.\n2. Fold in spinach and water chestnuts.\n3. Chill covered for 1 hour before serving.\n4. Serve with chips of your choice."
        },
         {
            name: "Chocolate Avocado Smoothie",
            ingredients: ["avocado", "banana", "chocolate milk"],
            difficulty: "Easy",
            prepTime: "3-5 mins",
            instructions: "1. Add avocado, banana, and chocolate milk to blender and blend until smooth.\n2. Pour into glass and enjoy!"
        },
         {
            name: "Teriyaki Chicken",
            ingredients: ["boneless chicken thighs", "soy sauce", "brown sugar"],
            difficulty: "Easy",
            prepTime: "10 mins",
            instructions: "1. Heat a large nonstick pan over medium-high heat. Add the chicken and sear until golden brown on both sides.\n2. Add the soy sauce and brown sugar and stir to combine, then bring to a boil. Cook until the sauce reduces and coats the chicken.\n3. Serve with rice and enjoy."
        },
        {
            name: "Creme Brulee",
            ingredients: ["vanilla ice cream", "1 egg yolk", "sugar"],
            difficulty: "Hard",
            prepTime: "At least 60 mins",
            instructions: "1. Preheat the oven to 325˚F.\n2. Scoop the ice cream in a microwave-safe bowl. Microwave the ice cream for 30-40 seconds, or until completely melted. Allow to cool for 5 minutes.\n3. Add the egg yolk to the melted ice cream and whisk well.\n4. Bake for 40-50 minutes. The crème brûlée should be set, but still a little jiggly in the middle. Remove the ramekin from the roasting pan, allow to cool to room temperature, cover with plastic wrap, and refrigerate for at least 2 hours, and up to 3 days.\n5. Sprinkle a tablespoon of sugar on top of each crème brûlée. Using a torch, melt the sugar to for a crispy top. If you don’t have a torch, you can broil the crème brûlée to melt the sugar. Keep an eye on it to make sure you don’t over cook it. Allow the crème brûlée to sit for at least 5 minutes before serving. Enjoy."
        },
        {
            name: "Cheesy Garlic Broccoli",
            ingredients: ["broccoli crowns", "shredded cheddar cheese", "garlic", "salt", "pepper"],
            difficulty: "Medium",
            prepTime: "20 mins",
            instructions: "1. Spread out broccoli in a medium rectangular casserole dish.\n2. Stir the garlic and cheddar cheese together in a separate bowl.\n3. Sprinkle the cheese evenly over broccoli and add salt and pepper to taste.\n4. Bake for 25 minutes then Enjoy."
        }
    ];

    // Split and sanitize ingredients
    const availableIngredients = ingredients
        .split(',')
        .map(item => item.trim().toLowerCase())
        .filter(Boolean); // Remove empty strings

    // Filter recipes based on ingredients
    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => availableIngredients.includes(ingredient.toLowerCase()))
    );

    // Display results
    resultsDiv.innerHTML = '';
    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            resultsDiv.innerHTML += `
                <div>
                    <h3>${recipe.name}</h3>
                    <p>Difficulty: ${recipe.difficulty}, Prep Time: ${recipe.prepTime}</p>
                    <p>Instructions:</p>
                    <p>${recipe.instructions.replace(/\n/g, '<br>')}</p>
                    <button onclick="saveRecipe('${recipe.name}')">Save Recipe</button>
                </div>
                <br>`;
        });
    } else {
        resultsDiv.innerHTML = '<p>No recipes found.</p>';
    }
}

// Save Recipes to localStorage
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

// Load Saved Recipes on the My Fridge Page
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
        savedRecipesDiv.innerHTML = '<p>No saved recipes yet.</p>';
    }
}

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Check user's preference from localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    // Apply dark mode if it was previously enabled
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const darkModeEnabled = document.body.classList.contains("dark-mode");

        // Save user preference in localStorage
        localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");

        // Update button icon
        darkModeToggle.textContent = darkModeEnabled ? "☀️" : "🌙";
    });

    // Logout Functionality
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", async () => {
            try {
                const { logout } = await import("./firebase.js");
                await logout();
                alert("You have been signed out successfully.");
                window.location.href = "login.html"; // Redirect after sign-out
            } catch (error) {
                alert("Error signing out: " + error.message);
            }
        });
    }
});
