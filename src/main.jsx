// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import "./styles/variables.css";
// import "./styles/global.css";
// import "./styles/typography.css";
// import "./styles/utilities.css";
// import "./styles/animations.css";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/typography.css";
import "./styles/utilities.css";
import "./styles/animations.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);