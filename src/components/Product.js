import React from "react";
import { useContext } from "react";
import factoryContext from "../context/factories/factoryContext";

const Product = () => {
  const context = useContext(factoryContext);
  const { singleProduct } = context;

  return (
    <div className="card my-3">
      <div className="card-body">
        {singleProduct === null ? (
          <h2>'Loading...'</h2>
        ) : (
          <div>
            <h3 className="card-title">Title: {singleProduct.title}</h3>
            <h5 className="card-text">Factory: {singleProduct.factory}</h5>
            <h5 className="card-text">Quantity: {singleProduct.quantity}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
