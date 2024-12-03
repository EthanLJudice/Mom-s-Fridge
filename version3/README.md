# Mom-s-Fridge
CSC 4330 Group Project
Members:<br />
Ethan Judice,<br />
Thomas Miller,<br />
Skyler Dowling,<br />
Jackson Buhrer,<br />
and Guido Fajaro<br />

# Contributions

Guido Fajardo:
    Login - Sign up (firebase.js),
    Dark and Light mode,
    Recipe Search bar,
    Create your own Recipe,
    Node.js, 
    and Server.js
Jackson Buhrer: 
    Created most of the recipes for the recipe search. Added the steps for them since I have cooking experience. Added pictures for the recipes.

# Implementation Details


# Core Features
The website will ask the user to input a list of ingredients based on what's in their fridge or pantry and output a series of recipes that include those ingredients.<br />
The websites pulls the recipes from a text file with an extensive list of recipes contained the steps, difficulty and preptime.<br />
A search bar to search for recipies using ingredients/keywords.<br />
A consise user interface that streamlines the use of the program to the user.<br />

# Usage and Installation Guide

Recipe Image Storage Website
This project is a Node.js-based application that provides functionality for uploading and storing images related to recipes. The application includes a backend server to handle image storage and a frontend interface that can be launched in a browser.

# Setup Instructions
1. Download the Repository
Go to the GitHub page for this repository.
Click the green "Code" button.
Select "Download ZIP".
Save the ZIP file to your computer and extract it to a folder of your choice.
2. Install Node.js
Download Node.js from the official website and follow the installation instructions for your operating system.
After installation, verify that Node.js and npm (Node Package Manager) are installed by opening your terminal/command prompt and running:
bash
 
node -v
npm -v
You should see version numbers for both commands.
3. Install Project Dependencies
Open the terminal/command prompt.
Navigate to the extracted project folder using the cd command:
bash
 
cd /path/to/your/project-folder
Install the required dependencies by running:
bash
 
npm install
This command will install all packages listed in the package.json file.
4. Start the Node.js Server
Locate the main server file in the project directory, typically named server.js or app.js.
Start the server by running:
bash
 
node server.js
Once the server is running, you should see a message like:
arduino
 
Server running on http://localhost:3000
Replace 3000 with the actual port number if specified in the project.
5. Launch the Frontend
Open the project folder in Visual Studio Code.
Locate the main HTML file for the frontend, typically named index.html.
Right-click on index.html and select "Open with Live Server".
If you don’t have Live Server installed:
Go to the Extensions tab in Visual Studio Code.
Search for "Live Server" and click Install.
After installation, right-click on the index.html file and choose "Open with Live Server".
A browser window will open with the frontend running.
6. Testing the Application
Verify the Backend: Open your browser and navigate to http://localhost:3000 to check if the server is running.
Interact with the Frontend: Use the frontend interface to upload recipes with images and see the results.
Project Features
Image Uploads: Users can upload images along with recipes.
Local Storage: All images are saved in the uploads/ folder within the project directory.
Node.js Backend: Handles image upload and retrieval.
Frontend: Simple interface for user interaction.
Folder Structure
bash
 
project/
│
├── uploads/            # Stores uploaded images
├── server.js           # Main server file
├── public/             # Contains frontend assets like HTML, CSS, JS
├── package.json        # Manages dependencies and scripts
├── .env                # Environment variables configuration
└── README.md           # Instructions for setup and usage
Dependencies
To ensure smooth operation, the following dependencies are used:

Express: For creating the backend server.
bash
 
npm install express
Multer: For handling file uploads.
bash
 
npm install multer
Dotenv: For managing environment variables.
bash
 
npm install dotenv
These dependencies are automatically installed when you run npm install.

Common Commands
Start the Server:
bash
 
node server.js
Install a New Dependency:
bash
 
npm install <dependency-name>
Troubleshooting
Port Already in Use:

If the server does not start because the port is already in use, change the port number in the .env file or directly in server.js.
Live Server Not Working:

Ensure the Live Server extension is installed in Visual Studio Code.
Make sure no other server is using the same port.
Node.js Errors:

Check if all dependencies are installed by running:
bash
 
npm install
