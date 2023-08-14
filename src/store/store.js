import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../store/product/productSlice"
import cartReducer from "../store/cart/cartSlice"
import orderReducer from "./order/orderSlice";

const store = configureStore({
    reducer : {
        pizza : pizzaReducer,
        cart : cartReducer,
        order : orderReducer
    }
})

export default store