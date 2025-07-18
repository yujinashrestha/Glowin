import { configureStore } from "@reduxjs/toolkit";
import wishlistreducer from '../features/WishlistSlice'
import cartlistreducer from '../features/CartlistSlice'

const store=configureStore({
  reducer:{
    wishlist:wishlistreducer,
    cartlist:cartlistreducer
  }
})

export default store;