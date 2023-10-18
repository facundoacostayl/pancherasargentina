import { Top } from "../src/components/Top";
import { Hero } from "../src/components/Hero";
import { Preview } from "../src/components/Preview";

function App() {
  return (
    <div className="app">
      <Top></Top>
      <div className="border border-gray-100 rounded-md">
        <Hero></Hero>
        <Preview></Preview>
      </div>
    </div>
  );
}

export default App;
