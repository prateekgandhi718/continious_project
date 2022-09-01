import React from "react";
import { useContext } from "react";
import factoryContext from "../context/factories/factoryContext";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import { useEffect, useRef, useState } from "react";

const Products = (props) => {
  const context = useContext(factoryContext);
  const { products, getProducts, editProduct } = context;

  useEffect(() => {
    getProducts(JSON.parse(localStorage.getItem('currentFactory')).id)
  }, []);


  //Logic to edit a product. Since it is specific to an item therefore make a function and pass it as prop to the ProductionItem.
  const refEdit = useRef(null)
  const refCloseEdit = useRef(null)
  
  const [product, setProduct] = useState({id: "", factory: "", title: "", quantity: 0, description: ""});
  const [image, setImage] = useState(null);

  const updateProduct = (element) => {
    refEdit.current.click() //opening up the modal when clicked on the edit button
    setProduct({id: element.id, factory: element.factory, title: element.title, quantity: element.quantity, description: element.description}) //putting the values of the clicked product in the product that we have created. we will edit this.
    // setImage({imageDataType: element.image})
    // console.log(element.image)
  }

  const onChange = (e) => {
    if ([e.target.name] == 'image') {
      setImage({imageDataType: e.target.files[0]});
      console.log(e.target.files[0])
  } else {
      setProduct({...product, [e.target.name]: e.target.value})
  }
  }

  const handleSubmit = () => {
    editProduct(product.id, product.factory, product.title, product.quantity, product.description, image.imageDataType)
    refCloseEdit.current.click()
    props.showAlertProp("The note has been updated.", "success")
  }

  //Possible bug: when you are uploading then the payload is a file. when you are not uploading a fresh image, the payload is just the URL of the image uploaded in the backend.
  // Possible fix: when you are uploading, then run the normal editProduct function. When you are not, then run a modified edit function which would not touch the image.


  //Logic to delete a product. Since it is specific to a product and it's a simple delete function therefore use it in productItem directly.
  
  return (
    <>
    <AddProduct showAlertProp = {props.showAlertProp}/>

    {/* Putting the modal related to editing */}
    <button ref={refEdit} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
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
                        <div id="emailHelp" className="form-text" style = {{marginTop: "-10px"}}>(can be empty)</div>
                        <input type="text" className="form-control" id="description" name="description" onChange = {onChange} value={product.description}/>
                    </div>

                    <div className="mb-3">
                        <label htmlfor="post-image" className="form-label" >Image</label>
                        <input type="file" accept='image/*' className="form-control" id="post-image" name='image' onChange={onChange} />
                    </div>

                            </form>
                            </div>
                        <div className="modal-footer">
                            <button ref = {refCloseEdit} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={product.title.length<2 || product.quantity < 1 || image === null} type="submit" className="btn btn-primary" style={{backgroundColor: "black"}} onClick = {handleSubmit}>Edit!</button>
                        </div>
                    </div>
                </div>
            </div>



      <div className="mx-3">
        <div className="row my-3">
          <h1 className="display-6"><mark>{JSON.parse(localStorage.getItem('currentFactory')).factory_name}, <em>{JSON.parse(localStorage.getItem('currentFactory')).factory_location}</em></mark></h1>
          <div className="container">
            {products.length === 0 &&
              "You have not added any products in this factory, yet. You can add one by clicking on the Add a product button."}
          </div>
          {products.map((element) => {
            return <ProductItem key={element.id} productProp={element} updateProductProp = {updateProduct} showAlertProp = {props.showAlertProp}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
