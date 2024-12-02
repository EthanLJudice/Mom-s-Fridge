function searchRecipes() {
    const ingredients = document.getElementById('ingredients').value;
    const resultsDiv = document.getElementById('results');

    // Simulated recipe data with images and instructions
    const recipes = [
        {
            name: "Pasta",
            image: "https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg",
            ingredients: ["pasta", "tomato sauce"],
            difficulty: "Easy",
            prepTime: "15 mins",
            instructions: "1. Boil water.\n2. Add pasta and cook for 10 minutes.\n3. Drain and add tomato sauce."
        },
        {
            name: "Omelette",
            image: "https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg",
            ingredients: ["eggs", "cheese"],
            difficulty: "Easy",
            prepTime: "10 mins",
            instructions: "1. Beat eggs.\n2. Pour into a hot pan.\n3. Add cheese and cook until set."
        },
        {
            name: "Chicken Curry",
            image: "https://www.cookingclassy.com/wp-content/uploads/2018/08/chicken-curry-11.jpg",
            ingredients: ["chicken", "curry powder"],
            difficulty: "Medium",
            prepTime: "30 mins",
            instructions: "1. Heat oil in a pan.\n2. Add chicken and cook until browned.\n3. Stir in curry powder and simmer."
        },
        {
            name: "Chicken Parmesan",
            image: "https://www.mamaknowsglutenfree.com/wp-content/uploads/2023/06/gluten-free-chicken-parmesan-rc-1-500x500.jpg",
            ingredients: ["pasta", "chicken", "olive oil", "marinara sauce", "cheese"],
            difficulty: "Medium",
            prepTime: "30 mins",
            instructions: "1. Heat a pan with olive oil and cook the chicken to your liking.\n2. Boil water.\n3. Add pasta and cook until al dente.\n4. Drain and add marinara sauce into a pan with your chicken."
        },
        {
            name: "Nachos",
            image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/D84243B1-DA24-4562-B7A2-C7EED5228175/Derivates/5BB08103-F7DE-4B9A-9098-4E21E2B662A4.jpgnachos.png",
            ingredients: ["ground beef", "cheese", "chips"],
            difficulty: "Easy",
            prepTime: "15 mins",
            instructions: "1. Cook ground beef in a large skillet.\n2. Lay out your chips on a baking pan.\n3. Put your cooked beef into the crevices of the chips and layer the top with cheese.\n4. Bake your nachos for 5-10 minutes then serve."
        },
        {
            name: "Chicken Quesadillas",
            image: "https://www.tosimplyinspire.com/wp-content/uploads/2022/12/Buffalo-Chicken-Quesadillas-15.jpg",
            ingredients: ["chicken", "cheese", "tortillas"],
            difficulty: "Easy",
            prepTime: "10 mins",
            instructions: "1. Cook chicken in a large skillet.\n2. Lay out your tortilla and stuff it with your cheese and chicken.\n3. Put your quesadilla on the stove and give it a nice crispy texture.\n4. Let it rest for 5-10 minutes then serve."
        },
        {
            name: "Brown Sugar Salmon",
            image: "https://thehungrybluebird.com/wp-content/uploads/2018/10/IMG_7994-1-500x500.jpg",
            ingredients: ["salmon", "brown sugar", "mustard", "fish sauce", "lime juice", "olive oil"],
            difficulty: "Medium",
            prepTime: "25 mins",
            instructions: "1. In a small bowl, combine brown sugar, mustard, fish sauce, lime juice, and spice mix until combined and smooth. Reserve 2 tablespoons glaze for serving.\n2. Season salmon on all sides with salt and arrange on prepared tray.\n3. Broil salmon for 5 minutes. Remove tray from oven and pour remaining glaze over. Serve."
        },
        {
            name: "Chicken Fajitas",
            image: "https://chocolatewithgrace.com/wp-content/uploads/2024/01/CWG-Chicken-Fajitas-5-1-of-1-scaled.jpg",
            ingredients: ["chicken", "bell peppers", "onions", "avocado oil", "lime juice", "spices of your choice"],
            difficulty: "Easy",
            prepTime: "10-15 mins",
            instructions: "1. Preheat oven to 425° and grease a large rimmed baking sheet with cooking spray. In a small bowl, whisk together spices.\n2. In a large bowl, combine chicken, bell peppers, onions, avocado oil, and lime juice. Add spice mix and toss until completely coated.\n3. Bake until chicken is cooked through and no longer pink and vegetables are tender. Serve once done."
        },
        {
            name: "Chow Mein",
            image: "https://www.cookwithmanali.com/wp-content/uploads/2024/01/Veg-Chowmein.jpgein.png",
            ingredients: ["noodles", "soy sauce", "sesame oil", "oyster sauce", "rice vinegar", "sugar", "olive oil", "garlic", "ginger"],
            difficulty: "Medium",
            prepTime: "30 mins",
            instructions: "1. Fill a wok or large, high-sided skillet with water and bring to a boil. Once boiling, add noodles and cook just until loosened, about 2 minutes. Drain and set aside.\n2. In a small bowl, whisk soy sauce, sesame oil, rice vinegar, pepper, sugar, and oyster sauce.\n3. Heat wok over high (make sure it’s completely dry) and add oil. Add garlic and ginger and cook until just fragrant, about 1 minute.\n4. Add noodles and toss until completely combined. Then serve."
        },
        {
            name: "Meatballs",
            image: "https://www.allrecipes.com/thmb/9KPN4HTkRbMvfF7CQ-cAM87JKv8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/40399-The-Best-Meatballs-ddmfs-4x3-080-858db61ac9d645b4880adf6417035ad0.jpgBalls.png",
            ingredients: ["eggs", "breadcrumbs", "milk", "italian seasoning", "salt", "pepper", "garlic powder", "ground beef"],
            difficulty: "Easy",
            prepTime: "15 mins",
            instructions: "1. Place a rack in center of oven; preheat to 400°. Grease a large baking sheet with cooking spray.\n2. In a large bowl, mix eggs, bread crumbs, milk, Italian seasoning, salt, pepper, garlic powder, and onion powder with a rubber spatula until a wet paste forms.\n3. Using clean hands, mix ground beef into egg mixture until thoroughly combined.\n4. Bake meatballs until browned and cooked through then serve."
        },
        {
            name: "Ranch Spinach Dip",
            image: "https://www.freshexpress.com/wp-content/uploads/2021/05/fe_spinach_ranch_dip_1.png.webpanchSpinachDip.png",
            ingredients: ["sour cream", "frozen spinach", "water chestnuts", "ranch"],
            difficulty: "Easy",
            prepTime: "15 mins",
            instructions: "1. In a large bowl, mix the sour cream together with the dips mix until well-blended.\n2. Fold in spinach and water chestnuts.\n3. Chill covered for 1 hour before serving.\n4. Serve with chips of your choice."
        },
        {
            name: "Chocolate Avocado Smoothie",
            image: "https://tastefulventure.com/wp-content/uploads/2023/04/Healthy-Chocolate-Avocado-Smoothie-4.jpg",
            ingredients: ["avocado", "banana", "chocolate milk"],
            difficulty: "Easy",
            prepTime: "3-5 mins",
            instructions: "1. Add avocado, banana, and chocolate milk to blender and blend until smooth.\n2. Pour into glass and enjoy!"
        },
        {
            name: "Teriyaki Chicken",
            image: "https://www.saltandlavender.com/wp-content/uploads/2024/05/teriyaki-chicken-recipe-6-500x500.jpg",
            ingredients: ["chicken", "soy sauce", "brown sugar"],
            difficulty: "Easy",
            prepTime: "10 mins",
            instructions: "1. Heat a large nonstick pan over medium-high heat. Add the chicken and sear until golden brown on both sides.\n2. Add the soy sauce and brown sugar and stir to combine, then bring to a boil. Cook until the sauce reduces and coats the chicken.\n3. Serve with rice and enjoy."
        },
        {
            name: "Creme Brulee",
            image: "https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png",
            ingredients: ["vanilla ice cream", "1 egg yolk", "sugar"],
            difficulty: "Hard",
            prepTime: "At least 60 mins",
            instructions: "1. Preheat the oven to 325˚F.\n2. Scoop the ice cream in a microwave-safe bowl. Microwave the ice cream for 30-40 seconds, or until completely melted. Allow to cool for 5 minutes.\n3. Add the egg yolk to the melted ice cream and whisk well.\n4. Bake for 40-50 minutes. The crème brûlée should be set, but still a little jiggly in the middle. Remove the ramekin from the roasting pan, allow to cool to room temperature, cover with plastic wrap, and refrigerate for at least 2 hours, and up to 3 days.\n5. Sprinkle a tablespoon of sugar on top of each crème brûlée. Using a torch, melt the sugar to form a crispy top. If you don’t have a torch, you can broil the crème brûlée to melt the sugar. Keep an eye on it to make sure you don’t overcook it. Allow the crème brûlée to sit for at least 5 minutes before serving. Enjoy."
        },
        {
            name: "Cheesy Garlic Broccoli",
            image: "https://dinnerthendessert.com/wp-content/uploads/2021/01/Cheesy-Garlic-Broccoli-Casserole-1x1-1.jpg",
            ingredients: ["broccoli crowns", "shredded cheddar cheese", "garlic", "salt", "pepper"],
            difficulty: "Medium",
            prepTime: "20 mins",
            instructions: "1. Spread out broccoli in a medium rectangular casserole dish.\n2. Stir the garlic and cheddar cheese together in a separate bowl.\n3. Sprinkle the mixture over broccoli.\n4. Bake for 15 minutes until broccoli is tender."
        },
        {
            name: "Salmon Salad",
            image: "https://dishingouthealth.com/wp-content/uploads/2020/06/SuperfoodSalmonSaladSquare.jpg",
            ingredients: ["salmon", "spinach", "cheese", "cucumber", "tomato", "avocado", "olive oil", "vinaigrette dressing"],
            difficulty: "Easy",
            prepTime: "15 mins",
            instructions: "1. Place spinach, avocado, cucumber, and tomato on a plate.\n2. Grill salmon and break into pieces.\n3. Add salmon on top and drizzle with dressing and enjoy!"
        },
        {
            name: "Cinnamon Rolls",
            image: "https://cambreabakes.com/wp-content/uploads/2024/03/best-cinnamon-rolls-featured.jpg",
            ingredients: ["flour", "milk", "butter", "sugar", "yeast", "cinnamon"],
            difficulty: "Hard",
            prepTime: "60-90 mins",
            instructions: "1. Warm milk until lukewarm.\n2. Stir in yeast and sugar until dissolved.\n3. Mix in flour and knead the dough for 5-7 minutes.\n4. Let the dough rise for about 30 minutes.\n5. Roll out dough and sprinkle with cinnamon-sugar mixture.\n6. Roll up the dough and slice into rolls.\n7. Bake at 350°F for 20-25 minutes until golden brown."
        },
        
        
        // Add more recipes as needed, following the same structure
    ];

    // Split and trim ingredients
    const availableIngredients = ingredients.split(',').map(item => item.trim());

    // Filter recipes
    const filteredRecipes = recipes.filter(recipe =>
        availableIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );

    // Display results
    resultsDiv.innerHTML = '';
    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeCard = `
                <div class="recipe-item">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <h3>${recipe.name}</h3>
                    <p>Difficulty: ${recipe.difficulty}</p>
                    <p>Prep Time: ${recipe.prepTime}</p>
                    <p>Instructions:<br>${recipe.instructions.replace(/\n/g, '<br>')}</p>
                    <button onclick="saveRecipe('${recipe.name}')">Save Recipe</button>
                </div>
            `;
            resultsDiv.innerHTML += recipeCard;
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
