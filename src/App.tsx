//Pages
import { Home } from "../src/pages/Home";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";

//React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pancheras" element={<Shop />}></Route>
        <Route path="/carros-pancheros" element={<Shop />}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
