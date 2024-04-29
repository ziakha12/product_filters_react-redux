import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState : [
        
    ],
    reducers:{
        addProduct : (state , action)=>{
            state.push(action.payload)
        },
        deletItem : (state , action) =>{
            state.filter(item =>  item.id !== action.payload)
            
        }
    }
})

export default cartSlice.reducer
export const {addProduct , deletItem} = cartSlice.actions
