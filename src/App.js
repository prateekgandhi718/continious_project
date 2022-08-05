
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FactoryState from "./context/factories/FactoryState";

const App = () => {
  return (
    <div className="App">
      <FactoryState>
        <Navbar />
        <Home />
      </FactoryState>
    </div>
  );
};

export default App;
