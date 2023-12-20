//Pages
import { Home } from "../src/pages/Home";
import { Shop } from "./pages/Shop";

//React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pancheras" element={<Shop />}></Route>
        <Route path="/carros-pancheros" element={<Shop />}></Route>
      </Routes>
    </>
  );
}

export default App;
