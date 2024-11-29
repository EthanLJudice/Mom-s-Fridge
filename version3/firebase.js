import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    setPersistence,
    browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

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
const auth = getAuth(app);
const db = getFirestore(app);

// Enable persistence
const enablePersistence = async () => {
    try {
        await setPersistence(auth, browserLocalPersistence);
        console.log("Persistence enabled");
    } catch (error) {
        console.error("Failed to enable persistence:", error);
    }
};

enablePersistence();

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
        alert("Sign-up successful! Redirecting to login...");
        window.location.href = "login.html";
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
        window.location.href = "my-fridge.html";
    } catch (error) {
        console.error("Login error:", error.message);
        alert("Failed to log in. Check your credentials.");
    }
};

// Sign-Out Function
const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log("Sign-out successful!");
        alert("Signed out successfully.");
        window.location.href = "login.html"; // Redirect to login page after sign-out
    } catch (error) {
        console.error("Sign-out error:", error.message);
        alert(error.message);
    }
};
// Authentication State Observer
const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
        const authButtons = document.getElementById("auth-buttons");

        if (user) {
            console.log("User is logged in:", user.email);
            // Hide the "Log In" and "Sign Up" buttons
            if (authButtons) {
                authButtons.style.display = "none";
                console.log("Auth buttons hidden.");
            }
        } else {
            console.log("No user is logged in.");
            // Show the "Log In" and "Sign Up" buttons
            if (authButtons) {
                authButtons.style.display = "flex";
                console.log("Auth buttons displayed.");
            }
        }
    });
};



// Export functions
export {
    signUp,
    login,
    signOutUser,
    checkAuthState
};
