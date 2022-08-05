import React from 'react'

const FactoryItem = (props) => {
  return (
    <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{props.factoryProp.factory_name}</h5>
                <p className="card-text">{props.factoryProp.factory_location}</p>
            </div>
        </div>
    </div>
  )
}

export default FactoryItem
