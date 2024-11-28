// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSbmJiEF4ZXqm40MyXB6lr9a8RfzvnQx0",
    authDomain: "mom-sfridge.firebaseapp.com",
    databaseURL: "https://mom-sfridge-default-rtdb.firebaseio.com",
    projectId: "mom-sfridge",
    storageBucket: "mom-sfridge.firebasestorage.app",
    messagingSenderId: "911931431104",
    appId: "1:911931431104:web:30bd3170833bbfe3f4f525",
    measurementId: "G-D7LTDMCMHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Sign-Up Function
const signUp = async (email, password, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email,
            createdAt: new Date(),
        });

        console.log("User signed up successfully:", user);
        alert("Sign-up successful! You can now log in.");
    } catch (error) {
        console.error("Error signing up:", error.message);
        alert(error.message);
    }
};

// Login Function
const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);
        alert("Login successful!");
        window.location.href = "recipe-search.html"; // Redirect to Recipe Search page
    } catch (error) {
        console.error("Login error:", error.message);
        alert(error.message);
    }
};

// Sign-Out Function
const signOutUser = async () => {
    try {
        await signOut(auth);
        alert("Sign-out successful!");
        window.location.href = "login.html"; // Redirect to Login page
    } catch (error) {
        console.error("Sign-out error:", error.message);
        alert(error.message);
    }
};

// Authentication State Observer
const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
        const signupBtn = document.getElementById("signup-btn");
        const loginBtn = document.getElementById("login-btn");
        const recipesBtn = document.getElementById("recipes-btn");
        const signOutBtn = document.getElementById("signOutButton");

        if (user) {
            // If user is logged in
            if (signupBtn) signupBtn.style.display = "none";
            if (loginBtn) loginBtn.style.display = "none";
            if (recipesBtn) recipesBtn.style.display = "inline-block";
            if (signOutBtn) signOutBtn.style.display = "inline-block";
        } else {
            // If no user is logged in
            if (signupBtn) signupBtn.style.display = "inline-block";
            if (loginBtn) loginBtn.style.display = "inline-block";
            if (recipesBtn) recipesBtn.style.display = "none";
            if (signOutBtn) signOutBtn.style.display = "none";
        }
    });
};

// Firestore Helper Functions
const saveUserData = async (userId, data) => {
    try {
        await setDoc(doc(db, "users", userId), data);
        console.log("User data saved successfully.");
    } catch (error) {
        console.error("Error saving user data:", error.message);
    }
};

const readUserData = async (userId) => {
    try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return userSnap.data();
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error reading user data:", error.message);
    }
};

// Export functions for use in other files
export { signUp, login, signOutUser, checkAuthState, saveUserData, readUserData };
