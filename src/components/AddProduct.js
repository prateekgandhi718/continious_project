import React from 'react'
import { useContext } from "react";
import factoryContext from "../context/factories/factoryContext";
import { useRef, useState } from 'react';


const AddProduct = (props) => {
    const context = useContext(factoryContext);
    const { addProduct } = context;
    const [product, setProduct] = useState({factory: JSON.parse(localStorage.getItem('currentFactory')).id, title: "", quantity: 0, description: ""});
    const [image, setImage] = useState(null);

    const ref = useRef(null)
    const refClose = useRef(null)

    const addProductFunction = () => {
        ref.current.click()

    }

    const onChange = (e) => {
        if ([e.target.name] == 'image') {
            setImage({imageDataType: e.target.files});
            console.log(e.target.files)
        } else {
            setProduct({...product, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = () => {
        addProduct(product.factory, product.title, parseInt(product.quantity), product.description, image.imageDataType[0])
        console.log(image.imageDataType)
        refClose.current.click()
        //When you click add, the fields should be blank again therefore,
        setProduct({factory: JSON.parse(localStorage.getItem('currentFactory')).id, title: "", quantity: 0, description: ""})
        setImage(null);
        props.showAlertProp("The note has been added successfully", "success")
    }

    
  return (
    <>
        <div className='d-flex justify-content-center my-3'>
            <button ref={ref} type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={addProductFunction}>
                    + Add a product
            </button>

        </div>


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
                    
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Title</label>
                        <div id="emailHelp" className="form-text" style = {{marginTop: "-10px"}}>(Minimum length is 2)</div>
                        <input type="text" className="form-control" id="title" name="title" onChange = {onChange} value={product.title} minLength= {2} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="quantity" name="quantity" onChange = {onChange} value = {product.quantity}/>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <div id="emailHelp" className="form-text" style = {{marginTop: "-10px"}}>(can be left empty)</div>
                        <input type="text" className="form-control" id="description" name="description" onChange = {onChange} value={product.description}/>
                    </div>

                    <div className="mb-3">
                        <label htmlfor="post-image" className="form-label" >Image</label>
                        <input type="file" accept='image/*' className="form-control" id="post-image" name='image' onChange={onChange} required/>
                    </div>
                    
                    
                </form>
                        </div>
                        <div className="modal-footer">
                            <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={product.title.length<2 || product.quantity < 1 || image === null} type="submit" className="btn btn-primary" style={{backgroundColor: "black"}} onClick = {handleSubmit}>ADD!</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AddProduct
