import { createContext, useState } from "react";

export const forUseContext = createContext();


export const ContextProvider = (props)=>{
    
    const [cartShow , setCartShow]  =  useState(false)
    const [filterShow , setfilterShow]  =  useState(false)
    const [cartItem , setCartItem]  =  useState(0)

    return(
        <forUseContext.Provider value={{cartShow , setCartShow , cartItem , setCartItem,filterShow , setfilterShow}}>
        {
            props.children
        }
        </forUseContext.Provider>
    )
}