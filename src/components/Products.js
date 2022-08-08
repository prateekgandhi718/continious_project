import React from "react";
import { useContext } from "react";
import factoryContext from "../context/factories/factoryContext";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import { useEffect } from "react";

const Products = () => {
  const context = useContext(factoryContext);
  const { products, getProducts } = context;

  useEffect(() => {
    getProducts(localStorage.getItem('currentFactory'))
  }, []);


  return (
    <>
    <AddProduct/>
      <div className="mx-3">
        <div className="row my-3">
          <h2>List of products in the selected factory</h2>
          <div className="container">
            {products.length === 0 &&
              "You have not added any products in this factory, yet. You can add one by clicking on the Add a product button."}
          </div>
          {products.map((element) => {
            return <ProductItem key={element.id} productProp={element} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
