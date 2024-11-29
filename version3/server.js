const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer'); // For handling file uploads

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Configure multer for file uploads
const upload = multer({
    dest: 'uploads/', // Directory where files will be temporarily stored
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

// Route to fetch recipes
app.get('/api/recipes', (req, res) => {
    fs.readFile('recipes.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Failed to read recipes:', err);
            return res.status(500).json({ error: 'Failed to fetch recipes.' });
        }

        const recipes = data
            ? data.trim().split('\n').map(line => {
                  const [name, ingredients, difficulty, prepTime, instructionsPart, imagePart] = line.split('|');
                  const instructions = instructionsPart?.split(': ')[1]?.replace(/"/g, '').trim() || '';
                  const image = imagePart?.split(': ')[1]?.replace(/"/g, '').trim() || '';

                  return {
                      name: name?.trim() || 'Unnamed Recipe',
                      ingredients: ingredients?.split(',').map(item => item.trim()) || [],
                      difficulty: difficulty?.trim() || 'Unknown',
                      prepTime: prepTime?.trim() || 'Unknown',
                      instructions,
                      image,
                  };
              })
            : [];

        res.json(recipes);
    });
});

// Route to save a recipe with optional image upload
app.post('/api/save-recipe', upload.single('image'), (req, res) => {
    const { name, ingredients, difficulty, prepTime, instructions } = req.body;

    if (!name || !ingredients || !difficulty || !prepTime || !instructions) {
        console.error('Missing fields in request body:', req.body);
        return res.status(400).json({ error: 'All fields are required!' });
    }

    // Handle file upload
    let imagePath = '';
    if (req.file) {
        const fileExt = path.extname(req.file.originalname);
        const newFileName = `uploads/${Date.now()}-${path.basename(req.file.originalname, fileExt)}${fileExt}`;
        fs.renameSync(req.file.path, newFileName);
        imagePath = newFileName;
    }

    const formattedInstructions = instructions.split(',').map(step => step.trim()).join(',');
    const newRecipe = `${name}|${ingredients}|${difficulty}|${prepTime}|instructions: "${formattedInstructions}"|image: "${imagePath}"\n`;

    fs.appendFile('recipes.txt', newRecipe, (err) => {
        if (err) {
            console.error('Failed to save the recipe:', err);
            return res.status(500).json({ error: 'Failed to save the recipe.' });
        }

        console.log('Recipe saved successfully:\n', {
            name,
            ingredients,
            difficulty,
            prepTime,
            instructions: formattedInstructions,
            imagePath,
        });

        res.status(200).json({ message: 'Recipe saved successfully!', imagePath });
    });
});

// Serve static files (if needed)
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
