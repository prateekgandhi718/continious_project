import factoryContext from "./factoryContext";
import { useState } from "react";
import axios from 'axios';


const FactoryState = (props) => {
    const host = "http://127.0.0.1:8000";
    const factoriesInitial = [];
    const productsInitial = [];
    const [factories, setFactories] = useState(factoriesInitial)
    const [products, setProducts] = useState(productsInitial)
    const [singleProduct, setSingleProduct] = useState(null);
    const [newImagePath, setNewImagePath] = useState("");

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
    const addProduct = async (factory, title, quantity, description, image) => {
        const config = {
            headers: {'Content-Type': 'multipart/form-data'},
        }
        let formData = new FormData();
        formData.append("factory", factory);
        formData.append("title", title);
        formData.append("quantity",quantity);
        formData.append("description", description);
        formData.append("image", image);

        axios.post(`${host}/api/factories/${factory}`, formData, config)
            .then((res) => {
                console.log(res.data);
                const newProd = res.data;
                setProducts(products.concat(newProd));
            })
            .catch((err) => {
                console.log(err);
            })
        //It return the new object created. therefore add it on the client side as well.
        // const newProd = await response.json();
        // setProducts(products.concat(newProd));
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
    const editProduct = async (id, factory, title, quantity, description, image) => {
        // will provide all the arguments with passing the updateNote function which takes an instance of product
        const config = {
            headers: {'Content-Type': 'multipart/form-data'},
        }
        let formData = new FormData();
        formData.append("factory", factory);
        formData.append("title", title);
        formData.append("quantity",quantity);
        formData.append("description", description);
        formData.append("image", image);

        axios.put(`${host}/api/factories/${factory}/${id}`, formData, config)
            .then((res) => {
                console.log(res.data);
                setNewImagePath(res.data.image);
            })
            .catch((err) => {
                console.log(err);
            })

        //logic to edit on client side.
        let newProducts = JSON.parse(JSON.stringify(products));
        for (let index = 0; index < newProducts.length; index++) {
            const element = newProducts[index];
            if (element.id === id) {
                newProducts[index].factory = factory;
                newProducts[index].title = title;
                newProducts[index].quantity = quantity;
                newProducts[index].description = description;
                newProducts[index].image = `${host}`.concat(newImagePath); //now newProducts[index].image is the backend URL and image is the image file from front end.
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
