import {createSlice} from '@reduxjs/toolkit';
const initialState={
    items:[]
}
const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:initialState,
    reducers:{
        addtoWishlist:(state,action)=>{
            const exists=state.items.find(item => item.id===action.payload.id)
            if(!exists){
                state.items.push(action.payload)
            }
        },
        removeWishlist:(state, action)=>{
            state.items=state.items.filter(item=> item.id!==action.payload.id)
        }
    }
})

export const {addtoWishlist, removeWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer