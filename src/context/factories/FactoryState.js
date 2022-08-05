import factoryContext from "./factoryContext";
import { useState } from "react";


const FactoryState = (props) => {
    const host = "http://127.0.0.1:8000";
    const factoriesInitial = [];
    const productsInitial = [];
    const [factories, setFactories] = useState(factoriesInitial)
    const [products, setProducts] = useState(productsInitial)

    //Get all the factories.
    const getFactories = async () => {
        //API call
        const response = await fetch (`${host}/api/factories/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const jsonData = response.json();
        setFactories(jsonData);
        console.log(jsonData);
    }

    //Get all the products of a particular factory
    const getProducts = async (factoryId) => {
        const response = await fetch (`${host}/api/factories/${factoryId}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
        });

        const jsonData = response.json();
        setProducts(jsonData);
        console.log(jsonData);
    }

    //Add a product in a particular factory
    const addProduct = async (factoryId, title, quantity) => {
        const response = await fetch (`${host}/api/factories/${factoryId}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({factoryId, title, quantity})
        });

        //It return the new object created. therefore add it on the client side as well.
        const newProd = await response.json();
        setProducts(products.concat(newProd));
    }

    //Delete a product from a particular factory
    



  return (
    <div>
      
    </div>
  )
}

export default FactoryState
