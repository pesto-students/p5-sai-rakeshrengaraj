import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {flipLight} from "./features/switch";

function Room() {

  const switchLight = useSelector((state) => state.switch)
  const dispatch = useDispatch()


  const lightedness = switchLight.isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      The room is {lightedness}
      <br></br>
      <button onClick={()=>{
        dispatch(flipLight(switchLight.isLightOn))
      }}>Flip</button>
    </div>
  );
}

export default Room;