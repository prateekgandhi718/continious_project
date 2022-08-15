import Factories from "./Factories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Factories/>} />
          <Route exact path = "/products" element = {<Products/>} />
          <Route exact path = "/products/product" element = {<Product/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
