import React from "react";
import { useContext } from "react";
import factoryContext from "../context/factories/factoryContext";
import { saveAs } from "file-saver";

const Product = () => {
  const context = useContext(factoryContext);
  const { singleProduct } = context;
  const host = "http://127.0.0.1:8000";

  const downloadImage = () => {
    saveAs(`${host}${singleProduct.image}`, 'your_image.jpg')
  }

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
            <h5 className="card-text">Description: {singleProduct.description}</h5>
            <h5 className="card-text">Image: {singleProduct.image}</h5>
            <img src={`${host}${singleProduct.image}`} alt={singleProduct.title} className="img-fluid"  />
            <button type="button" class="btn btn-dark" onClick={downloadImage}>Download the image.</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
