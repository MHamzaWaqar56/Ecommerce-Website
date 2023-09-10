import React from 'react'
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function QuantityToggle({amount , setIncrease , setDecrease}) {

  return (
    <div className='flex border-[1px] border-black w-20 h-10 group'>
        
        <div className='border-none w-14 p-2 justify-center flex '>{amount}</div>
        <div className=' hidden group-hover:flex flex-col justify-around'>

           <button onClick={()=>setIncrease()}><AiOutlineUp /></button>
           
           <button onClick={()=>setDecrease()}><AiOutlineDown /></button>

        </div>

    </div>
  )
}
