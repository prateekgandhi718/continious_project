import React from 'react'
import { useContext } from 'react'
import factoryContext from '../context/factories/factoryContext'
import {
  Link
} from "react-router-dom";


const FactoryItem = (props) => {
  const context = useContext(factoryContext);
  const {getProducts} = context;

  return (
    <div className="col-md-3">
        <div className="card my-3">
          <Link to="/products" style={{textDecoration: "none"}}>
            <div className="card-body" type="button" onClick={ () => {getProducts(props.factoryProp.id)}} >
                <h5 className="card-title">{props.factoryProp.factory_name}</h5>
                <p className="card-text">{props.factoryProp.factory_location}</p>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default FactoryItem
