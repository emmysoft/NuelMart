import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { FIREBASE_API_KEY } from "./utils/keys";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "nuelmart-c0dc4.firebaseapp.com",
  projectId: "nuelmart-c0dc4",
  storageBucket: "nuelmart-c0dc4.appspot.com",
  messagingSenderId: "923849444262",
  appId: "1:923849444262:web:fef8b2504b306200071d67",
  measurementId: "G-8WMN1GE76J"
};

// const auth = initializeAuth(firebaseConfig, {
//   persistence: getReactNativePersistence(AsyncStorage)
// })

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// export { auth };
// const analytics = getAnalytics(app);
