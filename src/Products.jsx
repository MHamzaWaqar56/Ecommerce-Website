import { useState } from "react";
import { UseCartContext } from "./Context/CartContext";
import { useProductContext } from "./Context/ProductContext";
import FilterReducer from "./Reducer/FilterReducer";
import FormatPrice from "./components/FormatPrice";
import {NavLink} from 'react-router-dom'
 
const Products = ({products}) => {

  const {addToCart} = UseCartContext();

  
  const [amount ,setAmount] = useState(1);

  const {isLoading , singleProduct} = useProductContext();
  console.log(singleProduct)


  if(isLoading){
    return (
      <p className="text-lg text-center flex justify-center items-center">Loading....</p>
    )
  }

  
  return (
    <div className="w-full p-14 my-7">
    
      <div className="grid grid-cols-3 gap-28 ">
      
      {
        products.map((curElem)=>{
          const {id, title , price , category ,  image} = curElem;
          return(
                 <>
                   <NavLink to={`/singleproduct/${id}`}>
                      <div className="w-full  h-80 px-8 py-5 group min-h-[400px] max-h-[500px]">
                      
                        <div className="">
                          <p className="w-20 h-10 text-xs rounded-full text-center border-2 border-red-500 bg-red-500 text-white ">{category}</p>
                          
                          <figure>
                            <img className="w-full h-48" src={image} alt={title} />
                          </figure>

                          <p className="font-semibold p-2 text-base text-center">{title}</p>
                          <p className="font-medium p-2 text-base text-center"><FormatPrice price={price} /></p>
                        </div>
                    
                        <div className="flex justify-center">
                        
                          <NavLink onClick={()=>addToCart(id , amount , curElem )} to="/cart" className="hidden p-3 text-center border-[1px] text-black bg-white rounded-md border-black  hover:text-white hover:bg-black group-hover:flex" >
                            <button>Add To Cart</button>
                          </NavLink>
                          
                        </div>
                        
                      </div>
                    </NavLink>
                    
                 </> 
          )
        })
      }

      
      
      </div>

    </div>
  )
}

export default Products