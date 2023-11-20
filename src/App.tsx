import { Top } from "../src/components/Top";
import { Hero } from "../src/components/Hero";
import { Preview } from "../src/components/Preview";
import { Shipping } from "../src/components/Shipping";

function App() {
  return (
    <div className="app">
      <Top></Top>
      <div className="border border-gray-100 rounded-md">
        <Hero></Hero>
      </div>
      <Preview></Preview>
      <Shipping></Shipping>
      <Shipping></Shipping>
    </div>
  );
}

export default App;
