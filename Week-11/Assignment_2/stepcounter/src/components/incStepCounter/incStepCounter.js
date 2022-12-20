import React from "react";
import { connect } from "react-redux";
import { INCREMENT_STEP } from "../../redux/stepCounterAction";

function IncStepCounter(props) {
  
  const incrementCount = () => {
    props.dispatch({ type: INCREMENT_STEP });
  };


  return (
    <button type="button" onClick={incrementCount}>
      Increment a Step
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    stepCount: state.stepCounter.stepCount,
  };
};

export default connect(mapStateToProps)(IncStepCounter);
