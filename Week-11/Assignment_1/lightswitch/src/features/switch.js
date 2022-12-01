import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLightOn: true}

export const switchSlice = createSlice({
    name: "switch",
    initialState: initialState ,
    reducers:{
        flipLight: (state, action) =>{
            state.isLightOn = !action.payload
        },
    },
});


export const {flipLight} = switchSlice.actions;
export default switchSlice.reducer;