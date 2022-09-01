import React from 'react'
import { useContext } from 'react'
import factoryContext from '../context/factories/factoryContext'
import {
  Link
} from "react-router-dom";

const ProductItem = (props) => {
    const context = useContext(factoryContext);
    const {deleteProduct, getASingleProduct} = context;
    const host = "http://127.0.0.1:8000";


  return (
    <div className="col-md-3">
        <div className="card border-info my-3">
            <div className="card-body text-dark" >
              {/* <Link to="/products/product" style={{textDecoration: "none", cursor: "pointer"}} onClick = {() => {getASingleProduct(props.productProp.id, props.productProp.factory)}}>
            <img className="card-img-top" style={{height: '10rem'}} src={`${host}${props.productProp.image}`} alt="Card image cap"/>
              </Link> */}
                <Link className='d-flex justify-content-between my-2' to="/products/product" style={{textDecoration: "none", cursor: "pointer"}} onClick = {() => {getASingleProduct(props.productProp.id, props.productProp.factory)}}>
                <h5 className="card-title" style={{color: "#22aba4"}}>{props.productProp.title}</h5>
                <p className="card-text" style={{color: "#198a84"}}>{props.productProp.quantity}</p>
                </Link>
                <div className='d-flex justify-content-between my-2 '>
                  <i className="far fa-edit" style = {{cursor: "pointer"}} onClick = {() => {props.updateProductProp(props.productProp)}}></i>
                  <i className="fas fa-trash" style = {{cursor: "pointer"}} onClick = {() => {deleteProduct(props.productProp.id, props.productProp.factory); props.showAlertProp("Deleted successfully.", "warning")}}></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
