import React from "react";
import { createRoot } from 'react-dom/client'
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AppContextProvider> 
//       <App />
//     </AppContextProvider>
//   </BrowserRouter>  
// )

const container = document.getElementById("root");
 render(
  <React.StrictMode>
    <BrowserRouter>
//     <AppContextProvider> 
//       <App />
//     </AppContextProvider>
//   </BrowserRouter> 
 </React.StrictMode>,
  container
);