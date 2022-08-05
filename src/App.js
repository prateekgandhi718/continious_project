import "./App.css";
import Navbar from "./components/Navbar";
import FactoryState from "./context/factories/FactoryState";

const App = () => {
  return (
    <div className="App">
      <FactoryState>
        <Navbar />
      </FactoryState>
    </div>
  );
};

export default App;
