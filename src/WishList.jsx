import { UseWishContext } from './Context/WishContext';
import FormatPrice from './components/FormatPrice';
import { IoHeartDislikeOutline } from "react-icons/io5";

 const WishList = () => {

    const {wish_products , RemoveWishList} = UseWishContext();
    console.log("wish" , wish_products )
    if(wish_products.length === 0){
        return (
          <div className="p-48 flex justify-center items-center">
            <h3 className="text-2xl">No Item in the Wish List</h3>
          </div>
        )
      }
    
    // let wishlist = []
    // wishlist = [...wishlist, wish_products] 

  return (
    <div className="w-full p-14 my-7">
        <div className="grid grid-cols-3 gap-28 ">
            {
                wish_products.map((curElem)=>(
                  <div className="w-full  h-80 px-8 py-5 group min-h-[400px] max-h-[500px] border-[1px] border-black">
                      
                        <div className="w-[16%] rounded-md border-[1px] border-black bg-black flex items-center justify-center" onClick={()=>RemoveWishList(curElem.id)}>
                         <IoHeartDislikeOutline  className="text-[35px] text-center text-white hover:text-pink-300" />
                        </div>
                        <div>
                          
                          <figure>
                            <img className="w-full h-48" src={curElem.image} alt={curElem.title} />
                          </figure>

                          <p className="font-semibold p-2 text-base text-center">{curElem.title}</p>
                          <p className="font-medium p-2 text-base text-center"><FormatPrice price={curElem.price} /></p>
                        </div>
                        
                      </div>

                ))
            }
        </div>
    </div>
  )
}

export default WishList;

