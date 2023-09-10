import React, { useState } from 'react'
import AccordionData from './AccordionData'
import { AiOutlinePlus , AiOutlineMinus } from "react-icons/ai";

const Accordion = () => {

    const [isOpen , setIsOpen] = useState(false);
    const toggleAccordion = () =>{
        setIsOpen(!isOpen);
      }
    

  return (
    <div>
        {
            AccordionData.map((title , description , i)=>{
                return(
                    <ul key={i}>
                        <li className="w-full flex flex-col p-[15px]">
                            <div className="flex justify-between">
                            <h3 className="text-lg font-semibold p-[2px]">{title}</h3>
                            <div className="flex justify-center items-center flex-col">
                            <AiOutlinePlus className={isOpen ? "hidden" : "flex"} onClick={toggleAccordion} />
                            <AiOutlineMinus className={isOpen ? "flex" : "hidden"} onClick={toggleAccordion}  />
                            </div>
                            </div>
                            <div className={isOpen ? "flex" : "hidden"}>
                            <p className="p-[2px]">{description}</p>
                            </div>
                        </li>
                        <hr/>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Accordion;