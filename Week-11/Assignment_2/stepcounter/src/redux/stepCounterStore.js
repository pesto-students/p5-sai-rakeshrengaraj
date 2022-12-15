import { configureStore } from "@reduxjs/toolkit";
import stepCounterReducer from "./stepCounterReducer";

const stepCounterStore = configureStore({
    reducer:{
        stepCounter:stepCounterReducer
    }
})


export default stepCounterStore;