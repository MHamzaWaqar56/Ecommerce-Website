import {NavLink} from "react-router-dom";
import Nav from "./Nav";
import { FiShoppingCart } from "react-icons/fi";
import { useFilterContext } from "../Context/FilterContext";
import { UseCartContext } from "../Context/CartContext";
import {BsBookmarkHeart} from 'react-icons/bs';

const Header = () => {

  const { filters: { text } , updateFilterValue , } = useFilterContext();

  const {total_item} = UseCartContext();



  return (
    <div className="w-full h-30 p-3 flex shadow-lg shadow-gray-200">
    
       <div className="w-1/3">
       
          <div className="flex flex-col p-1  pl-4">
            <NavLink to="/" >
              <p className="font-semibold cursor-pointer text-4xl text-black">Tote</p>
            </NavLink>

            <NavLink to="/" >
              <p className="text-sm font-medium cursor-pointer hover:text-gray-400 text-black">Funky Printed Bags</p>
            </NavLink>

          </div>

       </div>

       <div className="w-1/3">
       
         <Nav />
       
       </div>

       <div className=" w-1/3 p-3 flex items-center justify-end">
       
            <span className="p-2">
            
                <form onSubmit={(e)=>e.preventDefault()}> 
                  <input type="text" name="text" placeholder="Search" value={text} onChange={updateFilterValue} className="w-52 outline-none border-b-2 border-black px-2" />
                </form>

            </span>

            <NavLink to="/cart" className="p-2 relative">
              
              <FiShoppingCart className="text-4xl text-black relative " />
              <span className="text-xs text-blue-600 font-medium absolute top-4 left-[24px]">{total_item}</span>
              
            </NavLink> 

            <NavLink to="/wishlist" className="w-[10%] p-[4px] rounded-md border-[1px] border-black bg-black flex items-center justify-center">
              
              <BsBookmarkHeart className="text-[35px] text-center text-white hover:text-pink-300"  />
                
            </NavLink> 

            

       </div>

    </div>
  )
}

export default Header