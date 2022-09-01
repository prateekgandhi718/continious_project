import React from "react";
import { useContext } from "react";
import factoryContext from "../context/factories/factoryContext";
import { saveAs } from "file-saver";

const Product = () => {
  const context = useContext(factoryContext);
  const { singleProduct } = context;
  const host = "http://127.0.0.1:8000";

  const downloadImage = () => {
    saveAs(`${host}${singleProduct.image}`, "your_image.jpg");
  };

  return (
    <div className=" container d-flex my-3  justify-content-center">
      {/* < className="card-body" style={{border: 'solid'}}> */}
        {singleProduct === null ? (
          <h2>'Loading...'</h2>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <h3 className="display-6 py-3 px-3" >
              {singleProduct.title}
            </h3>
            <small className="text-muted" >Factory number : {singleProduct.factory}</small>
            <small className="text-muted" >Quantity : {singleProduct.quantity}</small>
            
            <p className="lead" style={{wordWrap: 'break-word', marginTop: '1rem'}}>
            <em>{singleProduct.description}
            </em>
            </p>
            
            <img
              src={`${host}${singleProduct.image}`}
              alt={singleProduct.title}
              className="img-fluid"
              style={{ width: "20rem", marginBottom: "1.5rem", borderRadius: "2rem" }}
            />
            <button type="button" class="btn btn-dark" onClick={downloadImage}>
              Download the image.
            </button>
          </div>
        )}
      
    </div>
  );
};

export default Product;
