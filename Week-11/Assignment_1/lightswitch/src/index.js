import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoomSwitch from "./roomSwitch"
import reportWebVitals from "./reportWebVitals";




import { Provider } from "react-redux";

import roomSwitchStore from "./redux/roomSwitchStore"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={roomSwitchStore}>
      <RoomSwitch/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
