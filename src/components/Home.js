import Factories from "./Factories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Factories/>} />
          <Route exact path = "/products" element = {<Products/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
