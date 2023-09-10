// import { createContext, useContext, useReducer, useEffect } from "react";
// import { useProductContext } from "../Context/ProductContext";
import reducer from "../Reducer/FilterReducer";

import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";

// const FilterContext = createContext();

// const initialState = {
//   filter_products: [],
//   all_products: [],
//   filters: {
//     text: "",
//   },
// };


// export const FilterContextProvider = ({ children }) => {

//   const { products } = useProductContext();


//   const [state, dispatch] = useReducer(reducer, initialState);

//   // to set the grid view
//   const setGridView = () => {
//     return dispatch({ type: "SET_GRID_VIEW" });
//   };

//   // to set the list view
//   const setListView = () => {
//     return dispatch({ type: "SET_LIST_VIEW" });
//   };

//   // sorting function
//   const sorting = (event) => {
//     let userValue = event.target.value;
//     dispatch({ type: "GET_SORT_VALUE", payload: userValue });
//   };

//   // update the filter values
//   const updateFilterValue = (event) => {
//     let name = event.target.name;
//     let value = event.target.value;

//     return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
//   };

//   // to sort the product
//   useEffect(() => {
//     dispatch({ type: "FILTER_PRODUCTS" });
//     dispatch({ type: "SORTING_PRODUCTS" });
//   }, [products, state.sorting_value, state.filters]);

//   // to load all the products for grid and list view
//   useEffect(() => {
//     dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
//   }, [products]);

//   return (
//     <FilterContext.Provider
//       value={{
//         ...state,
//         setGridView,
//         setListView,
//         sorting,
//         updateFilterValue,
//       }}>
//       {children}
//     </FilterContext.Provider>
//   );
// };


// export const useFilterContext = () => {
//   return useContext(FilterContext);
// };

const FilterContext = createContext();



const FilterContextProvider = ({children}) =>{

    const {products} = useProductContext();

    const initialState = {
        all_Products : [],
        filter_Products : [],
        filters : {
            text : "",
        }
    }

    const [state , dispatch] = useReducer(reducer , initialState);

    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type : "UPDATE_FILTERS_VALUES" , payload : {name , value}});
    }

    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"})
    } , [state.filters])

    useEffect(()=>{
        dispatch({type : "LOAD_FILTER_PRODUCTS" , payload : products} )
    } , [products])

    return <FilterContext.Provider value={{...state , updateFilterValue}} >{children}</FilterContext.Provider>
}

// Custom Hook

export const useFilterContext = () =>{
    return useContext(FilterContext) ;
}

export {FilterContext , FilterContextProvider}