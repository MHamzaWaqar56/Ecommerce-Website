import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/WishListReducer';

const WishContext = createContext();

const WishProvider = ({children}) =>{

    const getLocalWishData = () =>{
        const localWishData = localStorage.getItem("wishItems");

        if(localWishData === []){
            return []
        }else{
            return JSON.parse(localWishData);
        }

    }

    console.log("wishlists" , getLocalWishData());

    const initialState = {
        wish_products : getLocalWishData(),
        // wish_products : [],
    }

    const [state , dispatch] = useReducer(reducer , initialState);
    
    const AddToWishList = (singleProduct) =>{
        dispatch({type : "ADD_TO_WISHLIST" , payload : singleProduct})
    }

    const RemoveWishList = (singleProductId) =>{
        dispatch({type : "REMOVE_WISHLIST" , payload : singleProductId})
    }

    useEffect(()=>{
        localStorage.setItem("wishItems" , JSON.stringify(state.wish_products));
    }, [state.wish_products])


    return <WishContext.Provider value={{...state , AddToWishList , RemoveWishList}}>{children}</WishContext.Provider>
} 

// custom hook

const UseWishContext = () =>{
    return useContext(WishContext);
}

export {WishContext , WishProvider , UseWishContext};