import { NavBar } from "../src/ui/NavBar";
import { Logo } from "../src/ui/logo";

function App() {
  return (
    <div className="app">
      <div className="py-4">
        <Logo></Logo>
      </div>
      <NavBar>
        <ul className="w-full flex justify-between text-lg text-white font-semibold">
          <li>Inicio</li>
          <li>Pancheras</li>
          <li>Carros Pancheros</li>
          <li>Contacto</li>
          <li>Quienes Somos</li>
        </ul>
      </NavBar>
      <img
        src="https://eu-central.storage.cloudconvert.com/tasks/1d3fc413-1370-4c1d-b0e9-9dc8de6620ea/hero-image.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20231015%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20231015T121307Z&X-Amz-Expires=86400&X-Amz-Signature=1ac2f91ecbd54f6a474750eb2b0b1bb167cd9b007c7198c4ea474317bb9290e9&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22hero-image.webp%22&response-content-type=image%2Fwebp&x-id=GetObject"
        alt="hero-image"
      />
    </div>
  );
}

export default App;
