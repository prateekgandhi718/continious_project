import React from 'react'
import { useContext } from 'react'
import factoryContext from '../context/factories/factoryContext'

const ProductItem = (props) => {
    const context = useContext(factoryContext);
    const {deleteProduct} = context;


  return (
    <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{props.productProp.title}</h5>
                <p className="card-text">{props.productProp.quantity}</p>
                <i className="fas fa-trash mx-2" style = {{cursor: "pointer"}} onClick = {() => {deleteProduct(props.productProp.id, props.productProp.factory)}}></i>
                <i className="far fa-edit mx-2" style = {{cursor: "pointer"}} onClick = {() => {props.updateProductProp(props.productProp)}}></i>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
