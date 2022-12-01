import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Room from "./room";
import RoomSwitch from "./roomSwitch"
import reportWebVitals from "./reportWebVitals";




import { Provider } from "react-redux";

// ******** For Class Redux Hooks ***************8
import roomSwitchStore from "./redux/roomSwitchStore"
// ******** For Class Redux Hooks ***************8


// *********** For Redux Hooks **************************
import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./features/switch";


const store = configureStore({
  reducer: {
    switch: switchReducer,
  },
});
// *********** For Redux Hooks **************************







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* %%%%%%%%% For Redux Hooks uncomment Room, Provider store and comment RoomSwitch, Provider roomSwitchStore %%%%%%%%%%*/}
    {/* <Provider store={store}> */}
      {/* <Room />   */}
    <Provider store={roomSwitchStore}>
      
      <RoomSwitch/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
