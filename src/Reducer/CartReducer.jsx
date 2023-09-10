
const CartReducer = (state , action) =>{

    if(action.type === "ADD_TO_CART"){
        const {id , amount , singleProduct } = action.payload;

        const existingProduct = state.cart.find((curItem)=> curItem.id === id );
        console.log(state.cart)
        if(existingProduct){
            
            let updatedProduct = state.cart.map((curElem)=>{
                if(curElem.id === id){
                    let newAmount = curElem.amount + amount;
                    if(newAmount >= curElem.max){
                        newAmount = curElem.max;
                    }
                    return {
                        ...curElem,
                        amount : newAmount,
                    }
                }else{
                    return curElem;
                }
            });
            return{
                ...state,
                cart : updatedProduct,
            }
                
        }else{

        
        let cartProduct;

        cartProduct = {
            id ,
            amount ,
            image : singleProduct.image,
            price : singleProduct.price,
            title : singleProduct.title,
            max : 10,
        }

        return{
            ...state,
            cart : [...state.cart , cartProduct],
        }

    }
}


// total items

if(action.type === "CART_TOTAL_ITEM"){
    const updatedProduct = state.cart.reduce((initialVal , curElem)=>{
        let {amount} = curElem;
        initialVal = initialVal + amount;
        return initialVal;
    } , 0)
    return{
        ...state,
        total_item : updatedProduct,
    }
}

// total price

if(action.type === "CART_TOTAL_PRICE"){
    const total_price = state.cart.reduce((initialVal , curElem)=>{
        let {price , amount} = curElem;
        initialVal = initialVal + price * amount;
        return initialVal;
    } , 0)
    return{
        ...state,
        total_price ,
    }
}



// set increase
if(action.type === "SET_INCREMENT"){


    let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1;
  
          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }
  
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
  


}

// set decrease
if(action.type === "SET_DECREMENT"){

    let updatedProduct = state.cart.map((curElem)=>{

        if(curElem.id === action.payload){
            let decAmount = curElem.amount -1;
            
            if(decAmount <= 1){
                decAmount = 1;
            }

            return{
                ...curElem,
                amount : decAmount,
            }
        }else{
            return curElem ;
        }

    })

    return{
        ...state,
        cart : updatedProduct,
    }

}


    if(action.type === "REMOVE_ITEM"){

        const updateCart = state.cart.filter((curItem)=> curItem.id !== action.payload)

        return{
            ...state,
            cart : updateCart,
        }

    }

    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart : [],
        }
    }

    

    return state;
}

export default CartReducer;