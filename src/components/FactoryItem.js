import React from 'react'
import {
  Link
} from "react-router-dom";


const FactoryItem = (props) => {
  

  return (
    <div className="col-md-3">
        <div className="card border-info my-3">
          <Link to="/products" style={{textDecoration: "none"}}>
            <div className="card-body text-info" type="button" onClick={ () => {localStorage.setItem('currentFactory', JSON.stringify(props.factoryProp))}} >
            <figure>
              <blockquote className="blockquote">
                <p>{props.factoryProp.factory_name}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                 <cite title="Source Title">{props.factoryProp.factory_location}</cite>
              </figcaption>
          </figure>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default FactoryItem

//Need not use local storage. can use local state variables with if conditions. as done for products.