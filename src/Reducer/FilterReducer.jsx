// const FilterReducer = (state, action) => {
//     switch (action.type) {
//         case "LOAD_FILTER_PRODUCTS":
//           return {
//             ...state,
//             filter_products: [...action.payload],
//             all_products: [...action.payload],
//           };
    
//         case "SET_GRID_VIEW":
//           return {
//             ...state,
//             grid_view: true,
//           };
    
//         case "SET_LIST_VIEW":
//           return {
//             ...state,
//             grid_view: false,
//           };
    
    
    
//         case "UPDATE_FILTERS_VALUE":
//           const { name, value } = action.payload;
    
//           return {
//             ...state,
//             filters: {
//               ...state.filters,
//               [name]: value,
//             },
//           };
    
//         case "FILTER_PRODUCTS":
//           let { all_products } = state;
//           let tempFilterProduct = [...all_products];
    
//           const { text } = state.filters;

//           console.log("text", text)
    
//           if (text) {
//               tempFilterProduct = tempFilterProduct.filter((curElem) =>{
//               return curElem.title.toLowerCase().includes(text)});
//             }
//             console.log("temp", tempFilterProduct)
    
//                return {
//             ...state,
//             filter_products: tempFilterProduct,
//           };
    
//         default:
//           return state;
//       }
//   };

//   export default FilterReducer


const FilterReducer = (state , action) =>{
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                all_Products: [...action.payload],
                filter_Products : [...action.payload],
            }
            
        case "UPDATE_FILTERS_VALUES":
            const {name , value} = action.payload;
            
            return{
                ...state,
                filters :{
                    ...state.filters,
                    [name] : value,
                },
            }


        case "FILTER_PRODUCTS":
            const {all_Products} = state;
            let tempFilterProduct = [...all_Products]    

            const {text} = state.filters;

            if(text) {
                tempFilterProduct = tempFilterProduct.filter((curElem)=>{
                    return curElem.title.toLowerCase().includes(text);
                })

            }

            return{
                ...state,
                filter_Products : tempFilterProduct,
            }
            
    
        default:
            return state;
    }
}

export default FilterReducer;