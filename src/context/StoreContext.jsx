import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext =createContext(null)

const StoreContextProvider = (props)=>{


    const [cartitems,setcartitem]=useState({});

    const addtocart=(itemid)=>{
        if(!cartitems[itemid]) {
            setcartitem((prev)=>({...prev,[itemid]:1}))
            
        }
        else{
            setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const removefromcart=(itemid)=>{
        setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    useEffect(()=>{
        console.log(cartitems);
    },[cartitems])
    const contextValue={
        food_list,
        cartitems,
        setcartitem,
        addtocart,
        removefromcart
        


}

return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}
export default StoreContextProvider;