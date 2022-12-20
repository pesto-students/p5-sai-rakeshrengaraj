import React from "react";
import IncStepCounter from "../incStepCounter/incStepCounter";
import DecStepCounter from "../decStepCounter/decStepCounter";
import ResetSteps from "../resetStepCounter/resetStepCounter";
import {connect} from "react-redux";

function StepCounter(props) {
  return (
    <div className="step_calculations">
      <h1 className="step_count">You have walked {props.stepCount} steps</h1>  
      <IncStepCounter/>
      <DecStepCounter/>
      <ResetSteps/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stepCount: state.stepCounter.stepCount
  }
}


export default connect(mapStateToProps)(StepCounter);
