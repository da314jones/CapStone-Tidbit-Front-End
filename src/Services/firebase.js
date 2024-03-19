import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
const API = import.meta.env.VITE_API_URL;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
   

    const userProfile = {
      firstName: user.displayName.split(" ")[0],
      lastName: user.displayName.split(" ").splice(1).join(" ") || "",
      email: user.email,
      photo_url: user.photoURL,
      uid: user.uid,
    };

    // saveUserProfile(userProfile);
    sendUserDataToBackend(userProfile); // Pass UID to the backend
    console.log(user);
    console.log(userProfile);
    // console.log(uid); // Log UID for debugging purposes
  } catch (err) {
    console.log(err);
  }
};

const sendUserDataToBackend = async (userProfile) => {
  try {
    console.log("Sending user data to backend:", userProfile);
    const response = await fetch(`${API}/users/new-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    });

    if (!response.ok) {
      throw new Error("Failed to send user data to backend.");
    }

    const responseData = await response.json();
    console.log("Backend response:", responseData);
  } catch (error) {
    console.error("Error sending user data to backend:", error);
  }
};


export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.log(err);
  }
};
