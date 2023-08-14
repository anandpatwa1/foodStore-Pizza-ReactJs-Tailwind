import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isError : false,
    isSuccess : false,
    isLoading : false,
    pizzas : []
}

const PizzaSlice = createSlice({
    name : "Pizza" , 
    initialState,
    reducers: {

    },
    extraReducers:  (builder)=> {
        builder
        .addCase(fatchPizzas.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(fatchPizzas.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.pizzas = action.payload
        })
        .addCase(fatchPizzas.rejected , (state)=>{
            state.isLoading = false
            state.isError = true
        })

    }

})

export const fatchPizzas =  createAsyncThunk('fatch/Pizza' , async()=>{
    // const API_URL = 'https://fakestoreapi.com/products'
    const API_URL = '/api/products'
    // const response = await axios.get(API_URL + '/products')
    const response = await fetch(API_URL)
    const data = await response.json()
    return data

})

export default PizzaSlice.reducer