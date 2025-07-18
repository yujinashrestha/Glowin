import {createSlice} from '@reduxjs/toolkit';
const initialState={
    items:[]
}
const cartlistSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addtoCartlist:(state,action)=>{
            const exists=state.items.find(item => item.id===action.payload.id)
            if(!exists){
                state.items.push({...action.payload, quantity:1})
            }
        },
        removeCartlist:(state, action)=>{
            state.items=state.items.filter(item=> item.id!==action.payload.id)
        },
        increaseQuantity:(state, action)=>{
            const item=state.items.find(item => item.id===action.payload.id)
            if(item){
                item.quantity+=1
            }
        },
       decreaseQuantity: (state, action) => {
           const item = state.items.find(item => item.id === action.payload.id);
           if (item && item.quantity > 1) {
           item.quantity -= 1;
            } else if (item && item.quantity === 1) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
             } else {
             console.warn("Item not found or quantity is already 1");
            }
           },

        clearCart:(state)=>{
            state.items=[]
        }
    }
})

export const {addtoCartlist, removeCartlist, increaseQuantity, decreaseQuantity, clearCart} = cartlistSlice.actions
export default cartlistSlice.reducer