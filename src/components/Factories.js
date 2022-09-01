import React from 'react'
import { useContext } from 'react'
import factoryContext from '../context/factories/factoryContext'
import { useEffect} from 'react'
import FactoryItem from './FactoryItem'


const Factories = () => {
    const context = useContext(factoryContext);
    const {factories, getFactories} = context;

    useEffect(() => {
        getFactories(); //now the factories variable has the list of factories on load.
    }, []);

  return (
    <div className='mx-3'>
      <div className='row my-3'>
        <h1 className='display-6'>Factories.</h1>
        <div className='container'>
            {factories.length === 0 && 'You have not added any factories yet. Go to django admin.'}
        </div>
        {factories.map((element) => {
            return <FactoryItem key = {element.id} factoryProp = {element} />
        })}
      </div>
    </div>
  )
}

export default Factories
