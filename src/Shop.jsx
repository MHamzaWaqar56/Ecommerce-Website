import React from 'react'
import { useFilterContext } from './Context/FilterContext';
import Products from './Products';

const Shop = () => {
    const { filter_Products } = useFilterContext();
  
    return (
      <div>
      
          <Products products={filter_Products} />
      
      </div>
    )
}

export default  Shop