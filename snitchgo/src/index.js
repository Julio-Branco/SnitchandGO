import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgrjQ1CQSt9PWxBU78E_6D0J5Y3Y8zpzA",
  authDomain: "snitch-and-go.firebaseapp.com",
  databaseURL: "https://snitch-and-go-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "snitch-and-go",
  storageBucket: "snitch-and-go.appspot.com",
  messagingSenderId: "386574567152",
  appId: "1:386574567152:web:c091e345db925ae56fe435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };