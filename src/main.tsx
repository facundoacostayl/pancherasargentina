import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import { ShoppingCartProvider } from "./shoppingCartContext/ShoppingCartProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </Router>
  </React.StrictMode>
);
