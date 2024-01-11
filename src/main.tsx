import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import { ShoppingCartProvider } from "./shoppingCartContext/ShoppingCartProvider.tsx";
import { MobileMenuProvider } from "./mobileMenuContext/MobileMenuProvider.tsx";
import { ProductProvider } from "./productContext/ProductProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <MobileMenuProvider>
        <ShoppingCartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </ShoppingCartProvider>
      </MobileMenuProvider>
    </Router>
  </React.StrictMode>
);
