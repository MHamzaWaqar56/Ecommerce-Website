import { NavLink, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { useProductContext } from "./Context/ProductContext";
import FormatPrice from "./components/FormatPrice";
import  QuantityToggle  from "./components/QuantityToggle";
import {AiOutlineHeart , AiOutlinePlus , AiOutlineMinus} from "react-icons/ai";
import { UseCartContext } from "./Context/CartContext";
import { UseWishContext } from "./Context/WishContext";



const API = "https://fakestoreapi.com/products";

// const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { addToCart } = UseCartContext();
  const {AddToWishList} = UseWishContext();
  const [isOpen , setIsOpen] = useState(false);
  const [position, setPosition] = useState(0)
  const [amount ,setAmount] = useState(1);

  const setDecrease = () =>{
      amount > 1 ? setAmount(amount-1) : setAmount(1);
  }

  const setIncrease = () =>{
    amount < 10 ? setAmount(amount+1) : setAmount(10);
  }

  const toggleAccordion = (pos) =>{
    setPosition(pos)
    setIsOpen(!isOpen);
  }



  const {getSingleProduct , isSingleLoading , singleProduct } = useProductContext();

  const { id } = useParams();

  const {
    id: hamza,
    description,
    title,
    rate,
    count,
    rating,
    price,
    image,
  } = singleProduct;


  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

    

  
  if(isSingleLoading){
    return (
      <div className="text-2xl font-semibold flex p-72 justify-center items-center">Loading....</div>
    )
  }

  return (
    <div className="w-full flex justify-center px-20 py-10">
      <div className="w-1/2 flex flex-col">
        <div className="w-full border-[1px] min-h-[200px] max-h-[700px] h-full border-gray-300 px-20 py-5 ">
          <figure><img src={image} alt={title} /></figure>
        </div>
        <div className="w-full">
         <p className="p-3 font-semibold">{description}</p>
        </div>
      </div>
      
      <div className="w-1/2 px-12 py-5">
        <p className="font-bold text-3xl p-[2px]">{title}</p>  
        <p className="font-semibold text-xl p-[2px]"><FormatPrice price={price} /></p>
        <br/>
        <div>
          <p><b>Rating : </b> {rating?.rate} ({rating?.count})</p>
        </div>
        <br/>
        <p className="font-semibold text-md p-[2px]">Quantity</p>
        <div className="my-1">
          <QuantityToggle amount={amount} setIncrease={()=>setIncrease(id)} setDecrease={()=>setDecrease(id)} />
        </div>
        <br/>
        <div className="flex justify-between">
          <NavLink  onClick={()=>addToCart(id , amount , singleProduct )} to="/cart" className="w-[88%] border-[1px] text-black border-black hover:text-pink-300 text-center rounded-md p-2" >
            <button  >Add To Cart</button>
          </NavLink>
          <NavLink to="/wishlist"  onClick={()=>AddToWishList(singleProduct)} className="w-[10%]  rounded-md border-[1px] border-black bg-black flex items-center justify-center">
              <AiOutlineHeart className="text-[35px] text-center text-white hover:text-pink-300" />
          </NavLink>
        </div>
        <br/>
        <div>
          <button className="w-full bg-black border-[1px] text-white border-black  text-center rounded-md p-2">Buy Now</button>
        </div>
        <br/>
        
       <ul className="w-full">
          <li className="w-full flex flex-col p-[15px]">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold p-[2px]">PRODUCT INFO</h3>
              <div className="flex justify-center items-center flex-col">
              <AiOutlinePlus className={isOpen && position == 1 ? "hidden" : "flex" } onClick={()=>toggleAccordion(1)} />
              <AiOutlineMinus className={isOpen && position == 1 ? "flex" : "hidden"} onClick={()=>toggleAccordion(1)}  />
              </div>
            </div>
            <div className={isOpen && position == 1 ? "flex" : "hidden"}>
              <p className="p-[2px]">I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
            </div>
          </li>
            <hr/>
            <li className="w-full flex flex-col p-[15px]">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold p-[2px]">SHIPPING INFO</h3>
              <div className="flex justify-center items-center flex-col">
              <AiOutlinePlus className={isOpen && position == 2 ? "hidden" : "flex"} onClick={()=>toggleAccordion(2)} />
              <AiOutlineMinus className={isOpen && position == 2 ? "flex" : "hidden"} onClick={()=>toggleAccordion(2)}  />
              </div>
            </div>
            <div className={isOpen && position == 2 ? "flex" : "hidden"}>
              <p className="p-[2px]">I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.</p>
            </div>
          </li>
          <hr/>
          <li className="w-full flex flex-col p-[15px]">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold p-[2px]">RETURN & REFUND POLICY</h3>
              <div className="flex justify-center items-center flex-col">
              <AiOutlinePlus className={isOpen && position == 3 ? "hidden" : "flex"} onClick={()=>toggleAccordion(3)} />
              <AiOutlineMinus className={isOpen && position == 3 ? "flex" : "hidden"} onClick={()=>toggleAccordion(3)}  />
              </div>
            </div>
            <div className={isOpen && position == 3 ? "flex" : "hidden"}>
              <p className="p-[2px]">I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
            </div>
          </li>
          <hr/>

  </ul>
        
        
      </div>
    </div>
  )
}

export default SingleProduct