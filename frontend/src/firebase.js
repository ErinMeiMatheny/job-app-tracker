import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  //switch to env.local once finished - this is so Erin and Scott have firebase too
  apiKey: "AIzaSyCN_TTVDn06mJ3cNKcTswDM5oAmNIvgF1Q",
  authDomain: "jobtracker-29739.firebaseapp.com",
  databaseURL: "https://jobtracker-29739.firebaseio.com",
  projectId: "jobtracker-29739",
  storageBucket: "jobtracker-29739.appspot.com",
  messagingSenderId: "40412027755",
  appId: "1:40412027755:web:b5c9ffa8bfdea4dc148a2e",
  measurementId: "G-NLJVVJWYG0",
});

export const auth = app.auth();
export default app;
