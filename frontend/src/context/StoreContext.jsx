import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {
    
    const [cartItems, setrCartItems] = useState({});

    const addToCart = (itemId)=>{
        if (!cartItems[itemId]){
            setrCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setrCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart = (itemId)=>{
        setrCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])

    const contextValue = {
        food_list, 
        cartItems,
        setrCartItems,
        addToCart,
        removeFromCart


    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
}

export default StoreContextProvider