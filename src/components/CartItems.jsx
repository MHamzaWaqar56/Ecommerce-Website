import React, { useState } from "react";
import FormatPrice from "./FormatPrice";
import { FaTrash } from "react-icons/fa";
import QuantityToggle from "./QuantityToggle";
import { UseCartContext } from "../Context/CartContext";

const CartItems = ({ id, title, image, price, amount }) => {

  const { removeItem , setIncrement , setDecrement} = UseCartContext();
  
  return (
    <div className="w-full flex justify-between">
       <div className="w-1/2 flex flex-col justify-center items-center p-2 ">
        <figure>
            <img src={image} alt={title} className="w-12 p-1" />
        </figure>
        <div>
            <p className="text-sm p-1">{title}</p>
        </div>
       </div>
       <div className="w-1/2 flex justify-center items-center p-2 ">
          <p className="p-1">
            <FormatPrice price={price} />
          </p>
       </div>
       <div className="w-1/2 flex justify-center items-center p-2 ">
         <QuantityToggle amount={amount} setIncrease={()=>setIncrement(id)} setDecrease={()=>setDecrement(id)} />
       </div>
       <div className="w-1/2 flex justify-center items-center p-2 ">
        <p className="p-1">
            <FormatPrice price={price * amount} />
        </p>
       </div>
       <div className="w-1/2 flex justify-center items-center p-2 ">
        <FaTrash className="text-2xl p-1 text-red-700" onClick={()=>removeItem(id)} />
       </div>
    </div>
  );
};

export default CartItems;