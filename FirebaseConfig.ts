// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXNEPf8si5HPEn6CAXn5kuqNkKaPKXdK4",
  authDomain: "skillbridge-7ccf4.firebaseapp.com",
  projectId: "skillbridge-7ccf4",
  storageBucket: "skillbridge-7ccf4.firebasestorage.app",
  messagingSenderId: "1005297225032",
  appId: "1:1005297225032:web:90f090b71e025bfb4b777d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});