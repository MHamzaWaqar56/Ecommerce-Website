const ProductReducer = (state , action) =>{

    switch (action.type) {
        case "SET_LOADING":
            return{
                isLoading : true,
                ...state,
            }
            
        
        case "SET_API_DATA":
            return{
                ...state,
                products : action.payload,
            }    

        
        case "SET_API_ERROR":
            return{
                isError : true,
                ...state,
                isLoading: false,
            } 
            
        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading : true,
            }    

        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading : false,
                singleProduct : action.payload,
            }    

        case "SET_SINGLE_ERROR":
            return{
                ...state,
                isError : true,
                isSingleLoading : false,
            }

                     



        default:
            return state;
    }


}

export default ProductReducer