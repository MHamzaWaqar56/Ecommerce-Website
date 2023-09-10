import { NavLink } from "react-router-dom";
import { UseCartContext } from "./Context/CartContext"
import CartItems from "./components/CartItems";
import FormatPrice from "./components/FormatPrice";
import { useState } from "react";

const Cart = () => {

  const {cart , clearCart , total_price , shipping_fee} = UseCartContext();
  const [message, setMessage] = useState(false)

  if(cart.length === 0){
    return (
      <div className="p-48 flex justify-center items-center">
        <h3 className="text-2xl">No Item in the Cart</h3>
      </div>
    )
  }

  return (
    <div className="px-60 my-20 w-full">

      <div className="w-full flex justify-between"> 
        <p className="p-2 flex justify-center w-1/5 font-semibold">ITEM</p>
        <p className="p-2 flex justify-center w-1/5 font-semibold">PRICE</p>
        <p className="p-2 flex justify-center w-1/5 font-semibold">QUANTITY</p>
        <p className="p-2 flex justify-center w-1/5 font-semibold">SUBTOTAL</p>
        <p className="p-2 flex justify-center w-1/5 font-semibold">REMOVE</p>
      </div>
      <hr/>
      <hr/>

      <div className="w-full">
        {
          cart.map((curElem)=>{
            return (
              <>
                <div>
                    <CartItems key={curElem.id} {...curElem} />
                    <hr/>
                </div>
               
              </>
            )
          })
        }
      </div>
      <hr />
      <div className="w-full flex justify-between">

          <div className=" my-4">
          <NavLink to="/">
              <button className=" p-2 text-lg rounded-md border-2 border-black hover:text-white hover:bg-black">CONTINUE SHOPPING</button>
          </NavLink>
          </div>

          <div className=" my-4">
          
              <button className=" p-2 text-lg text-red-800 rounded-md border-2 border-red-800 hover:text-white hover:bg-red-800 " onClick={clearCart} >CLEAR CART</button>
          
          </div>


      </div>


      <div className="flex items-end flex-col w-full py-10">

        <div className="flex flex-col w-2/5 bg-gray-200 p-4">
          <div className="flex justify-between w-full p-2">
            <p className="font-semibold">SubTotal : </p>
            <p><FormatPrice price={total_price} /></p>
          </div>

          <div className="flex justify-between w-full p-2">
            <p className="font-semibold">Shipping Fee : </p>
            <p><FormatPrice price={shipping_fee} /></p>
          </div>
          
          <hr className="border-[1px] border-gray-400" />

          <div className="flex justify-between w-full p-2">
            <p className="font-semibold">Order Total : </p>
            <p><FormatPrice price={total_price + shipping_fee} /></p>
          </div>
        

      </div>

      

      <div className="flex flex-col w-2/5 py-3">
        <button onClick={()=>setMessage(true)} className=" p-2 text-lg rounded-md border-2 border-black hover:text-white hover:bg-black">CHECKOUT</button>
      </div>

      {message && (
        <div>
            <span className="font-semibold text-xl ">Order proceed successfully.....</span>
        </div>
        )}

    </div>



    </div>
  )
}

export default Cart