import React from 'react'
import { useContext } from "react";
import factoryContext from "../context/factories/factoryContext";
import { useRef, useState } from 'react';


const AddProduct = () => {
    const context = useContext(factoryContext);
    const { addProduct } = context;
    const [product, setProduct] = useState({factory: parseInt(localStorage.getItem('currentFactory')), title: "", quantity: 0});

    const ref = useRef(null)
    const refClose = useRef(null)

    const addProductFunction = () => {
        ref.current.click()

    }

    const onChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        addProduct(parseInt(product.factory), product.title, parseInt(product.quantity))
        refClose.current.click()
    }

    
  return (
    <>
    
        <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={addProductFunction}>
                Add a product.
        </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Here the form will come again  */}
                            <form>
                    {/* <div className="mb-3">
                        <label htmlFor="title" className="form-label">Factory</label>
                        <div id="emailHelp" className="form-text" style = {{marginTop: "-10px"}}>(Choose the factory number)</div>
                        <input type="number" className="form-control" id="factory" name="factory" aria-describedby="emailHelp" onChange = {onChange} value={product.factory} required />
                        
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Title</label>
                        <div id="emailHelp" className="form-text" style = {{marginTop: "-10px"}}>(Minimum length is 2)</div>
                        <input type="text" className="form-control" id="title" name="title" onChange = {onChange} value={product.title} minLength= {2} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="quantity" name="quantity" onChange = {onChange} value = {product.quantity}/>
                    </div>
                    
                    
                </form>
                        </div>
                        <div className="modal-footer">
                            <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={product.title.length<2 || product.quantity < 1} type="submit" className="btn btn-primary" style={{backgroundColor: "black"}} onClick = {handleSubmit}>ADD!</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AddProduct
