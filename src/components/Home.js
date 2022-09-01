import Factories from "./Factories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import Alert from "./Alert";
import { useState } from "react";

const Home = () => {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <div>
      <Router>
      <Alert alertProp = {alert} />
        <Routes>
          <Route exact path="/" element={<Factories/>} />
          <Route exact path = "/products" element = {<Products showAlertProp = {showAlert}/>} />
          <Route exact path = "/products/product" element = {<Product/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
