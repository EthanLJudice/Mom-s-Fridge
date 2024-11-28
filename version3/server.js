const express = require('express'); 

const bodyParser = require('body-parser'); 

const cors = require('cors'); 

 

const app = express(); 

const PORT = process.env.PORT || 3000; 

 

// Middleware 

app.use(cors()); 

app.use(bodyParser.json()); 

 

// Sample recipe data 

const recipes = [ 

    { id: 1, name: "Pasta", ingredients: ["pasta", "tomato sauce"], difficulty: "Easy", prepTime: "15 mins" }, 

    { id: 2, name: "Omelette", ingredients: ["eggs", "cheese"], difficulty: "Easy", prepTime: "10 mins" }, 

    { id: 3, name: "Chicken Curry", ingredients: ["chicken", "curry powder"], difficulty: "Medium", prepTime: "30 mins" } 

]; 

 

// Route to get recipes based on ingredients 

app.post('/api/recipes', (req, res) => { 

    const { ingredients } = req.body; 

    const availableIngredients = ingredients.split(',').map(item => item.trim()); 

 

    const filteredRecipes = recipes.filter(recipe =>  

        recipe.ingredients.every(ingredient => availableIngredients.includes(ingredient)) 

    ); 

 

    res.json(filteredRecipes); 

}); 

 

// Route to get user profile (placeholder) 

app.get('/api/profile/:userId', (req, res) => { 

    const userId = req.params.userId; 

    // Here you would normally fetch user data from a database 

    res.json({ userId, name: "Sample User", savedRecipes: [] }); 

}); 
