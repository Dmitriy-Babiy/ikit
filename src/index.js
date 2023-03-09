import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`);
root.render(<App />);
