import factoryContext from "./factoryContext";
import { useState } from "react";


const FactoryState = (props) => {
    const host = "http://127.0.0.1:8000";
    const factoriesInitial = [];
    const productsInitial = [];
    const [factories, setFactories] = useState(factoriesInitial)
    const [products, setProducts] = useState(productsInitial)
    const [singleProduct, setSingleProduct] = useState(null);

    //Get all the factories.
    const getFactories = async () => {
        //API call
        const response = await fetch (`${host}/api/factories/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const jsonData = await response.json();
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

        const jsonData = await response.json();
        setProducts(jsonData);
        console.log(jsonData);
    }

    //Add a product in a particular factory
    const addProduct = async (factory, title, quantity, description) => {
        const response = await fetch (`${host}/api/factories/${factory}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({factory, title, quantity, description})
        });
        //It return the new object created. therefore add it on the client side as well.
        const newProd = await response.json();
        setProducts(products.concat(newProd));
    }

    //Delete a product from a particular factory
    const deleteProduct = async (id, factory) => {
        // will provide both the arguments from the trash icon. props.prodprop.id, props.prodprop.factory
        const response = await fetch(`${host}/api/factories/${factory}/${id}`, {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
            },
        });
        // const jsonData = await response.json();
        // console.log(jsonData);

        //logic for client side.
        const newProducts = products.filter((elemOfProd) => {return elemOfProd.id !== id})
        setProducts(newProducts);
    }

    //Edit a product
    const editProduct = async (id, factory, title, quantity, description) => {
        // will provide all the arguments with passing the updateNote function which takes an instance of product
        const response = await fetch(`${host}/api/factories/${factory}/${id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({factory, title, quantity, description})
        });
        const jsonData = await response.json();

        //logic to edit on client side.
        let newProducts = JSON.parse(JSON.stringify(products));
        for (let index = 0; index < newProducts.length; index++) {
            const element = newProducts[index];
            if (element.id === id) {
                newProducts[index].factory = factory;
                newProducts[index].title = title;
                newProducts[index].quantity = quantity;
                newProducts[index].description = description;
                break;
            }
        }
        setProducts(newProducts);
    }

    const getASingleProduct = async (id, factory) => {
        const response = await fetch(`${host}/api/factories/${factory}/${id}`, {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json',
            },
        });
        const jsonData = await response.json();
        setSingleProduct(jsonData);
        // console.log(singleProduct);
    }


  return (
    <factoryContext.Provider value={{factories, products, getFactories, getProducts, editProduct, deleteProduct, addProduct, getASingleProduct, singleProduct}}>
        {props.children}
    </factoryContext.Provider>
  )
}

export default FactoryState
