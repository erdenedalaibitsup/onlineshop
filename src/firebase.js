import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDH_Fxkum1sfw6ikJpsx3J194LZpjYUeAQ",
  authDomain: "hoska-s-online-shop.firebaseapp.com",
  projectId: "hoska-s-online-shop",
  storageBucket: "hoska-s-online-shop.appspot.com",
  messagingSenderId: "963298879829",
  appId: "1:963298879829:web:f560b625b0ccfd3342e7dc",
  measurementId: "G-WDCK6DBE23",
};
var fire = firebase.initializeApp(config);
export default fire;
