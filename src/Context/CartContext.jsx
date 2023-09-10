import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({children}) =>{

    const getLocalCartData = () =>{
        const localCartData = localStorage.getItem("localCart");

        if(localCartData === []){
            return []
        }else{
            return JSON.parse(localCartData);
        }

    }

    const initialState = {
        // cart : [],
        cart : getLocalCartData(),
        total_items : "",
        total_price : "",
        shipping_fee : 500,
    }

    const [state , dispatch] = useReducer(reducer , initialState);

    const addToCart = (id , amount , singleProduct ) =>{
        
        dispatch({type : "ADD_TO_CART" , payload : { id , amount , singleProduct }})
    }

    const removeItem = (id) =>{
        dispatch({type : "REMOVE_ITEM" , payload : id})
    }
    

    // Clear cart

    const clearCart = () =>{
        dispatch({type : "CLEAR_CART"})
    }

    // Set Increament
    const setIncrement = (id) =>{
        dispatch({type  : "SET_INCREMENT" , payload : id})
    }

    // Set Increament
    const setDecrement = (id) =>{
        dispatch({type  : "SET_DECREMENT" , payload : id})
    }

    //  local storage with get and set

    useEffect(()=>{
        dispatch({type : "CART_TOTAL_ITEM"});
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("localCart" , JSON.stringify(state.cart))
    } , [state.cart])



    return <CartContext.Provider value={{...state , addToCart , removeItem , clearCart , setDecrement , setIncrement}} >{children}</CartContext.Provider>
}

const UseCartContext = () =>{
    return useContext(CartContext);
}

export {CartContext , CartProvider , UseCartContext};