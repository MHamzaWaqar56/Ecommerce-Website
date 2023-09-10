

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer"

const ProductContext = createContext();

const API = "https://fakestoreapi.com/products?limit=6";
// const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading : false,
  singleProduct : {},
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

//   Get Product
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

//   Single Product
   const getSingleProduct = async (url) =>{
    dispatch({type: "SET_SINGLE_LOADING"})
    try{
    const res = await axios.get(url);
    const singleProduct = await res.data;
    dispatch({type : "SET_SINGLE_PRODUCT" , payload : singleProduct})
    }catch (error){
        dispatch({type : "SET_SINGLE_ERROR"})
    }
   }
  

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state , getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };