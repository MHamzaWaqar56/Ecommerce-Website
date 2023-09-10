import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './Context/ProductContext.jsx'
import { FilterContextProvider } from './Context/FilterContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { WishProvider } from './Context/WishContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterContextProvider>
        <CartProvider>
          <WishProvider>
            <App />
          </WishProvider>
        </CartProvider>
      </FilterContextProvider>  
    </ProductProvider>  
  </React.StrictMode>
)
