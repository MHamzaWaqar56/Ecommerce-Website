const WishListReducer = (state , action) =>{

    switch (action.type) {
        case "ADD_TO_WISHLIST":
            console.log(action.payload)
            return{
                ...state,
                wish_products : [...state.wish_products, action.payload],
            }
            
        case "REMOVE_WISHLIST":
            let removeWish = state.wish_products.filter((item) =>{
                return item.id !== action.payload;
            });

            return{
                ...state,
                wish_products : removeWish,
            }    
            
    
        default:
            return state;
    }

}

export default WishListReducer;