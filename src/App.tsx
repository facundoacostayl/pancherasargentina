//Pages
import { Home } from "../src/pages/Home";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Checkout } from "./pages/Checkout";

//React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
        <Route path="/sobre-nosotros" element={<About />}></Route>
        <Route path="/producto/:id" element={<Product />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;
