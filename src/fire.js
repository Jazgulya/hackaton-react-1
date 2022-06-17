import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdSRggPNV_FZv9s97QubG3h0Xhyadjhc0",
  authDomain: "hackaton-1-2de6e.firebaseapp.com",
  projectId: "hackaton-1-2de6e",
  storageBucket: "hackaton-1-2de6e.appspot.com",
  messagingSenderId: "418042315814",
  appId: "1:418042315814:web:65d9e3d197516ca19f12e7",
};

export default fire.initializeApp(firebaseConfig);
