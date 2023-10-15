import { NavBar } from "../src/ui/NavBar";
import { Logo } from "../src/ui/logo";

function App() {
  return (
    <div className="app">
      <div>
        <Logo></Logo>
      </div>
      <NavBar>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </NavBar>
    </div>
  );
}

export default App;
