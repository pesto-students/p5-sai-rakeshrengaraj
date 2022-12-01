import {configureStore} from "@reduxjs/toolkit";
import roomSwitchReducer from "./roomSwitchReducer";


const roomSwitchStore = configureStore({
    reducer:{
        roomSwitch: roomSwitchReducer
    }
})


export default roomSwitchStore;