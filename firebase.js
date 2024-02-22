import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const configs = {
  apiKey: "apikey",
  authDomain: " ",
  projectId: " ",  // replace this object with tials from your firebase project
  storageBucket: " ",
  messagingSenderId: "784333444370",
  appId: "x:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "G-ESDSEVSDF",
};
const app = getApps()?.length > 0 ? getApp() : initializeApp(configs);
const auth = getAuth(app);
const providerParameters = {
  prompt: "select_account",
};
const googleProvider = new GoogleAuthProvider().setCustomParameters(
  providerParameters
);
const loginWithProvider = (provider) => signInWithPopup(auth, provider);
export const loginWithGoogle = () => loginWithProvider(googleProvider);

// Put the below click code in your component to open google login popup  after thet remove from below
const handleGoogleLogin = async () => {
  const { loginWithGoogle } = await import("../../../../firebase");
  try {
    const res = await loginWithGoogle();
    if (res?.user) {
      // Your code here
    }
  } catch (err) {}
};
